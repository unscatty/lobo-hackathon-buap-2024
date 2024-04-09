import React from 'react'
import './benefits.css'
import early from './../../../assets/images/early.svg'
import innovation from './../../../assets/images/Innovation-amico.svg'
import problem from './../../../assets/images/Problem.svg'
import student from './../../../assets/images/student.svg'

export const Benefits = () => {
  return (
    <section className="section__rewards container grid justify-center content-center w-[100%]  p-20 bg-black rounded-[20px]">
      <div className="section__rewards-container rounded-[20px]">
        <p className=" font-bold font-title font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full text-center" >
          ¿POR QUÉ EL <span className="text-gradient ">LOBO HACKATHON</span>?
        </p>
        <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] text-center mt-5 max-w-[640px] m-auto">
        Nuestro propósito es claro: impulsar a nuestros estudiantes a desarrollar un perfil profesional sólido desde temprano. 
        </p>
        <div className="section__rewards-container--grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div className="section__rewards-reward-box ">
          
            <img className="section__rewards-reward-image" src={early.src} alt="" />
            <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] text-center">
              {' '}
              Carrera profesional temprana
            </p>
          </div>
          <div className="section__rewards-reward-box ">
          <img className="section__rewards-reward-image" src={student.src} alt="" />
            <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] text-center">
              Aprende tu potencial como estudiante
            </p>
            
          </div>

          <div className="section__rewards-reward-box ">
            <img
              className="section__rewards-reward-image object-contain"
              src={problem.src}
              alt=""
            />
            <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] text-center">Desafíate a ti mismo</p>

            
          </div>
          <div className="section__rewards-reward-box ">
            <img
              className="section__rewards-reward-image object-contain"
              src={innovation.src}
              alt=""
            />
               <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] text-center">Innova</p>

            
          </div>
         
        </div>
      </div>
    </section>
  )
}
