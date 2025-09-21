// Converte HEX para HSL
function hexToHSL(hex) {
  hex = hex.replace(/^#/, "");
  if (hex.length === 3)
    hex = hex
      .split("")
      .map((x) => x + x)
      .join("");
  const r = parseInt(hex.substring(0, 2), 16) / 255;
  const g = parseInt(hex.substring(2, 4), 16) / 255;
  const b = parseInt(hex.substring(4, 6), 16) / 255;

  const max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  let h,
    s,
    l = (max + min) / 2;

  if (max === min) h = s = 0;
  else {
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

// Converte HSL de volta para HEX
function hslToHex(h, s, l) {
  function f(n) {
    const k = (n + h * 12) % 12;
    const a = s * Math.min(l, 1 - l);
    const c = l - a * Math.max(-1, Math.min(k - 3, Math.min(9 - k, 1)));
    return Math.round(255 * c)
      .toString(16)
      .padStart(2, "0");
  }
  return `#${f(0)}${f(8)}${f(4)}`;
}

// Converte HEX para rgb() string
function hexToRGBString(hex) {
  hex = hex.replace(/^#/, "");
  if (hex.length === 3)
    hex = hex
      .split("")
      .map((x) => x + x)
      .join("");
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return `rgb(${r}, ${g}, ${b})`;
}

// Gera uma escala de cores a partir da cor base
function generateColorScale(baseHex, steps = 10) {
  const { h, s, l } = hexToHSL(baseHex);
  const scale = [];
  const minL = 0.05;
  const maxL = 0.95;

  const darkerSteps = steps;
  const lighterSteps = steps;

  const stepDark = (l - minL) / darkerSteps;
  for (let i = darkerSteps; i > 0; i--) {
    scale.push(hslToHex(h, s, l - stepDark * i));
  }

  scale.push(baseHex);

  const stepLight = (maxL - l) / lighterSteps;
  for (let i = 1; i <= lighterSteps; i++) {
    scale.push(hslToHex(h, s, l + stepLight * i));
  }

  return scale;
}

// Gera o objeto completo no formato Tailwind
// Gera o objeto completo no formato Tailwind
function generateObjectColorScale(baseHexList, steps = 10) {
  const colorSteps = [
    1000, 950, 900, 850, 800, 750, 700, 650, 600, 550, 500, 450, 400, 350, 300, 250, 200, 150, 100, 50,
  ];

  const obj = {};

  baseHexList.forEach(({ hex, name }) => {
    const scale = generateColorScale(hex, steps);
    obj[name] = {};

    colorSteps.forEach((step, index) => {
      const colorHex = scale[index] || scale[scale.length - 1];
      obj[name][step] = { value: colorHex.toLowerCase() };
    });
  });

  return obj;
}

// Exemplo de uso
console.log(
  generateObjectColorScale([
    { hex: "#ef4444", name: "red" },
    { hex: "#f97316", name: "orange" },
    { hex: "#f59e0b", name: "amber" },
    { hex: "#eab308", name: "yellow" },
    { hex: "#84cc16", name: "lime" },
    { hex: "#22c55e", name: "green" },
    { hex: "#10b981", name: "emerald" },
    { hex: "#14b8a6", name: "teal" },
    { hex: "#06b6d4", name: "cyan" },
    { hex: "#0ea5e9", name: "sky" },
    { hex: "#3b82f6", name: "blue" },
    { hex: "#6366f1", name: "indigo" },
    { hex: "#8b5cf6", name: "violet" },
    { hex: "#a855f7", name: "purple" },
    { hex: "#d946ef", name: "fuchsia" },
    { hex: "#ec4899", name: "pink" },
    { hex: "#f43f5e", name: "rose" },
    { hex: "#78716c", name: "stone" },
    { hex: "#737373", name: "natural" },
    { hex: "#71717a", name: "zinc" },
    { hex: "#6b7280", name: "gray" },
    { hex: "#64748b", name: "slate" },
  ])
);
