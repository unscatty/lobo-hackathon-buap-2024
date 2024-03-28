const Info = () => {
  return (
    <div className="max-w-screen mx-auto my-auto pt-8 text-primary ">
      <div className="w-7/8 h-full mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 ">
        <div className="">
          <h1 className="text-4xl mb-10">
            ¿Qué es el <br /> Lobo Hackathon BUAP?
          </h1>
          <p className="">
            Un hackathon es una manera increíble de aprender nuevas habilidades, <br /> crear
            proyectos increíbles y compartir ideas. <br /> <br />
            Se describe mejor como un <br />
            "maratón de inventos". Cualquier persona interesada en la tecnología <br />
            asiste a un hackathon para aprender, desarrollar y compartir sus creaciones durante 3
            días en un ambiente relajado y acogedor. <br /> <br />
            ¡No es necesario ser programador ni especializarse en Ciencias de la Computación!
          </p>
        </div>
        <div className="">
          <div>
            <h2 className="text-2xl p-3">¿Qué esperar?</h2>
            <div className="w-full h-full bg-primary border border-radius-30"></div>
            <div className="w-full pb-4 pt-4 pl-4 rounded-lg flex items-center">
              <div className="bg-primary w-14 h-14 m-4 border rounded-full flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-14 h-14" viewBox="0 0 640 512">
                  <path
                    fill="black"
                    d="M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87c.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6M352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47z"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 className="font-title">APRENDIZAJE</h3>
                <p>No importa tu nivel de conocimiento. Nuestros mentores estarán disponibles</p>
              </div>
            </div>
            <div className="w-full pb-4 pt-4 pl-4 rounded-lg flex items-center">
              <div className="bg-primary w-14 h-14 m-4 border rounded-full flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-14 h-10" viewBox="0 0 24 24">
                  <path
                    fill="black"
                    d="M12 5.5A3.5 3.5 0 0 1 15.5 9a3.5 3.5 0 0 1-3.5 3.5A3.5 3.5 0 0 1 8.5 9A3.5 3.5 0 0 1 12 5.5M5 8c.56 0 1.08.15 1.53.42c-.15 1.43.27 2.85 1.13 3.96C7.16 13.34 6.16 14 5 14a3 3 0 0 1-3-3a3 3 0 0 1 3-3m14 0a3 3 0 0 1 3 3a3 3 0 0 1-3 3c-1.16 0-2.16-.66-2.66-1.62a5.536 5.536 0 0 0 1.13-3.96c.45-.27.97-.42 1.53-.42M5.5 18.25c0-2.07 2.91-3.75 6.5-3.75s6.5 1.68 6.5 3.75V20h-13zM0 20v-1.5c0-1.39 1.89-2.56 4.45-2.9c-.59.68-.95 1.62-.95 2.65V20zm24 0h-3.5v-1.75c0-1.03-.36-1.97-.95-2.65c2.56.34 4.45 1.51 4.45 2.9z"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 className="font-title">NETWORKING</h3>
                <p>Conecta con reclutadores de diferentes empresas y mejora tu perfil</p>
              </div>
            </div>
            <div className="w-full pb-4 pt-4 pl-4 rounded-lg flex items-center">
              <div className="bg-primary w-14 h-14 m-4 border rounded-full flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-14 h-14" viewBox="0 0 256 256">
                  <path
                    fill="black"
                    d="M216 72h-35.08c.39-.33.79-.65 1.17-1A29.53 29.53 0 0 0 192 49.57A32.62 32.62 0 0 0 158.44 16A29.53 29.53 0 0 0 137 25.91a54.94 54.94 0 0 0-9 14.48a54.94 54.94 0 0 0-9-14.48A29.53 29.53 0 0 0 97.56 16A32.62 32.62 0 0 0 64 49.57A29.53 29.53 0 0 0 73.91 71c.38.33.78.65 1.17 1H40a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16v64a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16v-64a16 16 0 0 0 16-16V88a16 16 0 0 0-16-16m-67-35.49a13.69 13.69 0 0 1 10-4.5h.49A16.62 16.62 0 0 1 176 49.08a13.69 13.69 0 0 1-4.5 10c-9.49 8.4-25.24 11.36-35 12.4c1.2-10.59 4.5-25.98 12.5-34.97m-64.09.36A16.63 16.63 0 0 1 96.59 32h.49a13.69 13.69 0 0 1 10 4.5c8.39 9.48 11.35 25.2 12.39 34.92c-9.72-1-25.44-4-34.92-12.39a13.69 13.69 0 0 1-4.5-10a16.6 16.6 0 0 1 4.82-12.16ZM40 88h80v32H40Zm16 48h64v64H56Zm144 64h-64v-64h64Zm16-80h-80V88h80z"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 className="font-title">PREMIOS</h3>
                <p>Domina el track del hackathon y consigue el premio</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info
