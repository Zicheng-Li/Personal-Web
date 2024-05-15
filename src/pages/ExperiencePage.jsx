import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import myImg from '../assets/OPG-logo.jpg';
import mySVG from '../assets/Axsource.svg';
import myMaster from '../assets/McMa.svg';
import '../App.css';

const ExperiencePage = () => {
  return (
    <div className="flex flex-col items-center py-10 mt-8">
      <div className="w-full max-w-4xl px-4">
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
            <h3 className="vertical-timeline-element-title">Creative Director</h3>
            <h4 className="vertical-timeline-element-subtitle">Miami, ON</h4>
            <p>Management, Team Leading</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
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
            <h3 className="vertical-timeline-element-title">Creative Director</h3>
            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
            <p>Creative Direction, User Experience, Visual Design, Project Management, Team Leading</p>
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