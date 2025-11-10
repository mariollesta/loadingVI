export const Footer = () => {
    return (
        <footer className="w-full px-6 sm:px-8 md:px-12 py-6">
            <div className="flex justify-center">
                <p className="text-sm text-white opacity-70">
                    © 2025{' '}
                <a 
                    href="https://github.com/mariollesta" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-[var(--color-pink)] hover:opacity-100 transition-all"
                >
                    mariollesta
                </a>
                    . Todos los derechos reservados.
                </p>
            </div>
        </footer>
    )
}