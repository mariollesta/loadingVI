import { useState, useEffect } from 'react'

import Twitter from '@icons/Twitter'
import Facebook from '@icons/Facebook'
import Whatsapp from '@icons/Whatsapp'
import Copy from '@icons/Copy'

const SHARE_TEXT = '¡Sigue la cuenta atrás para el lanzamiento de GTA VI!'

export const SocialShare: React.FC = () => {
    const [currentUrl, setCurrentUrl] = useState<string>('')
    
    const [didCopy, setDidCopy] = useState<boolean>(false)

    useEffect(() => {
        // useEffect ensures this runs only on the client side,
        // so 'window.location.href' will exist.
        setCurrentUrl(window.location.href)
    }, [])

    const handleCopy = () => {
        if (!currentUrl) return
        
        navigator.clipboard.writeText(currentUrl).then(() => {
            setDidCopy(true)
            // reset messahege after 2.5 seconds
            setTimeout(() => setDidCopy(false), 2500)
        })
    }

    if (!currentUrl) {
        return null
    }

    const encodedUrl = encodeURIComponent(currentUrl)
    const encodedText = encodeURIComponent(SHARE_TEXT)

    return (
        <div className="font-sans text-center w-full max-w-md">
            <div className="flex justify-center items-center gap-6">
                <a
                    href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Compartir en X/Twitter"
                    className="text-white opacity-70 hover:text-[var(--color-purple)] transition-colors"
                >
                    <Twitter />
                </a>

                <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Compartir en Facebook"
                    className="text-white opacity-70 hover:text-[var(--color-purple)] transition-colors"
                >
                    <Facebook />
                </a>

                <a
                    href={`https://api.whatsapp.com/send?text=${encodedText}%20${encodedUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Compartir en WhatsApp"
                    className="text-white opacity-70 hover:text-[var(--color-purple)] transition-colors"
                >
                    <Whatsapp />
                </a>

                <button
                    onClick={handleCopy}
                    title="Copiar enlace"
                    className="text-white opacity-70 hover:text-[var(--color-purple)] transition-colors"
                >
                    {didCopy ? (
                        <span className="text-sm text-[var(--color-purple)]">¡Copiado!</span>
                    ) : (
                        <Copy />
                    )}
                </button>
            </div>
        </div>
    )
}