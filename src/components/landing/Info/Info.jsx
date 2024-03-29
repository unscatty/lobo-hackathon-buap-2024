import learning from '@assets/images/learning.svg'
import networking from '@assets/images/networking.svg'
import prizes from '@assets/images/prizes.svg'

const translations = {
  'hackathonBenefits.learning': 'Aprendizaje',
  'hackathonBenefits.learningContent':
    'No importa tu nivel de conocimiento. Nuestros mentores estarán disponibles.',
  'hackathonBenefits.networking': 'Networking',
  'hackathonBenefits.networkingContent':
    'Conecta con reclutadores de diferentes empresas y mejora tu perfil.',
  'hackathonBenefits.prizes': 'Premios',
  'hackathonBenefits.prizesContent': 'Domina el track del hackathon y consigue el premio.',
  'hackathonBenefits.learning.title': 'Aprendizaje',
  'hackathonBenefits.learning.content':
    'No importa tu nivel de conocimiento. Nuestros mentores estarán disponibles.',
  'whatIs.title': '¿Qué es un',
  'whatIs.hackathonName': 'Hackathon?',
  'whatIs.description': `Un hackathon es una manera increíble de aprender nuevas habilidades, crear
    proyectos increíbles y compartir ideas. 
    Se describe mejor como un 
    "maratón de inventos". Cualquier persona interesada en la tecnología 
    asiste a un hackathon para aprender, desarrollar y compartir sus creaciones durante 3
    días en un ambiente relajado y acogedor. 
    ¡No es necesario ser programador ni especializarse en Ciencias de la Computación!`,
  'hero.heading': 'LOBO HACKATHON',
  'hero.subheading': 'BUAP',
  'hero.description':
    '¡Deja tu marca en la historia al participar en el primer Hackathon de la BUAP! Como estudiante, tienes la oportunidad única de formar parte de este emocionante evento, que marcará un hito en nuestra universidad. Únete a nosotros y sé parte de este viaje hacia la innovación y el éxito.',
  'whatIs.expectTitle': 'Qué esperar...',
}

const t = (key) => translations[key] || key

const styles = {
  boxWidth: 'xl:max-w-[1280px] w-full',

  heading2:
    'font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full',
  paragraph: 'font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]',

  flexCenter: 'flex justify-center items-center',
  flexStart: 'flex justify-center items-start',

  paddingX: 'sm:px-16 px-6',
  paddingY: 'sm:py-16 py-6',
  padding: 'sm:px-16 px-6 sm:py-12 py-4',

  marginX: 'sm:mx-16 mx-6',
  marginY: 'sm:my-16 my-6',
}

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
}

export const hackathonBenefits = [
  {
    id: 'feature-1',
    icon: learning.src,
    titleKey: 'hackathonBenefits.learning',
    contentKey: 'hackathonBenefits.learningContent',
  },
  {
    id: 'feature-2',
    icon: networking.src,
    titleKey: 'hackathonBenefits.networking',
    contentKey: 'hackathonBenefits.networkingContent',
  },
  {
    id: 'feature-3',
    icon: prizes.src,
    titleKey: 'hackathonBenefits.prizes',
    contentKey: 'hackathonBenefits.prizesContent',
  },
]

const BenefitCard = ({ icon, titleKey, contentKey, index }) => {
  return (
    <div
      className={`flex flex-row p-6 rounded-[20px] ${
        index !== hackathonBenefits.length - 1 ? 'mb-6' : 'mb-0'
      } feature-card`}
    >
      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
        <img src={icon} alt={t(titleKey)} className="w-[50%] h-[50%] object-cover" />
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
          {t(titleKey)}
        </h4>
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
          {t(contentKey)}
        </p>
      </div>
    </div>
  )
}

const WhatIs = () => {
  return (
    <section
      id="hackathonBenefits"
      className={`flex justify-center content-center ${layout.section}`}
    >
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2}`}>
          {t('whatIs.title')} <br className="sm:block hidden" />
          <span className="text-gradient">{t('whatIs.hackathonName')}</span>
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Un hackathon es una manera increíble de aprender nuevas habilidades, crear proyectos
          increíbles y compartir ideas.
          <br />
          <br /> Se describe mejor como un "maratón de inventos". Cualquier persona interesada en la
          tecnología asiste a un hackathon para aprender, desarrollar y compartir sus creaciones
          durante 3 días en un ambiente relajado y acogedor.
          <br /> <br /> ¡No es necesario ser programador ni especializarse en Ciencias de la
          Computación!,
        </p>
      </div>

      <div className={`flex-1 md:ml-10 ml-0 md:mt-0 mt-10 relative flex-col justify-start`}>
        <h5
          className={`font-poppins text-gray-200 text-[24px] text-start w-full font-bold p-6 border-b-2`}
        >
          {t('whatIs.expectTitle')}
        </h5>
        <iframe
          className="w-full h-[400px] sm:h-[500px] my-4 shadow-lg border-2 border-gray-200 rounded-[20px]"
          src="https://www.youtube.com/embed/qj4DQfYx2Hg?si=lm8XU-Brp1QHHs0r"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        {/* {hackathonBenefits.map((benefit, index) => (
          <BenefitCard
            key={benefit.id}
            icon={benefit.icon}
            titleKey={benefit.titleKey}
            contentKey={benefit.contentKey}
            index={index}
          />
        ))} */}
      </div>
    </section>
  )
}

export default WhatIs
