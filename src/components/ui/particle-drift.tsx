import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
} from "react";

type NeuformMode = "dark" | "light";
type NeuformModePreference = NeuformMode | "auto";

type FocusTarget = {
  selector: string;
  role: "background" | "ui";
  width?: string;
};

type BakeKnobs = {
  size: number;
  gap: number;
  length: number;
  density: number;
  strokeWidth: number;
  mode: NeuformMode;
};

type EffectDefinition = {
  title: string;
  source: string;
  background: string | ((mode: NeuformMode) => string);
  defaultMode?: NeuformModePreference;
  supportsMode?: boolean;
  targets: readonly FocusTarget[];
  focusCss?: string;
  patch?: (source: string, knobs: BakeKnobs) => string;
};

export type ParticleDriftProps = {
  mode?: NeuformModePreference;
  speed?: number;
  size?: number;
  gap?: number;
  length?: number;
  density?: number;
  strokeWidth?: number;
  opacity?: number;
  hue?: number;
  saturation?: number;
  brightness?: number;
  className?: string;
  style?: CSSProperties;
};

const PARTICLE_DRIFT_DEFAULTS = {
  mode: "dark" as NeuformMode,
  speed: 1,
  size: 1,
  gap: 2,
  length: 1,
  density: 1,
  strokeWidth: 1,
  opacity: 1,
  hue: 0,
  saturation: 1,
  brightness: 1,
} as const;

const LIGHT_PAPER = "#eef1f6";

function clamp(value: number, minimum: number, maximum: number) {
  return Math.min(maximum, Math.max(minimum, value));
}

function scaleCount(base: number, density: number, minimum = 1) {
  return Math.max(minimum, Math.round(base * density));
}

function resolveMode(
  mode: NeuformMode | number | string | undefined,
  fallback: NeuformMode = "dark",
): NeuformMode {
  if (mode === undefined || mode === null) return fallback;
  if (mode === "light" || mode === 1 || mode === "1") return "light";
  return "dark";
}

