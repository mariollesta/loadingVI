# loadingVI - Contador Regresivo de GTA VI

![Portada de loadingVI](https://loadingvi.com/og-image.webp)

**[Visita la web en vivo 🚀](https://loadingvi.vercel.app)**

`loadingVI` es un contador regresivo *fan-made* dedicado al esperado lanzamiento de **Grand Theft Auto VI**. El proyecto nace de la emoción de la comunidad y está construido con un stack de tecnologías web modernas, optimizado para compartir en redes sociales y con herramientas para streamers.

---

## Características (Features)

* **⏳ Contador Preciso:** Muestra los días, horas, minutos y segundos restantes.
* **📊 Barra de Progreso:** Una barra de progreso animada que visualiza el tiempo transcurrido desde la salida de GTA V.
* **📺 Herramienta para Streamers:** Una página de configuración que genera un `<iframe>` para que los streamers puedan incrustar el contador en sus directos de OBS, Twitch, etc.
* **📲 Botones de Compartir:** Funcionalidad para compartir en X/Twitter, Facebook, WhatsApp y copiar el enlace.
* **📈 Contador de Visitas:** Un contador de visitas en vivo usando Vercel KV.

---

## Stack Tecnológico

Este proyecto está construido con:

* **Framework:** [React](https://reactjs.org/)
* **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
* **Bundler:** [Vite](https://vitejs.dev/)
* **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
* **Routing:** [React Router](https://reactrouter.com/)
* **SEO:** [React Helmet Async](https://github.com/staylor/react-helmet-async)
* **Base de Datos (Contador):** [Vercel KV](https://vercel.com/storage/kv)
* **Despliegue:** [Vercel](https://vercel.com/)

---

## Cómo Ejecutarlo en Local

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/mariollesta/loadingVI.git](https://github.com/mariollesta/loadingVI.git)
    cd loadingVI
    ```

2.  **Instalar dependencias:**
    ```bash
    pnpm install
    # o
    yarn install
    ```

3.  **Configurar variables de entorno:**
    Crea un archivo `.env.dev` en la raíz del proyecto para la página de "Incrustar":
    ```
    # .env.development
    VITE_BASE_URL=http://localhost:5173
    ```

4.  **Ejecutar el proyecto:**
    ```bash
    npm run dev
    ```
    Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

---

## Despliegue

Este proyecto está desplegado en **Vercel**. Vercel está conectado a la rama `main` de este repositorio.

* **Despliegue automático:** Cada `git push` a la rama `main` dispara un nuevo despliegue.
* **Variables de Entorno (Producción):** Para que el contador de visitas y la página de "Incrustar" funcionen en producción, es necesario configurar las variables de entorno de Vercel KV y `VITE_BASE_URL` en el panel de Vercel.

---

## Licencia

Este proyecto está bajo la Licencia Apache 2.0. Ver el archivo [LICENSE](LICENSE) para más detalles.