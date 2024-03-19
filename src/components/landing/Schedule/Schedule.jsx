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

const schedule = [
  {
    id: 'day-1',
    title: 'Día 1',
    date: '18 de Abril',
    sessions: [
      {
        id: 'session-1',
        time: '2024-03-18T09:00',
        timeEnd: '2024-04-18T10:30',
        title: 'Ceremonia de Apertura',
        speaker: 'Organización Lobo Hackathon',
        description:
          '¡Bienvenidos a la primera edición de Lobo Hackathon! Iniciamos con la ceremonia de apertura, donde se dará la bienvenida a todos los asistentes y se presentará el programa del evento.',
      },

      {
        id: 'session-2',
        time: '2024-04-18T11:00',
        timeEnd: '2024-04-18T12:00',
        title: 'Master Class',
        speaker: 'Empresas',
        description:
          'Charla magistral sobre el tema de la competencia, impartida por un experto en el de cada track. ¡No te la pierdas!',
      },

      {
        id: 'session-3',
        time: '2024-04-18T13:30',
        timeEnd: '2024-04-18T14:15',
        title: 'Master Class',
        speaker: 'Alonso Berrelleza University Recruiter @ Microsoft',
        description:
          'University Recruiter en Microsoft, Alonso Berrelleza, nos hablará sobre las oportunidades de empleo y desarrollo profesional que ofrece Microsoft para estudiantes y recién egresados.',
      },

      {
        id: 'session-4',
        time: '2024-04-18T14:30',
        timeEnd: '2024-04-18T15:30',
        title: 'Comida + Panel Interns (2:45 PM)',
        speaker: 'Hackathoneros',
        description:
          '¡Es hora de recargar energías! Tendremos un receso para que puedas disfrutar de un delicioso almuerzo y continuar con las actividades del día. Mientras tanto podrás disfrutar de un panel de internos de diferentes empresas.',
      },

      {
        id: 'session-5',
        time: '2024-04-18T16:30',
        timeEnd: '2024-04-18T17:15',
        title: 'Comunidad GCE',
        speaker: 'Representante de Comunidad GCE',
        description:
          'Conoce a la comunidad de Google Cloud en tu universidad y descubre cómo puedes ser parte de ella. ¡No te pierdas esta oportunidad!',
      },

      {
        id: 'session-6',
        time: '2024-04-18T07:15',
        timeEnd: '2024-04-18T08:00',
        title: 'Cierre de instalaciones (8:00 PM)',
        speaker: 'Participantes',
        description:
          'Es hora de cerrar las instalaciones y dar por terminado el primer día de actividades. ¡Gracias por tu participación!',
      },

      {
        id: 'session-7',
        time: '2024-04-18T20:00',
        timeEnd: '2024-04-18T21:00',
        title: 'Cargar primer entregable en la plataforma Devpost',
        speaker: 'Participantes',
        description:
          '¡Es hora de cargar tu primer entregable en la plataforma Devpost! Recuerda que tienes hasta las 9:00 PM para hacerlo. El formato es txt y debe describir la idea que se llevara acabo durante el evento.',
      },

      {
        id: 'session-8',
        time: '2024-04-18T22:00',
        timeEnd: '2024-04-18T23:00',
        title: 'Cena',
        speaker: 'Hackathoneros',
        description:
          '¡Es hora de recargar energías! Tendremos un receso para que puedas disfrutar de una deliciosa cena y continuar con las actividades del día.',
      },

      {
        id: 'session-9',
        time: '2024-04-18T23:00',
        timeEnd: '2024-04-18T01:00',
        title: 'Torneo de Esports',
        speaker: 'Cualquiera',
        description:
          '¡Es hora de divertirse! Participa en el torneo de Esports que se llevará a cabo en el área de descanso. ¡No te lo pierdas!',
      },
    ],
  },
  {
    id: 'day-2',
    title: 'Día 2',
    date: '19 de Abril',

    sessions: [
      {
        id: 'session-1',
        time: '9:00 AM',
        title: 'Apertura',
        speaker: '????',
      },

      {
        id: 'session-2',
        time: '10:00 AM',
        title: 'Charla',
        speaker: '????',
      },

      {
        id: 'session-3',
        time: '11:00 AM',
        title: 'Charla',
        speaker: '????',
      },

      {
        id: 'session-4',
        time: '12:00 PM',
        title: 'Charla',
        speaker: '????',
      },

      {
        id: 'session-5',
        time: '1:00 PM',
        title: 'Comida',
        speaker: '????',
      },

      {
        id: 'session-6',
        time: '2:00 PM',
        title: 'Charla',
        speaker: '????',
      },

      {
        id: 'session-7',
        time: '3:00 PM',
        title: 'Charla',
        speaker: '????',
      },

      {
        id: 'session-8',
        time: '4:00 PM',
        title: 'Charla',
        speaker: '????',
      },

      {
        id: 'session-9',
        time: '5:00 PM',
        title: 'Charla',
        speaker: '????',
      },

      {
        id: 'session-10',
        time: '6:00 PM',
        title: 'Cierre',
        speaker: '????',
      },
    ],
  },
  {
    id: 'day-3',
    title: 'Día 3',
    date: '20 de Abril',

    sessions: [
      {
        id: 'session-1',
        time: '9:00 AM',
        title: 'Apertura',
        speaker: '????',
      },

      {
        id: 'session-2',
        time: '10:00 AM',
        title: 'Charla',
        speaker: '????',
      },

      {
        id: 'session-3',
        time: '11:00 AM',
        title: 'Charla',
        speaker: '????',
      },

      {
        id: 'session-4',
        time: '12:00 PM',
        title: 'Charla',
        speaker: '????',
      },

      {
        id: 'session-5',
        time: '1:00 PM',
        title: 'Comida',
        speaker: '????',
      },

      {
        id: 'session-6',
        time: '2:00 PM',
        title: 'Charla',
        speaker: '????',
      },

      {
        id: 'session-7',
        time: '3:00 PM',
        title: 'Charla',
        speaker: '????',
      },

      {
        id: 'session-8',
        time: '4:00 PM',
        title: 'Charla',
        speaker: '????',
      },

      {
        id: 'session-9',
        time: '5:00 PM',
        title: 'Charla',
        speaker: '????',
      },

      {
        id: 'session-10',
        time: '6:00 PM',
        title: 'Cierre',
        speaker: '????',
      },
    ],
  },
]

