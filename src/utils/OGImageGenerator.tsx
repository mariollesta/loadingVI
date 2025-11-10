export const OGImageGenerator = () => {
    return (
        <div 
            style={{
                width: '1200px',
                height: '630px',
                background: '#171521',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                paddingLeft: '60px',      
                paddingRight: '40px',     
                paddingTop: '60px',
                paddingBottom: '60px',
            }}
        >
            {/* Logo/Título */}
            <h1
                style={{
                    fontFamily: 'Pricedown, sans-serif',
                    fontSize: '120px',
                    fontWeight: 'bold',
                    background: 'linear-gradient(to right, #ffd27b, #df3a93, #5c1663)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    marginBottom: '32px',
                    textAlign: 'center',
                    letterSpacing: '-2px',  
                }}
            >
                LOADING GTA VI .com
            </h1>
        </div>
    )
}