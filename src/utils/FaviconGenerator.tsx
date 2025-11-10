export const FaviconGenerator = () => {
    return (
        <div 
            style={{
                width: '512px',
                height: '512px',
                background: '#171521',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '80px',
                padding: '60px',
            }}
        >
            <div style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <span
                    style={{
                        fontFamily: 'Pricedown, sans-serif',
                        fontSize: '280px',
                        fontWeight: 'bold',
                        background: 'linear-gradient(to right, #ffd27b, #df3a93, #5c1663)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        lineHeight: 1,
                        letterSpacing: '2px', 
                    }}
                >
                    VI
                </span>
            </div>
        </div>
    )
}