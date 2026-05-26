"use client";
import { useEffect, useRef } from "react";

export function InteractiveCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const parentRef = useRef<HTMLDivElement>(null);
    const mouseRef = useRef({ x: -1000, y: -1000, targetX: -1000, targetY: -1000 });

    useEffect(() => {
        const canvas = canvasRef.current;
        const parent = canvas?.parentElement;
        if (!canvas || !parent) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        const dotsArray: { x: number; y: number; speed: number }[] = [];

        const resize = () => {
            canvas.width = parent.clientWidth;
            canvas.height = parent.clientHeight;
            initDots();
        };

        const initDots = () => {
            dotsArray.length = 0;
            const spacing = 22;
            for (let x = spacing / 2; x < canvas.width; x += spacing) {
                for (let y = spacing / 2; y < canvas.height; y += spacing) {
                    if (Math.random() > 0.4) {
                        dotsArray.push({
                            x,
                            y: Math.random() * canvas.height,
                            speed: 0.15 + Math.random() * 0.35,
                        });
                    }
                }
            }
        };

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouseRef.current.targetX = e.clientX - rect.left;
            mouseRef.current.targetY = e.clientY - rect.top;
        };

        const handleMouseLeave = () => {
            mouseRef.current.targetX = -1000;
            mouseRef.current.targetY = -1000;
        };

        parent.addEventListener("mousemove", handleMouseMove);
        parent.addEventListener("mouseleave", handleMouseLeave);
        window.addEventListener("resize", resize);
        resize();

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const mouse = mouseRef.current;
            mouse.x += (mouse.targetX - mouse.x) * 0.15;
            mouse.y += (mouse.targetY - mouse.y) * 0.15;

            const isDark = document.documentElement.classList.contains("dark");
            const baseColor = isDark ? "rgba(30, 58, 53, 0.35)" : "rgba(161, 161, 170, 0.3)";

            dotsArray.forEach((dot) => {
                dot.y += dot.speed;
                if (dot.y > canvas.height) dot.y = 0;

                const dx = dot.x - mouse.x;
                const dy = dot.y - mouse.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const range = 130;

                if (distance < range) {
                    const alpha = (range - distance) / range;
                    ctx.beginPath();
                    ctx.moveTo(mouse.x, mouse.y);
                    ctx.lineTo(dot.x, dot.y);
                    ctx.strokeStyle = `rgba(0, 223, 154, ${alpha * 0.3})`;
                    ctx.lineWidth = 0.9;
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.arc(dot.x, dot.y, 1.2 + alpha * 1.8, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(0, 223, 154, ${0.4 + alpha * 0.6})`;
                    ctx.fill();
                } else {
                    ctx.beginPath();
                    ctx.arc(dot.x, dot.y, 1.2, 0, Math.PI * 2);
                    ctx.fillStyle = baseColor;
                    ctx.fill();
                }
            });
            animationFrameId = requestAnimationFrame(draw);
        };

        draw();
        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener("resize", resize);
            parent.removeEventListener("mousemove", handleMouseMove);
            parent.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />;
}