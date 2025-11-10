import { useState, useEffect } from 'react'

export const VisitorCounter: React.FC = () => {
    const [visits, setVisits] = useState<string>('...')

    useEffect(() => {
        const fetchVisits = async () => {
            try {
                const response = await fetch('/api/visits')
                
                if (!response.ok) {
                    throw new Error('Failed to fetch visits')
                }
                
                // type the expected response from the API
                const data: { value: number } = await response.json()
                setVisits(data.value.toLocaleString()) 

            } catch (error) {
                console.error("Error fetching visitor count:", error)
                setVisits('Error')
            }
        }

        fetchVisits()
    }, []) // [] ensures this runs only once on mount

    return (
        <div className="text-center">
            <p className="text-white opacity-70 text-sm sm:text-base">
                VISITAS A LA WEB: 
                <span className="text-base sm:text-lg text-[var(--color-gold)] ml-2 font-bold">
                    {visits}
                </span>
            </p>
        </div>
    )
}