import { useCountdown } from '@hooks/useCountdown'
import { GTAVI_RELEASE_DATE } from '@config/constants'

export const Countdown = () => {
  const { days, hours, minutes, seconds, total } = useCountdown(GTAVI_RELEASE_DATE)
  
  if (total <= 0) {
    return (
      <div className="text-center px-4">
        <h1 className="text-4xl md:text-6xl">🎮 GTA VI ¡YA ESTÁ AQUÍ! 🎮</h1>
      </div>
    )
  }

  return (
    <div className="text-center text-white px-4 w-full">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-8 md:mb-12">
        Lanzamiento GTA VI
      </h1>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
        <div className="flex flex-col items-center">
          <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gradient-gta">
            {days}
          </span>
          <span className="text-sm sm:text-base md:text-xl uppercase mt-1 md:mt-2 opacity-70">
            Días
          </span>
        </div>
        
        <div className="flex flex-col items-center">
          <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gradient-gta">
            {hours}
          </span>
          <span className="text-sm sm:text-base md:text-xl uppercase mt-1 md:mt-2 opacity-70">
            Horas
          </span>
        </div>
        
        <div className="flex flex-col items-center">
          <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gradient-gta">
            {minutes}
          </span>
          <span className="text-sm sm:text-base md:text-xl uppercase mt-1 md:mt-2 opacity-70">
            Minutos
          </span>
        </div>
        
        <div className="flex flex-col items-center">
          <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gradient-gta">
            {seconds}
          </span>
          <span className="text-sm sm:text-base md:text-xl uppercase mt-1 md:mt-2 opacity-70">
            Segundos
          </span>
        </div>
      </div>
    </div>
  )
}