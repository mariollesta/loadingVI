![Portada de loadingVI](https://loadingvi.vercel.app/og-image.webp)

<div align="center">
  <i>
    fan-made countdown timer dedicated to release of <strong>Grand Theft Auto VI</strong>
  </i>
</div>



## Features

* **Counter:** Displays the remaining days, hours, minutes, and seconds.
* **Progress Bar:** An animated progress bar that visualises the time elapsed since the release of GTA V.
* **Streamer Tool:** A settings page that generates an `<iframe>` so streamers can embed the counter in their OBS, Twitch, etc. live streams.
* **Share Buttons:** Functionality to share on X/Twitter, Facebook, WhatsApp and copy the link.
* **Visitor Counter:** A live visitor counter using Vercel KV.



## Stack

Built with:

[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white&labelColor=101010)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white&labelColor=101010)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white&labelColor=101010)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-FFC107?style=for-the-badge&logo=vite&logoColor=white&labelColor=101010)](https://vite.dev/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white&labelColor=101010)](https://vercel.com/)



## How to run it locally

1.  **Clone repository:**
    ```bash
    git clone [https://github.com/mariollesta/loadingVI.git](https://github.com/mariollesta/loadingVI.git)
    cd loadingVI
    ```

2.  **Install dependencies:**
    ```bash
    pnpm install
    # o
    yarn install
    ```

3.  **Set up environment variables:**
    Crea un archivo `.env.dev` en la raíz del proyecto para la página de "Incrustar":
    ```
    # .env.development
    VITE_BASE_URL=http://localhost:5173
    ```

4.  **Run:**
    ```bash
    npm run dev
    ```
    Abre [http://localhost:5173](http://localhost:5173) en tu navegador.



## Deploy

This project is deployed on **Vercel**. Vercel is connected to the `main` branch of this repository.

* **Automatic deployment:** Each `git push` to the `main` branch triggers a new deployment.
* **Environment Variables (Production):** In order for the visitor counter and the ‘Embed’ page to work in production, it is necessary to configure the Vercel KV and `VITE_BASE_URL` environment variables in the Vercel panel.



## License

This project is licensed under the Apache Licence 2.0. See the [LICENCE](LICENCE) file for further details.