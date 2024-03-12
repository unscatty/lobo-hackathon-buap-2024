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
                {event.sessions.map((session, id) => (
                  <VerticalTimelineElement
                    key={session.id}
                    className="vertical-timeline-element--work !my-5"
                    // contentStyle={{
                    //     background: id === 0 ? "#000" : "#aaa",
                    //     color: id === 0 ? "#fff" : "#aaa",
                    // }}
                    contentArrowStyle={{
                      borderRight: '7px solid  #fff',
                    }}
                    iconStyle={{
                      // background: id === 0 ? "#000" : "#fff",
                      // color: "#fff",
                      background: '#000',
                      color: '#fff',
                    }}
                    date={session.time}
                    // dateClassName="!hidden"
                    // icon={<WorkIcon />}
                  >
                    {/* text-${
												id === 0 ? "white" : "black" */}
                    <p
                      className={`text-lg !m-0 font-semibold text-black 
											}`}
                    >
                      ????
                    </p>
                    <p className="text-gray-400 !mt-0">????</p>
                  </VerticalTimelineElement>
                ))}
              </VerticalTimeline>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Schedule
