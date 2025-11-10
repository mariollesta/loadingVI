import { useState, useEffect } from 'react'


export const VisitorCounter: React.FC = () => {
    const [visits, setVisits] = useState<string>('...')

    useEffect(() => {
        const fetchVisits = async () => {
            try {
                const response = await fetch(`https://...`)
                
                // type the expected response from the API
                const data: { value: number } = await response.json()
                setVisits(data.value.toString())

            } catch (error) {
                console.error("Error fetching visitor count:", error)
                setVisits('Error')
            }
        }

        fetchVisits()
    }, []) // [] ensures this runs only once on mount

    return (
        <div className="text-center">
            <p className="text-white opacity-70 text-base">
                VISITAS A LA WEB: 
                <span className="text-lg text-[var(--color-gold)] ml-2">
                {visits}
                </span>
            </p>
        </div>
    )
}