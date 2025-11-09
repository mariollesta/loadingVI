import { useCountdown } from '@hooks/useCountdown'
import { GTA6_RELEASE_DATE } from '@config/constants'


export const Countdown = () => {
  const { days, hours, minutes, seconds, total } = useCountdown(GTA6_RELEASE_DATE)

  if (total <= 0) {
    return (
      <div className="countdown-container">
        <h1>🎮 GTA VI IS OUT! 🎮</h1>
      </div>
    )
  }

  return (
    <div className="countdown-container">
      <h1>Time until GTA VI</h1>
      
      <div className="countdown-grid">
        <div className="countdown-item">
          <span className="countdown-number">{days}</span>
          <span className="countdown-label">Days</span>
        </div>
        
        <div className="countdown-item">
          <span className="countdown-number">{hours}</span>
          <span className="countdown-label">Hours</span>
        </div>
        
        <div className="countdown-item">
          <span className="countdown-number">{minutes}</span>
          <span className="countdown-label">Minutes</span>
        </div>
        
        <div className="countdown-item">
          <span className="countdown-number">{seconds}</span>
          <span className="countdown-label">Seconds</span>
        </div>
      </div>
    </div>
  )
}