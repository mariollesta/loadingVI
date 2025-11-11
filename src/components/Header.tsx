import { Link } from "react-router-dom"

import Streamers from "@icons/Streamers"
import Info from "@icons/Info"
import Twitter from "@icons/Twitter"
import GitHub from "@icons/GitHub"

export const Header = () => {
    return (
        <header className="w-full px-6 sm:px-8 md:px-12 py-6">
            <div className="flex justify-between items-center max-w-6xl mx-auto">
                <Link to="/">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient-gta" >
                        loadingVI
                    </h2>
                </Link>

                <nav className="flex items-center gap-4 sm:gap-6">
                    <Link
                        to="/embed-config"
                        className="flex items-center text-sm sm:text-base text-white hover:text-[var(--color-gold)] transition-colors"
                        title="Streamers" 
                    >
                        <Streamers className="h-5 w-5 sm:hidden" />
                        <span className="hidden sm:inline">Streamers</span>
                    </Link>

                    <Link
                        to="/about"
                        className="flex items-center text-sm sm:text-base text-white hover:text-[var(--color-gold)] transition-colors"
                        title="Acerca de"
                    >
                        <Info className="h-5 w-5 sm:hidden" />
                        <span className="hidden sm:inline">Acerca de</span>
                    </Link>
                
                    <a
                        href="https://x.com/loadingVI"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-white hover:text-[var(--color-gold)] transition-colors"
                        title="X/Twitter"
                    >
                        <Twitter className="h-5 w-5 sm:hidden" />
                        <span className="hidden sm:inline">X/Twitter</span>
                    </a>
                
                    <a
                        href="https://github.com/mariollesta/loadingVI"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-white hover:text-[var(--color-gold)] transition-colors"
                        title="GitHub"
                    >
                        <GitHub className="h-5 w-5 sm:hidden" />
                        <span className="hidden sm:inline">GitHub</span>
                    </a>
                </nav>
            </div>
        </header>
    )
}