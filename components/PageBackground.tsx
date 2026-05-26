export function PageBackground() {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">

            {/* Dot Grid */}
            <div className="
          absolute inset-0
          [background-image:radial-gradient(circle,_theme(colors.zinc.300/45%)_1px,_transparent_1px)]
          dark:[background-image:radial-gradient(circle,_#1e3a35_1px,_transparent_1px)]
          [background-size:22px_22px]
        " />

            {/* Orb 1 — Top right */}
            <div
                className="absolute -top-32 right-[5%] w-[600px] h-[600px] rounded-full
            bg-[#00df9a]/15 dark:bg-[#00df9a]/10 blur-[140px] will-change-transform"
                style={{ animation: "orb-float-1 18s ease-in-out infinite" }}
            />

            {/* Orb 2 — Bottom left */}
            <div
                className="absolute bottom-[10%] -left-20 w-[500px] h-[500px] rounded-full
            bg-[#00df9a]/12 dark:bg-[#00df9a]/8 blur-[130px] will-change-transform"
                style={{ animation: "orb-float-2 22s ease-in-out infinite" }}
            />

            {/* Orb 3 — Center */}
            <div
                className="absolute top-[40%] left-[40%] w-[400px] h-[400px] rounded-full
            bg-[#00df9a]/8 dark:bg-[#00df9a]/5 blur-[120px] will-change-transform"
                style={{ animation: "orb-float-3 16s ease-in-out infinite" }}
            />

            {/* Orb 4 — Bottom right */}
            <div
                className="absolute bottom-0 right-[10%] w-[350px] h-[350px] rounded-full
            bg-emerald-400/10 dark:bg-emerald-400/6 blur-[110px] will-change-transform"
                style={{ animation: "orb-float-4 28s ease-in-out infinite" }}
            />

            {/* Orb 5 — Top left subtle */}
            <div
                className="absolute -top-10 left-[20%] w-[300px] h-[300px] rounded-full
            bg-[#00df9a]/8 dark:bg-[#00df9a]/4 blur-[100px] will-change-transform"
                style={{ animation: "orb-float-2 24s ease-in-out infinite 4s" }}
            />

            {/* Vignette */}
            <div className="absolute inset-0
          [background:radial-gradient(ellipse_90%_80%_at_50%_40%,transparent_50%,theme(colors.background/60%)_100%)]
        " />

        </div>
    );
  }