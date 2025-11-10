import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <header className="w-full px-6 sm:px-8 md:px-12 py-6">
            <div className="flex justify-between max-w-6xl mx-auto">
                <Link to="/">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient-gta" >
                        loadingVI
                    </h2>
                </Link>

                <nav className="flex items-center gap-4 sm:gap-6">
                    <Link
                        to="/embed"
                        className="flex items-center gap-2 text-sm sm:text-base text-white hover:text-[var(--color-gold)] transition-colors"
                    >
                        <span className="hidden sm:inline">Streamers</span>
                    </Link>

                    <Link
                        to="/about"
                        className="flex items-center gap-2 text-sm sm:text-base text-white hover:text-[var(--color-gold)] transition-colors"
                    >
                        <span className="hidden sm:inline">Acerca de</span>
                    </Link>
                
                    <a
                        href="https://x.com/tu_usuario"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-[var(--color-gold)] transition-colors"
                    >
                        <span className="hidden sm:inline">X/Twitter</span>
                    </a>
                
                    <a
                        href="https://github.com/mariollesta/loadingVI"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-[var(--color-gold)] transition-colors"
                    >
                        <span className="hidden sm:inline">GitHub</span>
                    </a>
                </nav>
            </div>
        </header>
    )
}