function readAutomaticMode(): NeuformMode {
  if (typeof document === "undefined" || typeof window === "undefined")
    return "dark";
  const root = document.documentElement;
  const declared = root.dataset.scheme ?? root.dataset.theme;
  if (declared === "light" || declared === "dark") return declared;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function useAutomaticMode(enabled: boolean) {
  const [mode, setMode] = useState<NeuformMode>(readAutomaticMode);

  useEffect(() => {
    if (
      !enabled ||
      typeof document === "undefined" ||
      typeof window === "undefined"
    )
      return undefined;
    const root = document.documentElement;
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const update = () => setMode(readAutomaticMode());
    const observer = new MutationObserver(update);
    observer.observe(root, {
      attributes: true,
      attributeFilter: ["data-scheme", "data-theme"],
    });
    media.addEventListener("change", update);
    update();
    return () => {
      observer.disconnect();
      media.removeEventListener("change", update);
    };
  }, [enabled]);

  return mode;
}

function resolveBackground(
  background: EffectDefinition["background"],
  mode: NeuformMode,
) {
  return typeof background === "function" ? background(mode) : background;
}

const PARTICLE_DRIFT_SOURCE = `<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rahul Karthik Particle Field</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&family=Sora:wght@400;600;700&display=swap" rel="stylesheet">
</head>
<body class="bg-[#0F172A] min-h-screen flex items-center justify-center p-0 font-sans antialiased text-[#FFFFFF] overflow-hidden">
    <canvas id="particle-canvas" class="absolute inset-0 w-full h-full pointer-events-auto z-0 opacity-100"></canvas>

    <script>
        document.addEventListener("DOMContentLoaded", () => {
            const canvas = document.getElementById('particle-canvas');
            const ctx = canvas.getContext('2d');

            let width, height;
            let nodes = [];
            let beams = [];
            
            // Customized character pool with Rahul Karthik's details: Name, College (NBKRIST), and Tech Skills
            const chars = 'RAHUL KARTHIK NBKRIST REACT NODE PYTHON SQL JS DJANGO AWS GIT MYSQL PANDAS'.replace(/\\s+/g, '').split('');
            let mouse = { x: -1000, y: -1000 };

            function resize() {
                width = canvas.clientWidth;
                height = canvas.clientHeight;
                const dpr = window.devicePixelRatio || 1;
                canvas.width = width * dpr;
                canvas.height = height * dpr;
                ctx.scale(dpr, dpr);
            }

            window.addEventListener('resize', () => {
                resize();
                initParticles();
            });

            window.addEventListener('mousemove', e => {
                const rect = canvas.getBoundingClientRect();
                mouse.x = e.clientX - rect.left;
                mouse.y = e.clientY - rect.top;
            });

            window.addEventListener('mouseleave', () => {
                mouse.x = -1000;
                mouse.y = -1000;
            });

            function initParticles() {
                nodes = Array.from({ length: 95 }).map(() => ({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vy: (Math.random() * 0.4) + 0.15,
                    char: chars[Math.floor(Math.random() * chars.length)]
                }));

                beams = Array.from({ length: 28 }).map(() => ({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    length: Math.random() * 100 + 50,
                    speed: (Math.random() * 5) + 2.5,
                    opacity: Math.random() * 0.45 + 0.25
                }));
            }

            resize();
            initParticles();

            function draw() {
                ctx.clearRect(0, 0, width, height);

                // 1. Upward Beams
                beams.forEach(b => {
                    b.y -= b.speed;
                    if (b.y + b.length < 0) {
                        b.y = height + 80;
                        b.x = Math.random() * width;
                    }
                    let g = ctx.createLinearGradient(b.x, b.y, b.x, b.y + b.length);
                    g.addColorStop(0, \`rgba(96, 165, 250, \${b.opacity})\`);
                    g.addColorStop(1, 'transparent');
                    ctx.strokeStyle = g;
                    ctx.lineWidth = 1.5;
                    ctx.beginPath();
                    ctx.moveTo(b.x, b.y);
                    ctx.lineTo(b.x, b.y + b.length);
                    ctx.stroke();
                });

                // 2. Interactive Nodes with Rahul's Name, College, and Skill characters
                ctx.font = '600 13px "Sora", monospace';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                
                // Proximity Lines between nodes
                ctx.lineWidth = 0.6;
                for(let i = 0; i < nodes.length; i++) {
                    let n1 = nodes[i];
                    for(let j = i + 1; j < nodes.length; j++) {
                        let n2 = nodes[j];
                        let d = Math.hypot(n1.x - n2.x, n1.y - n2.y);
                        if(d < 120) {
                            ctx.strokeStyle = \`rgba(156, 163, 175, \${0.18 * (1 - d/120)})\`;
                            ctx.beginPath();
                            ctx.moveTo(n1.x, n1.y);
                            ctx.lineTo(n2.x, n2.y);
                            ctx.stroke();
                        }
                    }
                }

                nodes.forEach(n => {
                    n.y += n.vy;
                    if(n.y > height + 20) {
                        n.y = -20;
                        n.x = Math.random() * width;
                    }

                    let dist = Math.hypot(mouse.x - n.x, mouse.y - n.y);

                    // Dynamic Character Swap to Name, College & Skills
                    if (dist < 180 || Math.random() > 0.985) {
                        n.char = chars[Math.floor(Math.random() * chars.length)];
                    }

                    // Mouse Connection Lines with Emerald & Blue highlight
                    if (dist < 180) {
                        ctx.strokeStyle = \`rgba(52, 211, 153, \${0.65 * (1 - dist/180)})\`;
                        ctx.lineWidth = 1;
                        ctx.beginPath(); 
                        ctx.moveTo(n.x, n.y); 
                        ctx.lineTo(mouse.x, mouse.y); 
                        ctx.stroke();
                    }

                    ctx.fillStyle = dist < 180 ? '#34D399' : 'rgba(148, 163, 184, 0.45)';
                    ctx.fillText(n.char, n.x, n.y);
                });

                requestAnimationFrame(draw);
            }
            draw();
        });
    </script>
</body>
</html>`;

const PARTICLE_DRIFT_DEFINITION: EffectDefinition = {
  title: "Particle Drift",
  source: PARTICLE_DRIFT_SOURCE,
  supportsMode: true,
  background: (mode) => (mode === "light" ? LIGHT_PAPER : "#0F172A"),
  targets: [{ selector: "#particle-canvas", role: "background" }],
  patch(source, { size, length, density, mode }) {
    const link = Math.round(120 * length);
    const proximityAlpha = mode === "light" ? 0.22 : 0.16;
    let next = source
      .replace(
        "Array.from({ length: 95 })",
        `Array.from({ length: ${scaleCount(95, 1, 12)} })`.replace(
          String(scaleCount(95, 1, 12)),
          String(scaleCount(95, density, 12)),
        ),
      )
      .replace(
        "Array.from({ length: 28 })",
        `Array.from({ length: ${scaleCount(28, density, 4)} })`,
      )
      .replace(
        "length: Math.random() * 100 + 50,",
        `length: (Math.random() * 100 + 50) * ${length},`,
      )
      .replace("if(d < 120) {", `if(d < ${link}) {`)
      .replace("0.18 * (1 - d/120)", `${proximityAlpha} * (1 - d/${link})`)
      .replace(
        "ctx.lineWidth = 1.5;",
        `ctx.lineWidth = ${Number((1.5 * size).toFixed(2))};`,
      );
    if (mode === "light") {
      next = next
        .replaceAll("rgba(96, 165, 250,", "rgba(37, 99, 235,")
        .replaceAll("rgba(156, 163, 175,", "rgba(36, 48, 68,")
        .replace(
          "ctx.fillStyle = dist < 180 ? '#34D399' : 'rgba(148, 163, 184, 0.45)';",
          "ctx.fillStyle = dist < 180 ? '#2563EB' : 'rgba(36, 48, 68, 0.55)';",
        );
    }
    return next;
  },
};

function buildFocusedDocument(
  definition: EffectDefinition,
  knobs: BakeKnobs & {
    speed: number;
    opacity: number;
  },
) {
  const mode = knobs.mode;
  const background = resolveBackground(definition.background, mode);
  const targetJson = JSON.stringify(definition.targets).replace(
    /</g,
    "\\u003c",
  );
  const controlsJson = JSON.stringify({
    mode,
    speed: knobs.speed,
    size: knobs.size,
    gap: knobs.gap,
    length: knobs.length,
    density: knobs.density,
    strokeWidth: knobs.strokeWidth,
    opacity: knobs.opacity,
  }).replace(/</g, "\\u003c");
  const patchedSource = definition.patch
    ? definition.patch(definition.source, {
        size: knobs.size,
        gap: knobs.gap,
        length: knobs.length,
        density: knobs.density,
        strokeWidth: knobs.strokeWidth,
        mode,
      })
    : definition.source;

  const focusStyle = `<style data-threeui-focus>
html, body { width: 100% !important; height: 100% !important; min-height: 0 !important; margin: 0 !important; padding: 0 !important; overflow: hidden !important; background: transparent !important; }
[data-threeui-role="background"] { position: fixed !important; inset: 0 !important; width: 100% !important; height: 100% !important; max-width: none !important; max-height: none !important; z-index: 0 !important; opacity: 1 !important; pointer-events: auto !important; }
</style>`;

  const controlScript = `<script data-threeui-controls>
(function () {
  var controls = ${controlsJson};
  window.__SF_CONTROLS = controls;
})();
</script>`;

  return patchedSource
    .replace(/<head([^>]*)>/i, `<head$1>${controlScript}${focusStyle}`)
    .replace(/<\/body>/i, `</body>`);
}

export default function ParticleDrift({
  mode,
  speed = PARTICLE_DRIFT_DEFAULTS.speed,
  size = PARTICLE_DRIFT_DEFAULTS.size,
  gap = PARTICLE_DRIFT_DEFAULTS.gap,
  length = PARTICLE_DRIFT_DEFAULTS.length,
  density = PARTICLE_DRIFT_DEFAULTS.density,
  strokeWidth = PARTICLE_DRIFT_DEFAULTS.strokeWidth,
  opacity = PARTICLE_DRIFT_DEFAULTS.opacity,
  hue = PARTICLE_DRIFT_DEFAULTS.hue,
  saturation = PARTICLE_DRIFT_DEFAULTS.saturation,
  brightness = PARTICLE_DRIFT_DEFAULTS.brightness,
  className,
  style,
}: ParticleDriftProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const requestedMode =
    mode ??
    PARTICLE_DRIFT_DEFINITION.defaultMode ??
    PARTICLE_DRIFT_DEFAULTS.mode;
  const automaticMode = useAutomaticMode(requestedMode === "auto");
  const resolvedMode =
    requestedMode === "auto"
      ? automaticMode
      : resolveMode(requestedMode, PARTICLE_DRIFT_DEFAULTS.mode);
  const background = resolveBackground(
    PARTICLE_DRIFT_DEFINITION.background,
    resolvedMode,
  );

  const safeSpeed = clamp(speed, 0, 3);
  const safeSize = clamp(size, 0.05, 200);
  const safeGap = clamp(gap, 0, 64);
  const safeLength = clamp(length, 0.35, 2.5);
  const safeDensity = clamp(density, 0.25, 2.5);
  const safeStrokeWidth = clamp(strokeWidth, 0.25, 8);
  const safeOpacity = clamp(opacity, 0.05, 1);
  const safeHue = clamp(hue, -180, 180);
  const safeSaturation = clamp(saturation, 0, 2);
  const safeBrightness = clamp(brightness, 0.35, 1.65);

  const source = useMemo(
    () =>
      buildFocusedDocument(PARTICLE_DRIFT_DEFINITION, {
        mode: resolvedMode,
        speed: PARTICLE_DRIFT_DEFAULTS.speed,
        size: safeSize,
        gap: safeGap,
        length: safeLength,
        density: safeDensity,
        strokeWidth: safeStrokeWidth,
        opacity: PARTICLE_DRIFT_DEFAULTS.opacity,
      }),
    [resolvedMode, safeDensity, safeGap, safeLength, safeSize, safeStrokeWidth],
  );

  const filter =
    safeHue === 0 && safeSaturation === 1 && safeBrightness === 1
      ? undefined
      : `hue-rotate(${safeHue}deg) saturate(${safeSaturation}) brightness(${safeBrightness})`;

  return (
    <iframe
      ref={iframeRef}
      className={className}
      title={PARTICLE_DRIFT_DEFINITION.title}
      srcDoc={source}
      sandbox="allow-scripts"
      loading="eager"
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        border: 0,
        background: "transparent",
        filter,
        pointerEvents: "auto",
        ...style,
      }}
    />
  );
}
