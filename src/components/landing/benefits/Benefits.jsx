import React from 'react'
import './benefits.css'

export const Benefits = () => {
  return (
    <section className="section__rewards container">
      <div className="section__rewards-container">
        <p className="section__rewards-description font-bold">¿POR QUÉ EL <span className="text-gradient">LOBO HACKATHON</span>?</p>
        <p className="mb-8 text-center text-warmgray">
        Nuestro propósito es claro: impulsar a nuestros estudiantes a desarrollar un perfil profesional sólido desde temprano.{' '}
        </p>
        <div className="section__rewards-container--grid">
          <div className="section__rewards-reward-box ">
            <p className="section__rewards-reward-box-title"></p>
            <img
              className="section__rewards-reward-image"
              //   src={require('./../../assets/img/shared.svg').default}
              alt=""
            />
          </div>
          <div className="section__rewards-reward-box ">
            <p className="section__rewards-reward-box-title"></p>
            <img
              className="section__rewards-reward-image"
              //   src={require('./../../assets/img/shared.svg').default}
              alt=""
            />
          </div>

          <div className="section__rewards-reward-box ">
            <p className="section__rewards-reward-box-title"></p>
            <img
              className="section__rewards-reward-image"
              //   src={require('./../../assets/img/safe.svg').default}
              alt=""
            />
          </div>

          <div className="section__rewards-reward-box ">
            <p className="section__rewards-reward-box-title"></p>
            <img
              className="section__rewards-reward-image"
              //   src={require('./../../assets/img/reward.svg').default}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  )
}
