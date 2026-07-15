"use client";

import { useEffect, useRef } from "react";

const TILT_ANGLE = Math.PI / 5.5;
const TARGET_FOCUS_ANGLE = 3.6;
const NODE_COUNT = 5;

interface OrbitDef {
  rx: number;
  ry: number;
  baseNodeAngle: number;
}

// One ring per package (First Look / The Setup / Scholar Ready / The Household /
// In Residence) — all five carry a sweeping node now, evenly spaced around the turn.
const ORBITS: OrbitDef[] = Array.from({ length: NODE_COUNT }, (_, i) => ({
  rx: 480 + i * 300,
  ry: 210 + i * 130,
  baseNodeAngle: TARGET_FOCUS_ANGLE + (i / NODE_COUNT) * Math.PI * 2,
}));

/**
 * The quiet-orbit backdrop for the hero + packages section. `position: sticky`
 * (not fixed) scoped to whatever wraps it + the packages scroll section, so it
 * pins for exactly that span and then scrolls away — it must never bleed into
 * the sections below. Faint elliptical rings, mouse parallax, and (once
 * scrolled into #packages-orbit) five package nodes that sweep to focus and
 * light up coral in sequence, one per package.
 */
export function OrbitCanvas({ scrollSectionId = "packages-orbit" }: { scrollSectionId?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;

    let width = 0;
    let height = 0;
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let time = 0;
    let scrollProgress = 0;
    let targetScrollAngle = 0;
    let currentScrollAngle = 0;
    let activeIndex = 0;
    let rafId = 0;
    let destroyed = false;
    const activeWeights = ORBITS.map(() => 0);

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = window.devicePixelRatio || 1;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      ctx!.setTransform(1, 0, 0, 1, 0, 0);
      ctx!.scale(dpr, dpr);
    }

    function focalPoint() {
      return {
        cx: (width > 768 ? width * 0.85 : width * 0.7) + mouseX,
        cy: (height > 768 ? height * 0.85 : height * 0.8) + mouseY,
      };
    }

    function onMouseMove(e: MouseEvent) {
      targetX = (e.clientX - width / 2) * 0.04;
      targetY = (e.clientY - height / 2) * 0.04;
    }

    function updateScroll() {
      const section = document.getElementById(scrollSectionId);
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        const maxScroll = rect.height - windowHeight;
        let raw = maxScroll > 0 ? Math.max(0, Math.min(1, Math.abs(rect.top) / maxScroll)) : 0;
        if (rect.top > 0) raw = 0;
        scrollProgress = raw;
      }
      activeIndex = Math.min(NODE_COUNT - 1, Math.floor(scrollProgress * NODE_COUNT));
      targetScrollAngle = scrollProgress * Math.PI * 2;
    }

    function drawStatic() {
      // Reduced motion: static blueprint — rings + placed nodes, no rotation/parallax/glow.
      ctx!.clearRect(0, 0, width, height);
      const cx = width > 768 ? width * 0.85 : width * 0.7;
      const cy = height > 768 ? height * 0.85 : height * 0.8;
      ORBITS.forEach((orbit) => {
        ctx!.beginPath();
        ctx!.ellipse(cx, cy, orbit.rx, orbit.ry, TILT_ANGLE, 0, Math.PI * 2);
        ctx!.strokeStyle = "rgba(240, 242, 245, 0.05)";
        ctx!.lineWidth = 1.5;
        ctx!.stroke();
        const dx = orbit.rx * Math.cos(orbit.baseNodeAngle);
        const dy = orbit.ry * Math.sin(orbit.baseNodeAngle);
        const nx = cx + dx * Math.cos(TILT_ANGLE) - dy * Math.sin(TILT_ANGLE);
        const ny = cy + dx * Math.sin(TILT_ANGLE) + dy * Math.cos(TILT_ANGLE);
        ctx!.beginPath();
        ctx!.arc(nx, ny, 4, 0, Math.PI * 2);
        ctx!.fillStyle = "rgba(240, 242, 245, 0.5)";
        ctx!.fill();
      });
    }

    function render() {
      if (destroyed) return;
      ctx!.clearRect(0, 0, width, height);
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;
      currentScrollAngle += (targetScrollAngle - currentScrollAngle) * 0.06;

      const { cx, cy } = focalPoint();

      ORBITS.forEach((orbit, i) => {
        ctx!.beginPath();
        ctx!.ellipse(cx, cy, orbit.rx, orbit.ry, TILT_ANGLE, 0, Math.PI * 2);
        ctx!.strokeStyle = "rgba(240, 242, 245, 0.035)";
        ctx!.lineWidth = 1.5;
        ctx!.stroke();

        const isTarget = i === activeIndex && scrollProgress > 0.01;
        activeWeights[i] += ((isTarget ? 1 : 0) - activeWeights[i]) * 0.1;
        const w = activeWeights[i];
        const currentAngle = orbit.baseNodeAngle - currentScrollAngle + time * 0.0002;

        if (w > 0.01) {
          ctx!.beginPath();
          const spread = 0.5 + w * 0.3;
          ctx!.ellipse(cx, cy, orbit.rx, orbit.ry, TILT_ANGLE, currentAngle - spread, currentAngle + spread);
          ctx!.strokeStyle = `rgba(255, 61, 0, ${w * 0.5})`;
          ctx!.lineWidth = 1 + w * 2;
          ctx!.shadowColor = "#FF3D00";
          ctx!.shadowBlur = w * 15;
          ctx!.stroke();
          ctx!.shadowBlur = 0;
        }

        const dx = orbit.rx * Math.cos(currentAngle);
        const dy = orbit.ry * Math.sin(currentAngle);
        const nx = cx + dx * Math.cos(TILT_ANGLE) - dy * Math.sin(TILT_ANGLE);
        const ny = cy + dx * Math.sin(TILT_ANGLE) + dy * Math.cos(TILT_ANGLE);

        ctx!.beginPath();
        const radius = 3 + w * 5;
        ctx!.arc(nx, ny, radius, 0, Math.PI * 2);
        const r = 100 + w * 155;
        const g = 110 - w * 49;
        const b = 120 - w * 120;
        const a = 0.4 + w * 0.6;
        ctx!.fillStyle = `rgba(${r}, ${g}, ${b}, ${a})`;
        if (w > 0.1) {
          ctx!.shadowColor = "#FF3D00";
          ctx!.shadowBlur = w * 25;
        }
        ctx!.fill();
        ctx!.shadowBlur = 0;

        if (w > 0.5) {
          ctx!.beginPath();
          ctx!.arc(nx, ny, radius * 0.3, 0, Math.PI * 2);
          ctx!.fillStyle = "#FFFFFF";
          ctx!.fill();
        }
      });

      time++;
      rafId = requestAnimationFrame(render);
    }

    resize();
    updateScroll();

    if (reduceMotion) {
      drawStatic();
    } else {
      rafId = requestAnimationFrame(render);
    }

    let resizeTimer: ReturnType<typeof setTimeout> | undefined;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        resize();
        if (reduceMotion) drawStatic();
      }, 120);
    };

    window.addEventListener("resize", onResize);
    if (!reduceMotion) {
      window.addEventListener("scroll", updateScroll, { passive: true });
      if (!isTouch) document.addEventListener("mousemove", onMouseMove);
    }

    return () => {
      destroyed = true;
      cancelAnimationFrame(rafId);
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", updateScroll);
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, [scrollSectionId]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "sticky",
        top: 0,
        display: "block",
        width: "100vw",
        height: "100vh",
        marginBottom: "-100vh",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}