import React from 'react'
import pkg from 'react-vertical-timeline-component'
const { VerticalTimeline, VerticalTimelineElement } = pkg
import 'react-vertical-timeline-component/style.min.css'
import './schedule.css'

const Schedule = () => {
  return (
    <section id="agenda" className={`${layout.section} relative z-1`}>
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
      <div className={layout.sectionInfo}>
        <h5
          className={`font-poppins text-dimWhite text-[24px] text-center w-full text-gradient font-bold mb-5`}
        >
          Agenda
        </h5>
        <h2 className={`${styles.heading2} text-center`}>
          Conoce Nuestra Agenda <br className="sm:block hidden" />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 w-full mt-10 gap-10">
          {schedule.map((event) => (
            <div
              key={event.id}
              className="flex flex-col bg-black-gradient-2 p-6 rounded-[20px] relative"
            >
              <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
                {event.title}
              </h4>

              <p className="font-poppins font-normal text-gray-300 text-[16px] leading-[24px]">
                {event.date}
              </p>
              <hr className="mb-2" />
              <VerticalTimeline layout="1-column" className="!p-0" key={event.id}>
                {event.sessions.map((session, id) => {
                  const startTime = new Date(session.time)
                  const endTime = new Date(session.timeEnd)
                  const now = new Date()

                  const isHappeningNow = now >= startTime && now <= endTime

                  // Get the hour in 12-hour format with PM and AM and minutes
                  const hour = startTime.toLocaleString('en-US', {
                    hour: 'numeric',
                    minute: 'numeric',
                    hour12: true,
                  })

                  // Get the hour in 12-hour format with PM and AM
                  const hourEnd = endTime.toLocaleString('en-US', {
                    hour: 'numeric',
                    minute: 'numeric',
                    hour12: true,
                  })

                  return (
                    <VerticalTimelineElement
                      key={session.id}
                      className={`vertical-timeline-element--work !my-5 ${isHappeningNow ? 'happening-now' : ''}`}
                      contentArrowStyle={{
                        // borderRight: '7px solid #fff',
                        borderRight: `7px solid ${isHappeningNow ? '#5e2176' : '#e4e4e4'}`,
                      }}
                      iconStyle={{
                        background: isHappeningNow ? '#5e2176' : '#e3e3e3',
                        color: isHappeningNow ? '#fff' : '#5e2176',
                      }}
                      date={
                        <>
                          {hour} <br /> {hourEnd}
                        </>
                      }
                    >
                      <p
                        className={`text-lg !m-0 font-semibold text-black ${isHappeningNow ? 'text-white' : 'text-gray-500'}`}
                      >
                        {session.title}
                      </p>
                      <p className="text-gray-400 !mt-0">{session.speaker}</p>
                    </VerticalTimelineElement>
                  )
                })}
              </VerticalTimeline>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Schedule
