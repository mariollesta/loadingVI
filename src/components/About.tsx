export const About = () => {
    return (
        <div className="flex-1 flex items-center justify-center px-4 py-12">
            <div className="max-w-3xl w-full">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 text-center">
                    Acerca de loadingVI
                </h1>

                <div className="space-y-6 text-white text-base md:text-lg leading-relaxed">

                    <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-gold)] mt-8 mb-4">
                        Nuestra historia
                    </h2>
                    <p className="font-sans font-extrabold">
                        <strong className="text-[var(--color-gold)]">loadingVI</strong> es un contador regresivo 
                        dedicado al lanzamiento de
                        {' '} 
                        <a 
                            href="https://www.rockstargames.com/VI" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-[var(--color-gold)] hover:underline"
                        >
                            Grand Theft Auto VI
                        </a>
                        , uno de los videojuegos más esperados 
                        de la historia.
                    </p>

                    <p className="font-sans font-extrabold">
                        Este proyecto nace de la emoción y la anticipación que comparte toda la comunidad 
                        de gamers alrededor del mundo por el próximo título de
                        {' '} 
                        <a 
                            href="https://www.rockstargames.com/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-[var(--color-gold)] hover:underline"
                        >
                            Rockstar Games
                        </a>.
                    </p>

                    <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-gold)] mt-8 mb-4">
                        La larga espera
                    </h2>

                    <p className="font-sans font-extrabold">
                        Desde el lanzamiento de GTA V en 2013, los fans hemos esperado pacientemente 
                        por la siguiente entrega de la saga. Este contador nos ayuda a visualizar 
                        cuánto tiempo falta para que finalmente podamos disfrutar de GTA VI.
                    </p>

                    <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-gold)] mt-8 mb-4">
                        open source
                    </h2>

                    <p className="font-sans font-extrabold" >
                        Este proyecto es de código abierto y está disponible en GitHub.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-12">
                    <a
                        href="https://github.com/mariollesta/loadingVI"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto text-center px-6 py-3 bg-[var(--color-purple)] text-white rounded-lg hover:opacity-90 transition-all font-semibold border-2 border-transparent"
                    >
                        Ver en GitHub
                    </a>
                    
                    <a
                        href="/"
                        className="w-full sm:w-auto text-center px-6 py-3 border-2 border-[var(--color-purple)] text-[var(--color-purple)] rounded-lg hover:bg-[var(--color-purple)] hover:text-white transition-all font-semibold"
                    >
                        Volver al contador
                    </a>
                </div>
            </div>
        </div>
        
    )
}