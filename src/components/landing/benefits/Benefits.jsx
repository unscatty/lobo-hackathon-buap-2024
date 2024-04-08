import React from 'react'
import './benefits.css'
import early from './../../../assets/images/early.svg'
import innovation from './../../../assets/images/Innovation-amico.svg'
import problem from './../../../assets/images/Problem.svg'
import student from './../../../assets/images/student.svg'

export const Benefits = () => {
  return (
    <section className="section__rewards container">
      <div className="section__rewards-container">
        <p className="section__rewards-description font-bold">
          ¿POR QUÉ EL <span className="text-gradient">LOBO HACKATHON</span>?
        </p>
        <p className="mb-8 text-center text-warmgray">
        Nuestro propósito es claro: impulsar a nuestros estudiantes a desarrollar un perfil profesional sólido desde temprano.{' '}
        </p>
        <div className="section__rewards-container--grid grid md:grid-cols-2 grid-cols-1">
          <div className="section__rewards-reward-box ">
            <p className="section__rewards-reward-box-title text-center">
              {' '}
              Carrera profesional temprana
            </p>
            <img className="section__rewards-reward-image" src={early.src} alt="" />
          </div>
          <div className="section__rewards-reward-box ">
            <p className="section__rewards-reward-box-title">
              Aprende tu potencial como estudiante
            </p>
            <img className="section__rewards-reward-image" src={student.src} alt="" />
          </div>

          <div className="section__rewards-reward-box ">
            <p className="section__rewards-reward-box-title">Desafíate a ti mismo</p>

            <img
              className="section__rewards-reward-image object-contain"
              src={problem.src}
              alt=""
            />
          </div>

          <div className="section__rewards-reward-box ">
            <p className="section__rewards-reward-box-title">Innova</p>
            <img className="section__rewards-reward-image" src={innovation.src} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}
