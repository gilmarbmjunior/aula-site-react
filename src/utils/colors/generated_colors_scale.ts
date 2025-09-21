type HSL = {
  h: number;
  s: number;
  l: number;
};

function hexToHSL(hex: string): HSL {
  hex = hex.replace(/^#/, "");

  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((x) => x + x)
      .join("");
  }

  const r: number = parseInt(hex.substring(0, 2), 16) / 255;
  const g: number = parseInt(hex.substring(2, 4), 16) / 255;
  const b: number = parseInt(hex.substring(4, 6), 16) / 255;

  const max: number = Math.max(r, g, b);
  const min: number = Math.min(r, g, b);

  let h: number = (max + min) / 2;
  let s: number = (max + min) / 2;
  let l: number = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;

    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }

    h /= 6;
  }

  return { h, s, l };
}

function hslToHex(h: number, s: number, l: number): string {
  function f(n: number) {
    const k: number = (n + h * 12) % 12;
    const a: number = s * Math.min(l, 1 - l);
    const c: number = l - a * Math.max(-1, Math.min(k - 3, Math.min(9 - k, 1)));

    return Math.round(255 * c)
      .toString(16)
      .padStart(2, "0");
  }

  return `#${f(0)}${f(8)}${f(4)}`;
}

function hexToRGB(hex: string) {
  hex = hex.replace(/^#/, "");

  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((x) => x + x)
      .join("");
  }

  const r: number = parseInt(hex.substring(0, 2), 16);
  const g: number = parseInt(hex.substring(2, 4), 16);
  const b: number = parseInt(hex.substring(4, 6), 16);

  return `rgb(${r}, ${g}, ${b})`;
}

function colorScale(baseHex: string, steps: number) {
  const { h, s, l }: HSL = hexToHSL(baseHex);
  const scale: string[] = [];
  const minL: number = 0.05;
  const maxL: number = 0.95;

  const stepDark: number = (l - minL) / steps;

  for (let i: number = steps; i > 0; i--) {
    scale.push(hslToHex(h, s, l - stepDark * i));
  }

  scale.push(baseHex);

  const stepLight: number = (maxL - l) / steps;

  for (let i: number = 1; i <= steps; i++) {
    scale.push(hslToHex(h, s, l + stepLight * i));
  }

  return scale;
}

type ColorScale = {
  hex: string;
  name: string;
};

type StepColor = {
  value: string;
};

type ColorSteps = {
  [step: number]: StepColor;
};

type ColorScaleObject = {
  [name: string]: ColorSteps;
};

export function generateColorScale(baseHexList: ColorScale[], type: "hex" | "rgb", steps: number): ColorScaleObject {
  const colorSteps: number[] = Array.from({ length: steps * 2 + 1 }, (_, i) => {
    return 1000 - i * Math.floor(1000 / (steps * 2));
  });

  const obj: ColorScaleObject = {};

  baseHexList.forEach(({ hex, name }) => {
    const scale = colorScale(hex, steps);
    obj[name] = {};

    colorSteps.forEach((step, index) => {
      const colorHex = scale[index] || scale[scale.length - 1];
      obj[name][step] = { value: type === "hex" ? colorHex.toLowerCase() : hexToRGB(colorHex.toLowerCase()) };
    });
  });

  return obj;
}
