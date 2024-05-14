import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import myImg from '../assets/OPG-logo.jpg';
import mySVG from '../assets/Axsource.svg';
import myMaster from '../assets/McMa.svg';

const ExperiencePage = () => {
  return (
    <div className="flex flex-col items-center py-10">
      
      <div className="w-full max-w-5xl px-4">
        
      <h1 className='text-white text-3xl font-bold mb-8 text-center'>Education</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: 'transparent', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid rgba(255, 255, 255, 0.5)' }}
            date="2024 - present"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
           
          >
            <img src={myMaster} alt="Description" style={{ width: '100%', marginTop: '10px' }} />
            <h3 className="vertical-timeline-element-title">Creative Director</h3>
            <h4 className="vertical-timeline-element-subtitle">Miami, ON</h4>
            <p>Management, Team Leading</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
        
        <h1 className='text-white text-3xl font-bold mb-8 text-center'>Work Experience</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'transparent', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid rgba(255, 255, 255, 0.5)' }}
            date="2024 - present"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            
          >
            <img src={myImg} alt="Description" style={{ width: '100%', marginTop: '10px' }} />
            <h3 className="vertical-timeline-element-title">Creative Director</h3>
            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
            <p>Creative Direction, User Experience, Visual Design, Project Management, Team Leading</p>
          </VerticalTimelineElement>
          
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'transparent', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid rgba(255, 255, 255, 0.5)' }}
            date="2024 - present"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            
          >
            <img src={mySVG} alt="Description" style={{ width: '100%', marginTop: '10px' }} />
            <h3 className="vertical-timeline-element-title">Creative Director</h3>
            <h4 className="vertical-timeline-element-subtitle">Miami, ON</h4>
            <p>Management, Team Leading</p>
          </VerticalTimelineElement>
        </VerticalTimeline>





        
      </div>
    </div>
  );
}

export default ExperiencePage