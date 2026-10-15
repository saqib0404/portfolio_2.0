"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "JavaScript", icon: "devicon-javascript-plain colored" },
  { name: "TypeScript", icon: "devicon-typescript-plain colored" },
  { name: "Golang", icon: "devicon-go-plain colored" },
  { name: "React", icon: "devicon-react-original colored" },
  { name: "Next.js", icon: "devicon-nextjs-plain" },
  { name: "Tailwind CSS", icon: "devicon-tailwindcss-original colored" },
  { name: "Git", icon: "devicon-git-plain colored" },
  { name: "GitHub", icon: "devicon-github-plain" },
  { name: "Prisma", icon: "devicon-prisma-original" },
  { name: "Node.js", icon: "devicon-nodejs-plain colored" },
  { name: "Express.js", icon: "devicon-express-original" },
  { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
  { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
  { name: "Mongoose", icon: "devicon-mongoose-original colored" },
  { name: "Docker", icon: "devicon-docker-plain colored" },
  { name: "Firebase", icon: "devicon-firebase-plain colored" },
  { name: "Postman", icon: "devicon-postman-plain colored" },
  { name: "Vercel", icon: "devicon-vercel-original" },
];

const whiteIcons = new Set([
  "Next.js",
  "Prisma",
  "Express.js",
  "GitHub",
  "Vercel",
]);

type Vec3 = { x: number; y: number; z: number };

type ProjectedSkill = {
  index: number;
  name: string;
  icon: string;
  x: number;
  y: number;
  z: number;
  scale: number;
  opacity: number;
};

function fibonacciSphere(count: number): Vec3[] {
  if (count <= 1) return [{ x: 0, y: 0, z: 1 }];
  const golden = Math.PI * (3 - Math.sqrt(5));
  return Array.from({ length: count }, (_, i) => {
    const y = 1 - (i / (count - 1)) * 2;
    const radius = Math.sqrt(Math.max(0, 1 - y * y));
    const theta = golden * i;
    return {
      x: Math.cos(theta) * radius,
      y,
      z: Math.sin(theta) * radius,
    };
  });
}

function rotatePoint(point: Vec3, rotX: number, rotY: number): Vec3 {
  const cosY = Math.cos(rotY);
  const sinY = Math.sin(rotY);
  const x1 = point.x * cosY + point.z * sinY;
  const z1 = -point.x * sinY + point.z * cosY;

  const cosX = Math.cos(rotX);
  const sinX = Math.sin(rotX);
  const y2 = point.y * cosX - z1 * sinX;
  const z2 = point.y * sinX + z1 * cosX;

  return { x: x1, y: y2, z: z2 };
}

function buildWireframePaths(rotX: number, rotY: number): string[] {
  const paths: string[] = [];
  const radius = 45;
  const steps = 48;
  const latitudes = [-0.9, -0.45, 0, 0.45, 0.9];
  const longitudes = [0, Math.PI / 4, Math.PI / 2, (3 * Math.PI) / 4];

  for (const lat of latitudes) {
    const coords: string[] = [];
    for (let i = 0; i <= steps; i++) {
      const lon = (i / steps) * Math.PI * 2;
      const point = rotatePoint(
        {
          x: Math.cos(lat) * Math.cos(lon),
          y: Math.sin(lat),
          z: Math.cos(lat) * Math.sin(lon),
        },
        rotX,
        rotY,
      );
      coords.push(`${(50 + point.x * radius).toFixed(2)} ${(50 + point.y * radius).toFixed(2)}`);
    }
    paths.push(`M ${coords.join(" L ")}`);
  }

  for (const lon of longitudes) {
    const coords: string[] = [];
    for (let i = 0; i <= steps; i++) {
      const lat = -Math.PI / 2 + (i / steps) * Math.PI;
      const point = rotatePoint(
        {
          x: Math.cos(lat) * Math.cos(lon),
          y: Math.sin(lat),
          z: Math.cos(lat) * Math.sin(lon),
        },
        rotX,
        rotY,
      );
      coords.push(`${(50 + point.x * radius).toFixed(2)} ${(50 + point.y * radius).toFixed(2)}`);
    }
    paths.push(`M ${coords.join(" L ")}`);
  }

  return paths;
}

export default function Skills() {
  const basePoints = useMemo(() => fibonacciSphere(skills.length), []);
  const rotationRef = useRef({ x: 0.35, y: 0.2 });
  const velocityRef = useRef({ x: 0, y: 0.004 });
  const draggingRef = useRef(false);
  const lastPointerRef = useRef({ x: 0, y: 0 });
  const hoveredRef = useRef<number | null>(null);
  const frameRef = useRef<number | null>(null);
  const globeRef = useRef<HTMLDivElement>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [projectedSkills, setProjectedSkills] = useState<ProjectedSkill[]>([]);
  const [wireframePaths, setWireframePaths] = useState<string[]>([]);

  const updateHover = useCallback((index: number | null) => {
    hoveredRef.current = index;
    setHoveredIndex(index);
  }, []);

  const projectFrame = useCallback(() => {
    const { x: rotX, y: rotY } = rotationRef.current;
    const nextSkills = skills.map((skill, index) => {
      const rotated = rotatePoint(basePoints[index], rotX, rotY);
      const depth = (rotated.z + 1) / 2;

      return {
        index,
        name: skill.name,
        icon: skill.icon,
        x: 50 + rotated.x * 42,
        y: 50 + rotated.y * 42,
        z: rotated.z,
        scale: 0.55 + depth * 0.7,
        opacity: 0.28 + depth * 0.72,
      };
    });

    setProjectedSkills(nextSkills);
    setWireframePaths(buildWireframePaths(rotX, rotY));
  }, [basePoints]);

  useEffect(() => {
    projectFrame();

    const tick = () => {
      if (!draggingRef.current && hoveredRef.current === null) {
        rotationRef.current.y += velocityRef.current.y;
        rotationRef.current.x += velocityRef.current.x;
        velocityRef.current.y += (0.004 - velocityRef.current.y) * 0.04;
        velocityRef.current.x *= 0.96;
      } else if (!draggingRef.current) {
        velocityRef.current.x *= 0.9;
        velocityRef.current.y *= 0.9;
      }

      projectFrame();
      frameRef.current = requestAnimationFrame(tick);
    };

    frameRef.current = requestAnimationFrame(tick);
    return () => {
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, [projectFrame]);

  useEffect(() => {
    const node = globeRef.current;
    if (!node) return;

    const onWheel = (event: WheelEvent) => {
      event.preventDefault();
      rotationRef.current.y += event.deltaY * 0.0015;
      rotationRef.current.x -= event.deltaX * 0.0015;
      velocityRef.current.y = event.deltaY * 0.0002;
    };

    node.addEventListener("wheel", onWheel, { passive: false });
    return () => node.removeEventListener("wheel", onWheel);
  }, []);

  const onPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    draggingRef.current = true;
    setIsDragging(true);
    lastPointerRef.current = { x: event.clientX, y: event.clientY };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;

    const dx = event.clientX - lastPointerRef.current.x;
    const dy = event.clientY - lastPointerRef.current.y;
    lastPointerRef.current = { x: event.clientX, y: event.clientY };

    rotationRef.current.y += dx * 0.005;
    rotationRef.current.x -= dy * 0.005;
    rotationRef.current.x = Math.max(
      -Math.PI / 2.4,
      Math.min(Math.PI / 2.4, rotationRef.current.x),
    );

    velocityRef.current.y = dx * 0.0012;
    velocityRef.current.x = -dy * 0.0012;
  };

  const onPointerEnd = (event: ReactPointerEvent<HTMLDivElement>) => {
    draggingRef.current = false;
    setIsDragging(false);
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  return (
    <section className="bg-background-light dark:bg-background-dark py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-display font-bold tracking-tight text-background-dark dark:text-background-light"
          >
            My <span className="text-primary">Skills</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-6 origin-left"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-muted-gray max-w-2xl mx-auto text-lg md:text-xl font-display font-medium"
          >
            I specialize in the modern web ecosystem, focusing on performance,
            scalability, and clean code.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div
            ref={globeRef}
            role="group"
            aria-label="Interactive skill globe. Drag to rotate, or hover and focus a skill to see its name."
            className={`relative aspect-square select-none touch-none ${
              isDragging ? "cursor-grabbing" : "cursor-grab"
            }`}
            style={{ width: "min(82vw, 460px)" }}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerEnd}
            onPointerCancel={onPointerEnd}
          >
            {/* Sphere body */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-[5%] rounded-full border border-primary/10"
              style={{
                background:
                  "radial-gradient(circle at 33% 26%, rgba(161,194,189,0.12), rgba(112,145,140,0.05) 58%, transparent 75%)",
                boxShadow: "inset 0 0 45px rgba(161,194,189,0.06)",
              }}
            />

            {/* The wireframe follows the same 3D rotation as the icons. */}
            <svg
              aria-hidden="true"
              viewBox="0 0 100 100"
              className="pointer-events-none absolute inset-0 h-full w-full overflow-visible text-primary"
              fill="none"
            >
              {wireframePaths.map((path, index) => (
                <path
                  key={index}
                  d={path}
                  stroke="currentColor"
                  strokeWidth="0.15"
                  strokeOpacity="0.2"
                  strokeDasharray="0.5 1.5"
                />
              ))}
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="currentColor"
                strokeWidth="0.18"
                strokeOpacity="0.14"
              />
            </svg>

            {projectedSkills.map((skill) => {
              const isFront = skill.z > 0.035;
              const isHovered = hoveredIndex === skill.index && isFront;

              return (
                <button
                  key={skill.name}
                  data-skill-index={skill.index}
                  type="button"
                  aria-label={skill.name}
                  tabIndex={isFront ? 0 : -1}
                  onMouseEnter={() => {
                    if (!draggingRef.current && isFront)
                      updateHover(skill.index);
                  }}
                  onMouseLeave={() => {
                    if (hoveredRef.current === skill.index) updateHover(null);
                  }}
                  onFocus={() => {
                    if (isFront) updateHover(skill.index);
                  }}
                  onBlur={() => updateHover(null)}
                  className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center border-0 bg-transparent p-1 outline-none"
                  style={{
                    left: `${skill.x}%`,
                    top: `${skill.y}%`,
                    zIndex: isHovered ? 100 : Math.round((skill.z + 1) * 40),
                    opacity: isHovered ? 1 : skill.opacity,
                    transform: `translate(-50%, -50%) scale(${skill.scale})`,
                    pointerEvents: isFront ? "auto" : "none",
                  }}
                >
                  <span
                    className={`relative flex h-10 w-10 items-center justify-center rounded-xl transition-transform duration-200 sm:h-12 sm:w-12 ${
                      isHovered ? "scale-[1.35]" : "scale-100"
                    }`}
                    style={
                      isHovered
                        ? {
                            filter:
                              "drop-shadow(0 0 12px rgba(161,194,189,0.55))",
                          }
                        : undefined
                    }
                  >
                    <i
                      aria-hidden="true"
                      className={`${skill.icon} text-[30px] leading-none sm:text-[36px] ${
                        whiteIcons.has(skill.name)
                          ? "text-slate-900 dark:text-white"
                          : ""
                      }`}
                    />
                  </span>

                  {/* Show the compact pill only when hovered/focused. */}
                  <span
                    aria-hidden="true"
                    className={`pointer-events-none absolute left-1/2 top-full mt-1 -translate-x-1/2 whitespace-nowrap rounded-full border border-primary/30 bg-primary/20 px-3 py-1 font-display text-[10px] font-bold uppercase tracking-[0.1em] text-background-dark shadow-[0_0_18px_rgba(161,194,189,0.18)] backdrop-blur-md transition-all duration-200 dark:text-white ${
                      isHovered
                        ? "translate-y-0 scale-100 opacity-100"
                        : "translate-y-1 scale-90 opacity-0"
                    }`}
                  >
                    {skill.name}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        <p className="mt-5 text-center font-display text-xs text-muted-gray/75">
          Drag to explore · Scroll to rotate · Hover to discover
        </p>
      </div>
    </section>
  );
}
