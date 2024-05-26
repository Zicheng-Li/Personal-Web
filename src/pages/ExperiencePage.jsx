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
            date="2021 - present"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', width: '50px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute', left: 'calc(50% + 5px)', top: '0' }}
            icon={<i className="fas fa-school" style={{ fontSize: '25px' }} />}
          >
            <img src={myMaster} alt="Description" style={{ width: '100%', marginTop: '10px' }} />
            <h3 className="vertical-timeline-element-title">Bachelor of Applied Science (BASc), Computer Science, Co-op</h3>
            <h4 className="vertical-timeline-element-subtitle">Sep 2021 - Apr 2026</h4>
            <p>GPA of 3.8 </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
        <div className='flex justify-center'>
          <i className="fa-solid fa-angles-down mt-20 animate-bounce text-white"></i>
          </div>
    

      </div>
      <div className="w-full max-w-4xl px-4 mt-[20vh]">
        <h1 className='text-white text-3xl font-bold mb-10 text-center'>Work Experience</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(2 132 199)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid rgba(255, 255, 255, 0.5)' }}
            date="2024 - present"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', width: '50px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute', left: 'calc(50% + 5px)', top: '0' }}
            icon={<i className="fas fa-briefcase" style={{ fontSize: '25px' }} />}
          >
            <img src={myImg} alt="Description" style={{ width: '100%', marginTop: '10px' }} />
            <h3 className="vertical-timeline-element-title">Software Engineer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Bowmanville, Canada</h4>
            <p>Developed a full-stack web application using Angular and .NET, revolutionizing the nuclear operation team’s dashboard, enhanced data visualization and access for power generation and crew metrics, reduc- ing retrieval times from 10 minutes to instant. Significantly improved operational efficiency and achieved cost savings of over $1M.</p>
            <p>Automated a manual 2-hour equipment check process to just 1 minute using Python, pandas, and openpyxl for data processing, achieving a 120-fold increase in operational efficiency with a user-friendly Tkinter interface.</p>
          </VerticalTimelineElement>
          
          <VerticalTimelineElement
            className="vertical-timeline-element--work vertical-timeline-element--last"
            contentStyle={{ background: 'rgb(2 132 199)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid rgba(255, 255, 255, 0.5)' }}
            date="2023 - 2023"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', width: '50px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute', left: 'calc(50% + 5px)', top: '0' }}
            icon={<i className="fas fa-briefcase" style={{ fontSize: '25px' }} />}
          >
            <img src={mySVG} alt="Description" style={{ width: '100%', marginTop: '10px' }} />
            <h3 className="vertical-timeline-element-title">Software Engineer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Oakville, Canada</h4>
            <p>Designed and implemented a multi-platform chatbot using Power Virtual Agent, seamlessly integrat- ing with Microsoft Teams and web platforms; utilized Power Automate for business logic to automate the transfer of Invoice, New Customer, and Purchase Order Entry data to D365, enhancing customer data processing efficiency.</p>
            <p>Developed a mobile application using Power Apps, enabling users to capture images of items; inte- grated Azure’s Computer Vision API for image detection, streamlining the asset recognition process.</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default ExperiencePage