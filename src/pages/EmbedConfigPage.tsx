import { useState } from 'react';

import Copy from '@icons/Copy';
import Check from '@icons/Check';

const BASE_URL = import.meta.env.VITE_BASE_URL; 

export const EmbedConfigPage = () => {
    const [width, setWidth] = useState(800);
    const [height, setHeight] = useState(250);
    const [isTransparent, setIsTransparent] = useState(true);
    const [didCopy, setDidCopy] = useState(false);

    const embedUrl = `${BASE_URL}/embed?transparent=${isTransparent ? '1' : '0'}`;
    const iframeCode = `<iframe src="${embedUrl}" width="${width}" height="${height}" frameborder="0"></iframe>`;

    const handleCopy = () => {
        navigator.clipboard.writeText(iframeCode).then(() => {
            setDidCopy(true);
            setTimeout(() => setDidCopy(false), 2500);
        });
    };

    return (
        <div className="flex-1 flex items-center justify-center px-4 py-12">
            <div className="max-w-3xl w-full text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">
                    Configuración del temporizador integrado
                </h1>

                <h2 className="text-2xl font-bold mb-4">Vista previa</h2>
                <div 
                    className={`flex items-center justify-center p-4 rounded-lg mb-8 ${isTransparent ? 'bg-gray-700' : 'bg-gray-800'}`}
                >
                    <iframe
                        src={embedUrl}
                        width={width}
                        height={height}
                        style={{ maxWidth: '100%' }}
                    />
                </div>

                <h2 className="text-2xl mb-4">Configuración</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 text-white">
                    <div>
                        <label htmlFor="width" className="block text-sm opacity-80 mb-2">Anchura (píxeles)</label>
                        <input 
                            type="number" 
                            id="width" 
                            value={width} 
                            onChange={(e) => setWidth(Number(e.target.value))}
                            className="w-full p-2 rounded bg-gray-700 border border-gray-600" 
                        />
                    </div>
                    <div>
                        <label htmlFor="height" className="block text-sm opacity-80 mb-2">Altura (píxeles)</label>
                        <input 
                            type="number" 
                            id="height" 
                            value={height}
                            onChange={(e) => setHeight(Number(e.target.value))}
                            className="w-full p-2 rounded bg-gray-700 border border-gray-600" 
                        />
                    </div>
                    <div className="flex items-center justify-center md:pt-6">
                        <input 
                            type="checkbox" 
                            id="transparent" 
                            checked={isTransparent}
                            onChange={(e) => setIsTransparent(e.target.checked)}
                            className="w-4 h-4 text-[var(--color-pink)] bg-gray-700 border-gray-600 rounded focus:ring-pink-500" 
                        />
                        <label htmlFor="transparent" className="ml-3 text-sm font-medium">Fondo Transparente (para OBS)</label>
                    </div>
                </div>

                <h2 className="text-2xl font-bold mb-4">Código Embed</h2>
                <div className="relative bg-gray-700 p-4 rounded-lg mb-8">
                    <pre className="text-sm whitespace-pre-wrap overflow-x-auto pr-12">
                        <code>{iframeCode}</code>
                    </pre>
                    <button onClick={handleCopy} className="absolute top-2 right-2 p-2 bg-gray-700 rounded hover:text-[var(--color-pink)]">
                        {didCopy ? <Check /> : <Copy />}
                    </button>
                </div>

                <h2 className="text-2xl font-bold mb-4">Instrucciones para Streamers</h2>
                <ul className="list-decimal list-inside space-y-2 font-sans font-extrabold opacity-80">
                    <li>Abre OBS (o tu software de streaming) y selecciona tu escena.</li>
                    <li>Haz clic en 'Añadir Fuente' (el icono '+') y selecciona **"Navegador" (Browser)**.</li>
                    <li>Copia la **URL** del código de arriba (Ej: <code>{embedUrl}</code>).</li>
                    <li>Pega esa **URL** en el campo "URL" de la fuente de navegador.</li>
                    <li>Ajusta el "Ancho" (Width) y "Alto" (Height) para que coincidan con los que configuraste.</li>
                    <li>Marca "Apagar fuente cuando no esté visible" (Shutdown source) para mejor rendimiento.</li>
                </ul>
            </div>
        </div>
    );
};