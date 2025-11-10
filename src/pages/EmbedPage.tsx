import { CountdownEmbed } from '@components/CountdownEmbed'

export const EmbedPage = () => {
    const urlParams = new URLSearchParams(window.location.search)
    const isTransparent = urlParams.get('transparent') === '1'

    return (
        <div 
        className="min-h-screen flex items-center justify-center p-4"
        style={{ 
            background: isTransparent ? 'transparent' : '#171521'
        }}
        >
            <CountdownEmbed />
        </div>
    )
}