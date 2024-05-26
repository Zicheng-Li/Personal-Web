import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import myImg from '../assets/OPG-logo.jpg';
import mySVG from '../assets/Axsource.svg';
import myMaster from '../assets/McMa.svg';
import '../App.css';

const ExperiencePage = () => {
  return (
    <div className="flex flex-col items-center py-10 mt-5">
      <div className="w-full max-w-4xl px-4 ">
        <h1 className='text-white text-3xl font-bold mb-10 text-center'>Education</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: 'rgb(2 132 199)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid rgba(255, 255, 255, 0.5)' }}
            date="September 2021 - present"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', width: '50px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute', left: 'calc(50% + 5px)', top: '0' }}
            icon={<i className="fas fa-school" style={{ fontSize: '25px' }} />}
          >
            <img src={myMaster} alt="Description" style={{ width: '100%', marginTop: '10px' }} />
            <h3  className="vertical-timeline-element-title text-xl">Bachelor of Applied Science, Computer Science, Co-op</h3>
            <h4 className="vertical-timeline-element-subtitle opacity-80">Hamilton, Canada</h4>
            <p className='opacity-85' style={{ color: 'white',fontSize: '16px',lineHeight: '1.25rem' }}>Computer science courses include: data structures and algorithms, design patterns, databases, cryptography, and computer architecture, with a maintained GPA of 3.8. </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
        <div className='flex justify-center'>
          <i className="fa-solid fa-angles-down mt-10 animate-bounce text-white"></i>
          </div>
    

      </div>
      <div className="w-full max-w-4xl px-4 mt-[20vh]">
        <h1 className='text-white text-3xl font-bold mb-10 text-center'>Work Experience</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(2 132 199)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid rgba(255, 255, 255, 0.5)' }}
            date="January 2024 - present"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', width: '50px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute', left: 'calc(50% + 5px)', top: '0' }}
            icon={<i className="fas fa-briefcase" style={{ fontSize: '25px' }} />}
          >
            <img src={myImg} alt="Description" style={{ width: '100%', marginTop: '10px' }} />
            <h3 className="vertical-timeline-element-title text-2xl">Software Engineer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle opacity-85">Bowmanville, Canada</h4>
            <p style={{ color: 'white',fontSize: '16px',lineHeight: '1.25rem' }} className='opacity-85'>In January 2024, I began an eight-month internship at Ontario Power Generation as a Software Engineer Intern. I utilized my full-stack development skills to create an operations dashboard using Angular and .NET, significantly enhancing the nuclear operation team's efficiency in monitoring power station operations. This dashboard reduced data retrieval times from 10 minutes to instant and achieved cost savings of over $1M. </p>
            <p style={{ color: 'white',fontSize: '16px',lineHeight: '1.25rem' }} className='opacity-85'>Additionally, I automated a manual 2-hour equipment check process down to 1 minute using Python, pandas, and openpyxl, boosting operational efficiency by 120 times through a user-friendly Tkinter interface.</p>
          </VerticalTimelineElement>
          
          <VerticalTimelineElement
            className="vertical-timeline-element--work vertical-timeline-element--last"
            contentStyle={{ background: 'rgb(2 132 199)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid rgba(255, 255, 255, 0.5)' }}
            date="July 2023 - August 2023"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', width: '50px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute', left: 'calc(50% + 5px)', top: '0' }}
            icon={<i className="fas fa-briefcase" style={{ fontSize: '25px' }} />}
          >
            <img src={mySVG} alt="Description" style={{ width: '100%', marginTop: '10px' }} />
            <h3 className="vertical-timeline-element-title text-2xl">Software Engineer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle opacity-85">Oakville, Canada</h4>
            <p style={{ color: 'white',fontSize: '16px',lineHeight: '1.25rem' }} className='opacity-85'>In my initial industry experience at AXSource within the newly formed AI team, I designed and implemented a multi-platform chatbot using Power Virtual Agent, which integrates seamlessly with Microsoft Teams and web platforms. I utilized Power Automate to automate the transfer of Invoice, New Customer, and Purchase Order Entry data to Dynamics 365, significantly enhancing customer data processing efficiency.</p>
            <p style={{ color: 'white',fontSize: '16px',lineHeight: '1.25rem' }} className='opacity-85'>Additionally, I developed a mobile application using Power Apps that integrates Azure’s Computer Vision API for image detection, streamlining the asset recognition process. My efforts in these projects led to earning two Microsoft certifications: Azure AI Engineer Associate and Dynamics 365 Fundamentals (ERP).</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default ExperiencePage