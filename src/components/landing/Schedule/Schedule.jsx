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
        time: '2024-04-18T10:00',
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
        title: 'Key Note Speaker',
        speaker: 'TODO',
        description: 'TODO',
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
        timeEnd: '2024-04-19T01:00',
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
        time: '2024-04-18T23:00',
        timeEnd: '2024-04-19T01:00',
        title: 'Torneo de Esports',
        speaker: 'Cualquiera',
        description:
          '¡Es hora de divertirse! Participa en el torneo de Esports que se llevará a cabo en el área de descanso. ¡No te lo pierdas!',
      },

      {
        id: 'session-2',
        time: '2024-04-19T07:00',
        timeEnd: '2024-04-19T08:00',
        title: 'Yoga',
        speaker: 'Cualquiera',
        description:
          '¡Es hora de divertirse! Participa en el torneo de Esports que se llevará a cabo en el área de descanso. ¡No te lo pierdas!',
      },

      {
        id: 'session-3',
        time: '2024-04-19T08:00',
        timeEnd: '2024-04-19T09:00',
        title: 'Desayuno',
        speaker: 'Cualquiera',
        description:
          '¡Es hora de recargar energías! Tendremos un receso para que puedas disfrutar de un delicioso desayuno y continuar con las actividades del día.',
      },

      {
        id: 'session-4',
        time: '2024-04-19T08:00',
        timeEnd: '2024-04-19T09:00',
        title: 'Mentoria',
        speaker: 'Empresas',
        description:
          'Agenda tu mentoría con las empresas participantes. ¡No te pierdas esta oportunidad!',
      },

      {
        id: 'session-5',
        time: '2024-04-19T12:00',
        timeEnd: '2024-04-19T12:45',
        title: 'Key Note Speaker',
        speaker: 'Empresas',
        description:
          'Agenda tu mentoría con las empresas participantes. ¡No te pierdas esta oportunidad!',
      },

      {
        id: 'session-5',
        time: '2024-04-19T14:00',
        timeEnd: '2024-04-19T14:45',
        title: 'Comunidad GDG',
        speaker: 'Representante de Comunidad GDG',
        description:
          'Conoce a la comunidad de Google Developers en tu universidad y descubre cómo puedes ser parte de ella. ¡No te pierdas esta oportunidad!',
      },

      {
        id: 'session-7',
        time: '2024-04-19T15:00',
        timeEnd: '2024-04-19T16:00',
        title: 'Comida + Ponencia Pitch (3:15 PM)',
        speaker: 'BrujeriaTech',
        description:
          'Presentación de la ponencia de Pitch, donde se darán consejos para presentar tu proyecto de la mejor manera. ¡No te la pierdas!',
      },

      {
        id: 'session-8',
        time: '2024-04-19T14:05',
        timeEnd: '2024-04-19T16:50',
        title: 'Comunidad WTM',
        speaker: 'Representante de Comunidad WTM',
        description:
          'Panel de discucion con miembros de una sola comunidad tech, con el objetivo de compartir porque es importante la comunidad, que beneficios tiene ser parte y como ser parte.',
      },

      {
        id: 'session-9',
        time: '2024-04-19T18:00',
        timeEnd: '2024-04-19T19:30',
        title: 'Mentoria',
        speaker: 'Empresas',
        description:
          'Espacio reservado para que los equipos se reunan con los mentores de sus tracks, los cualesya conoceran el proyecto por la primer mentoria y tendran el primer entregable, con el objetivo de retroalimentar la idea. Duracion: 15min (por equipo) Tema: mentoria enfocada en presentar un buen pitch.',
      },

      {
        id: 'session-10',
        time: '2024-04-19T18:00',
        timeEnd: '2024-04-19T19:30',
        title: 'Cierre de instalaciones (8:00 PM)',
        speaker: 'Participantes',
        description:
          'Es hora de cerrar las instalaciones y dar por terminado el primer día de actividades. ¡Gracias por tu participación!',
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
        time: '2024-04-20T02:00',
        timeEnd: '2024-04-20T04:00',
        title: 'Torneo de Esports',
        speaker: 'Cualquiera',
        description:
          '¡Es hora de divertirse! Participa en el torneo de Esports que se llevará a cabo en el área de descanso. ¡No te lo pierdas!',
      },

      {
        id: 'session-2',
        time: '2024-04-20T07:00',
        timeEnd: '2024-04-20T08:00',
        title: 'Entregable Final',
        speaker: 'Hackathoneros',
        description: `Entregables finales a subir a devPost:
          Video con duracion de 3min, explicando su apliacion(demo).
          Describir su aplicacion en un documento de de texto.
          Repositorio de github.`,
      },

      {
        id: 'session-3',
        time: '2024-04-20T08:00',
        timeEnd: '2024-04-20T09:00',
        title: 'Deliberacion',
        speaker: 'Jueces',
        description: `Espacio donde lo jueces de cada reto tendran tiempo de revisar los entregables y finales y nombraran a los 3 finalistas.`,
      },

      {
        id: 'session-4',
        time: '2024-04-20T09:00',
        timeEnd: '2024-04-20T09:15',
        title: 'Anuncio de Finalistas',
        speaker: 'Jueces',
        description: `Se nombraran a 3 finalistas por cada track.`,
      },

      {
        id: 'session-5',
        time: '2024-04-20T10:15',
        timeEnd: '2024-04-20T11:45',
        title: 'Presentacion Final',
        speaker: 'Hackathoneros',
        description: `Durante este tiempo los equipos finalistas de todos los tracks pasaran al main-stage y presentaran su aplicacion en un pitch de 5 minutos.`,
      },

      {
        id: 'session-6',
        time: '2024-04-20T12:00',
        timeEnd: '2024-04-20T13:00',
        title: 'Presentacion Final',
        speaker: 'Empresas',
        description: `Se dara a conocer al equipo ganador de cada track.`,
      },

      {
        id: 'session-7',
        time: '2024-04-20T13:00',
        timeEnd: '2024-04-20T13:30',
        title: 'Clausura',
        speaker: 'Organización',
        description: `Se dara a conocer al equipo ganador de cada track.`,
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
  const [activeDay, setActiveDay] = React.useState('day-1')

  return (
    <section id="agenda" className={`${layout.section} relative z-1 container mx-auto`}>
      <div className="absolute z-[0] w-[60%] h-[60%] rounded-full blue__gradient bottom-40 right-[0%]" />
      <div className={layout.sectionInfo}>
        <h5
          className={`font-poppins text-dimWhite text-[24px] text-center w-full text-gradient font-bold mb-5`}
        >
          Agenda
        </h5>
        <h2 className={`${styles.heading2} text-center`}>
          Conoce Nuestra Agenda <br className="sm:block hidden" />
        </h2>

        <div className="xl:hidden flex justify-center my-5 mx-auto">
          <button
            onClick={() => setActiveDay('day-1')}
            className={`px-8 md:px-16 py-2 rounded border border-5e2176 ${activeDay === 'day-1' ? 'bg-white text-black' : 'bg-5e2176 text-white'}`}
          >
            Day 1
          </button>
          <button
            onClick={() => setActiveDay('day-2')}
            className={`px-8 md:px-16 py-2 rounded border border-5e2176 ${activeDay === 'day-2' ? 'bg-white text-black' : 'bg-5e2176 text-white'}`}
          >
            Day 2
          </button>
          <button
            onClick={() => setActiveDay('day-3')}
            className={`px-8 md:px-16 py-2 rounded border border-5e2176 ${activeDay === 'day-3' ? 'bg-white text-black': 'bg-5e2176 text-white'}`}
          >
            Day 3
          </button>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 w-full mt-10 gap-10">
          {schedule.map((event) => (
            <div
              key={event.id}
              className={` flex-col bg-black-gradient-2 p-6 rounded-[20px] relative ${activeDay === event.id ? 'flex' : 'hidden xl:flex'}`}
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
