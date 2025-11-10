import { GTAV_RELEASE_DATE, GTAVI_RELEASE_DATE } from '@config/constants'

export const ProgressBar = () => {
    const calculateProgress = (): number => {
        const now = new Date().getTime()
        const start = GTAV_RELEASE_DATE.getTime()
        const end = GTAVI_RELEASE_DATE.getTime()
        
        const totalDuration = end - start
        const elapsed = now - start
        
        const progress = (elapsed / totalDuration) * 100
        
        // Asegurar que esté entre 0 y 100
        return Math.min(Math.max(progress, 0), 100)
    }

    const formatDate = (date: Date): string => {
        return date.toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        })
    }

    const progress = calculateProgress()

    return (
        <div className="w-full max-w-4xl">
            {/* Barra de progreso */}
            <div className="relative h-3 bg-gray-800 rounded-full overflow-hidden">
                <div 
                    className="h-full progress-shine rounded-full"
                    style={{ 
                        width: `${progress}%`
                    }}
                />
            </div>

        {/* Labels GTA V y GTA VI con fechas */}
            <div className="flex justify-between mt-4">
                <div className="text-left">
                    <p className="text-sm text-white opacity-70 font-semibold">GTA V</p>
                    <p className="text-xs text-white opacity-60">{formatDate(GTAV_RELEASE_DATE)}</p>
                </div>
                
                <div className="text-right">
                    <p className="text-sm text-white opacity-70 font-semibold">GTA VI</p>
                    <p className="text-xs text-white opacity-60">{formatDate(GTAVI_RELEASE_DATE)}</p>
                </div>
            </div>
        </div>
    )
}
