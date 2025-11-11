import { useCountdown } from '@hooks/useCountdown'
import { GTAVI_RELEASE_DATE } from '@config/constants'

export const CountdownEmbed = () => {
    const { days, hours, minutes, seconds, total } = useCountdown(GTAVI_RELEASE_DATE)
    
    if (total <= 0) {
        return (
            <div className="text-center px-2">
                <h1 className="text-2xl md:text-3xl">🎮 GTA VI ¡YA ESTÁ AQUÍ! 🎮</h1>
            </div>
        )
    }

    return (
        <div className="text-center text-white w-full px-2">
        
            <h2 className="text-xl md:text-2xl mb-4">Lanzamiento GTA VI</h2>
            <div className="grid grid-cols-4 gap-1 max-w-xl mx-auto">
                <div className="flex flex-col items-center">
                    <span className="text-3xl md:text-5xl text-gradient-gta">
                        {days}
                    </span>
                    <span className="text-xs md:text-sm uppercase mt-1 opacity-70">
                        Días
                    </span>
                </div>
                
                <div className="flex flex-col items-center">
                    <span className="text-3xl md:text-5xl text-gradient-gta">
                        {hours}
                    </span>
                    <span className="text-xs md:text-sm uppercase mt-1 opacity-70">
                        Horas
                    </span>
                </div>
                
                <div className="flex flex-col items-center">
                    <span className="text-3xl md:text-5xl font-bold text-gradient-gta">
                        {minutes}
                    </span>
                    <span className="text-xs md:text-sm uppercase mt-1 opacity-70">
                        Min
                    </span>
                </div>
                
                <div className="flex flex-col items-center">
                    <span className="text-3xl md:text-5xl font-bold text-gradient-gta">
                        {seconds}
                    </span>
                    <span className="text-xs md:text-sm uppercase mt-1 opacity-70">
                        Seg
                    </span>
                </div>
            </div>
        </div>
    )
}