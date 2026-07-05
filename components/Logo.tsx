import Link from 'next/link'

const Logo = () => {
    return (
        <Link
            href="#home"
            className="text-lg font-bold tracking-tight text-foreground flex items-center gap-1.5 select-none shrink-0"
        >
            <span className="flex items-center justify-center w-8 h-8 rounded-md bg-[#00df9a]/10 text-[#00df9a] font-mono text-sm border border-[#00df9a]/20">
                {"</>"}
            </span>
            Ahmed<span className="text-[#00df9a]">Shaaban</span>
        </Link>
    )
}

export default Logo