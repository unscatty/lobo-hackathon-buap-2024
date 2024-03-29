import React from 'react'
import './benefits.css'

export const Benefits = () => {
  return (
    <section className="section__rewards container">
      <div className="section__rewards-container">
        <p className="section__rewards-description">Los beneficios de participar</p>
        <div className="section__rewards-container--grid">
          <div className="section__rewards-reward-box ">
            <p className="section__rewards-reward-box-title">
              Aprendizaje: No importa tu nivel de conocimiento. Siempre hay algo nuevo por aprender.
            </p>
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
