import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import myImg from '../assets/OPG-logo.jpg';
import mySVG from '../assets/Axsource.svg';
const ExperiencePage = () => {
  return (
    <div>

      <h1>Work Experience</h1>
      <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="2024 - present"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        // icon={<WorkIcon />}
      >

        <img src={myImg} alt="Description" style={{ width: '100%', marginTop: '10px' }} />
        <h3 className="vertical-timeline-element-title">Creative Director</h3>
        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
        <p>Creative Direction, User Experience, Visual Design, Project Management, Team Leading</p>
        
      </VerticalTimelineElement>
    
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="2024 - present"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        // icon={<WorkIcon />}
      >

        <img src={mySVG} alt="Description" style={{ width: '100%', marginTop: '10px' }} />
        <h3 className="vertical-timeline-element-title">Creative Director</h3>
        <h4 className="vertical-timeline-element-subtitle">Miami, ON</h4>
        <p>anagement, Team Leading</p>
        
      </VerticalTimelineElement>
    
    
    </VerticalTimeline>




    </div>
  )
}

export default ExperiencePage