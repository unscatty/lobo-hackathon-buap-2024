import React from 'react'
import './HowTo.css'
import signin from './../../../assets/images/signin.svg'
import challenge from './../../../assets/images/challenge.svg'
import team from './../../../assets/images/team.svg'

export const HowTo = () => {
  return (
    <section className="section__how container mt-10" id="how">
      <div className="section__how-container">
        <h2 className="subtitle section__how-title font-title text-gradient">Únete hoy al hackathon</h2>
        <p className="section__how-description">
          En tres simples pasos puedes unirte al hackathon y comenzar a trabajar en tu proyecto.
        </p>
        <div className="grid md:grid-cols-2 justify-items-center justify-center">
          <div className="section__how-text-box order-1">
            <div>
              <h3 className="section__how-text--tile font-title">1 - Registrate en el hackathon</h3>
              <p className="section__how-how-text--description">
                Registrate en el hackathon en el siguiente registro
              </p>
            </div>
          </div>

          <div className="section__how-image-box order-2">
            <img className="section__how-image metamask-img" src={signin.src} alt="" />
          </div>

          <div className="section__how-image-box order-4 md:order-3">
            <img className="section__how-image" src={challenge.src} alt="" />
          </div>

          <div className="section__how-text-box order-3 md:order-4">
            <div>
              <h3 className="section__how-text--tile font-title">2 - Busca un reto </h3>
              <p className="section__how-how-text--description">
                Busca un reto que te llame la atención y se alinee con tus habilidades
              </p>
            </div>
          </div>

          <div className="section__how-text-box order-5" >
            <div>
              <h3 className="section__how-text--tile font-title">3 - Crea tu equipo en discord</h3>
              <p className="section__how-how-text--description">
                Crea tu equipo en discord y comienza a trabajar en tu proyecto para el hackathon
              </p>
            </div>
          </div>

          <div className="section__how-image-box order-6">
            <img className="section__how-image" src={team.src} alt="" />
          </div>
        </div>

        <p className="text-[82px] text-center text-gradient mt-20 font-title">
          ¡COMIENZA A HACKEAR!
        </p>
      </div>
    </section>
  )
}
