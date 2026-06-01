"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import HeroImage from "@/public/hero.jpg";
import Image from "next/image";

export function Hero() {
    const sectionRef = useRef<HTMLElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef({ x: -1000, y: -1000, targetX: -1000, targetY: -1000 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        const mouse = mouseRef.current;

        const resizeCanvas = () => {
            const rect = canvas.getBoundingClientRect();
            canvas.width = rect.width;
            canvas.height = rect.height;
        };

        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouse.targetX = e.clientX - rect.left;
            mouse.targetY = e.clientY - rect.top;
        };

        const handleMouseLeave = () => {
            mouse.targetX = -1000;
            mouse.targetY = -1000;
        };

        const section = sectionRef.current;
        if (section) {
            section.addEventListener("mousemove", handleMouseMove);
            section.addEventListener("mouseleave", handleMouseLeave);
        }

        const dotsArray: { x: number; y: number; speed: number }[] = [];
        const initDots = () => {
            const spacing = 22;
            for (let x = spacing / 2; x < window.innerWidth; x += spacing) {
                for (let y = spacing / 2; y < window.innerHeight; y += spacing) {
                    if (Math.random() > 0.4) { 
                        dotsArray.push({
                            x: x,
                            y: Math.random() * window.innerHeight,
                            speed: 0.15 + Math.random() * 0.35 
                        });
                    }
                }
            }
        };
        initDots();
        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            mouse.x += (mouse.targetX - mouse.x) * 0.15;
            mouse.y += (mouse.targetY - mouse.y) * 0.15;

            const isDark = document.documentElement.classList.contains("dark");
            const baseColor = isDark ? "rgba(30, 58, 53, 0.35)" : "rgba(161, 161, 170, 0.3)";

            dotsArray.forEach(dot => {
                dot.y += dot.speed;

                if (dot.y > canvas.height) dot.y = 0;

                const dx = dot.x - mouse.x;
                const dy = dot.y - mouse.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                const connectionRange = 130; 
                let dotSize = 1.2;
                let dotColor = baseColor;

                if (distance < connectionRange) {
                    const alpha = (connectionRange - distance) / connectionRange;

                    dotSize = 1.2 + alpha * 1.8;
                    dotColor = `rgba(0, 223, 154, ${0.4 + alpha * 0.6})`;

                    ctx.beginPath();
                    ctx.moveTo(mouse.x, mouse.y);
                    ctx.lineTo(dot.x, dot.y);
                    ctx.strokeStyle = `rgba(0, 223, 154, ${alpha * 0.3})`;
                    ctx.lineWidth = 0.9;
                    ctx.stroke();
                }

                ctx.beginPath();
                ctx.arc(dot.x, dot.y, dotSize, 0, Math.PI * 2);
                ctx.fillStyle = dotColor;
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(draw);
        };
        draw();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            if (section) {
                section.removeEventListener("mousemove", handleMouseMove);
                section.removeEventListener("mouseleave", handleMouseLeave);
            }
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            id="home"
            className="relative min-h-[calc(100vh-68px)] flex items-center overflow-hidden bg-background"
        >
            <canvas
                ref={canvasRef}
                className="pointer-events-none absolute inset-0 z-10 w-full h-full"
            />

            <div className="pointer-events-none absolute -top-32 right-0 w-[600px] h-[600px] bg-[#00df9a]/5 dark:bg-[#00df9a]/6 rounded-full blur-[120px]" />

            <div className="max-w-7xl mx-auto px-6 w-full py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-20">

                <div className="flex flex-col items-start space-y-6">

                    {/* Badge */}
                    <span className="inline-flex items-center rounded-full px-4 py-1.5 text-xs font-medium tracking-wide  bg-[#00df9a]/8 text-[#00df9a] border border-[#00df9a]/20  dark:bg-[#00df9a]/5 dark:border-[#00df9a]/15">
                        Fullstack Developer • Next.js Specialist
                    </span>

                    <h1 className="text-[42px] sm:text-5xl md:text-6xl lg:text-[64px] font-bold leading-[1.1] tracking-tight text-foreground">
                        Building modern web experiences with{" "}
                        <span className="text-[#00df9a]">clean code</span>
                    </h1>

                    <p className="text-muted-foreground text-sm sm:text-base max-w-[480px] leading-relaxed">
                        I design and build scalable fullstack applications using modern
                        technologies like Next.js, TypeScript, and Supabase. Focused on
                        performance, clean UI, and real-world products.
                    </p>

                    {/* Buttons */}
                    <div className="flex items-center gap-4 pt-1">
                        <Button className="bg-[#00df9a] hover:bg-[#00df9a]/85 text-black font-semibold h-12 px-7 rounded-full text-sm gap-2 transition-all active:scale-95 shadow-[0_4px_24px_rgba(0,223,154,0.2)]">
                            Get in touch
                            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                        </Button>

                        <Button variant="ghost" className="h-12 px-6 rounded-full text-sm font-medium text-foreground hover:bg-muted hover:text-foreground transition-all">
                            View projects
                        </Button>
                    </div>

                </div>

                <div className="relative flex justify-center lg:justify-end items-center">
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-[380px] h-[380px] sm:w-[480px] sm:h-[480px] bg-[#00df9a]/10 dark:bg-[#00df9a]/8 rounded-full blur-[90px]" />
                    </div>

                    {/* Profile ring */}
                    <div className="relative w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden  border-[10px] border-zinc-200 dark:border-zinc-900  ring-1 ring-black/5 dark:ring-white/5  shadow-2xl shadow-black/20 dark:shadow-black/80  bg-zinc-100 dark:bg-zinc-950">
                        <Image
                            src={HeroImage}
                            alt="Portfolio"
                            className="w-full h-full object-cover object-top scale-105"
                        />
                    </div>

                    {/* Decorative corner dots */}
                    <div className="absolute top-4 right-4 grid grid-cols-3 gap-1.5 opacity-30 dark:opacity-20">
                        {Array.from({ length: 9 }).map((_, i) => (
                            <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#00df9a]" />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}