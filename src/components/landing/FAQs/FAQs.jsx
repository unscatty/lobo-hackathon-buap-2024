import { useState, useRef, useEffect } from 'react'
import styles, { layout } from './style'
import PropTypes from 'prop-types'

const AccordionItem = ({ title, content, isOpen, onToggle }) => {
  const [contentHeight, setContentHeight] = useState(0)
  const contentRef = useRef(null)

  useEffect(() => {
    setContentHeight(isOpen ? contentRef.current.scrollHeight : 0)
    console.log(contentRef.current.scrollHeight)
  }, [isOpen])

  const handleClick = () => {
    onToggle()
  }

  return (
    <li className="bg-white my-2 shadow-lg w-[100%] rounded-sm bg-black-gradient-2">
      <h2
        className="flex flex-row justify-between items-center font-semibold p-3 cursor-pointer"
        onClick={handleClick}
      >
        <span className="mr-2 text-white">{title}</span>
        <svg
          className={`fill-current text-[#d57deb] h-6 w-6 transform transition-transform duration-500 ${
            isOpen ? 'rotate-180' : ''
          }`}
          viewBox="0 0 20 20"
        >
          <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
        </svg>
      </h2>
      <div
        ref={contentRef}
        className="border-l-2 border-[#d57deb] overflow-hidden transition-height duration-500"
        style={{ height: `${contentHeight}px` }}
      >
        <p className="p-3 text-white">{content}</p>
      </div>
    </li>
  )
}

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      id: 'faq-1',
      question: '¿Qué es un hackathon?',
      answer:
        'Un hackathon es un “maratón de inventos” . Cualquier persona interesada en la tecnología asiste a un hackathon para aprender, desarrollar y compartir sus creaciones durante un 3 dias en un ambiente relajado y acogedor.',
    },
    {
      id: 'faq-2',
      question: '¿Puedo participar si no tengo experiencia?',
      answer: 'Sí, por supuesto. Nuestros mentores estarán disponibles para ayudarte.',
    },
    {
      id: 'faq-3',
      question: '¿Qué necesito para participar?',
      answer:
        'Hacer tu pre-regsitro y mantenerte al pendiente de nuestras redes sociales para cuando salga el registro.',
    },
    {
      id: 'faq-4',
      question: '¿Cuánto cuesta participar?',
      answer: 'La entrada es gratuita.',
    },
    {
      id: 'faq-5',
      question: '¿Qué debo llevar?',
      answer:
        'Un dispositivo con conexión a internet, una identificación oficial y muchas ganas de aprender.',
    },
    {
      id: 'faq-6',
      question: '¿Puedo participar si no soy estudiante?',
      answer: 'No, el evento es solo para estudiantes.',
    },
  ]

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index))
  }

  const midIndex = Math.ceil(faqs.length / 2)
  const firstHalf = faqs.slice(0, midIndex)
  const secondHalf = faqs.slice(midIndex)

  return (
    <section id="FAQs" className={`${layout.section} relative`}>
      <div className="absolute z-[0] w-[60%] h-[60%] -left-[50%] rounded-full blue__gradient bottom-40" />
      <div className={`${layout.sectionInfo} z-[1]`}>
        <h5
          className={`font-poppins text-dimWhite text-[24px] text-center w-full text-gradient font-bold mb-5`}
        >
          FAQs
        </h5>
        <h2 className={`${styles.heading2} text-center mb-5`}>Preguntas frecuentes</h2>
        <div className="flex justify-center items-start my-2 w-full">
          <div className="w-full ">
            <ul className="grid sm:grid-cols-2 grid-cols-1 sm:gap-4">
              <div className="">
                {firstHalf.map((faq, index) => (
                  <AccordionItem
                    key={faq.id}
                    title={faq.question}
                    content={faq.answer}
                    isOpen={openIndex === faq.id}
                    onToggle={() => handleToggle(faq.id)}
                  />
                ))}
              </div>
              <div className="top-[-8px] relative ">
                {secondHalf.map((faq, index) => (
                  <AccordionItem
                    key={faq.id}
                    title={faq.question}
                    content={faq.answer}
                    isOpen={openIndex === faq.id}
                    onToggle={() => handleToggle(faq.id)}
                  />
                ))}
              </div>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

AccordionItem.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  isOpen: PropTypes.bool,
  onToggle: PropTypes.func,
}

export default FAQs
