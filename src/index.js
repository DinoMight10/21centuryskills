import React from "react";
import ReactDOM from "react-dom";
import "./index.css"

const c1="criticalThinking"
const img1="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.monash.edu%2Flearnhq%2Fenhance-your-thinking%2Fcritical-thinking%2Fwhat-is-critical-thinking&psig=AOvVaw37wWxgTG7QV0pZnXAAPOw4&ust=1667467015517000&source=images&cd=vfe&ved=0CAkQjRxqFwoTCLD93-yUj_sCFQAAAAAdAAAAABAD"
const cd1="The objective analysis and evaluation of an issue in order to form a judgement."

const c2="Creativity"
const img2="https://www.google.com/url?sa=i&url=https%3A%2F%2Fhospitalityinsights.ehl.edu%2Fbusiness-creativity&psig=AOvVaw2RWjE4GwoB0ki_45c35-9z&ust=1667467253744000&source=images&cd=vfe&ved=0CAkQjRxqFwoTCJDsn-GVj_sCFQAAAAAdAAAAABAD"
const cd2="The use of imagination or original ideas to create something; inventiveness."

const c3="Collaboration"
const im3g="https://www.google.com/url?sa=i&url=https%3A%2F%2Fseapointcenter.com%2Fwhat-is-collaboration%2F&psig=AOvVaw0c5cCsyYixOOw3xam15Izk&ust=1667467294863000&source=images&cd=vfe&ved=0CAkQjRxqFwoTCJi8hvOVj_sCFQAAAAAdAAAAABAD"
const cd3="The action of working with someone to produce something."

const c4="Communication"
const img4="https://www.google.com/url?sa=i&url=https%3A%2F%2Flattice.com%2Flibrary%2Fhow-to-create-a-culture-that-encourages-communicati&psig=AOvVaw02AqLiJd77Lf5yqX6l3TSu&ust=1667467366186000&source=images&cd=vfe&ved=0CAkQjRxqFwoTCMjJvZWWj_sCFQAAAAAdAAAAABAD"
const cd4="The imparting or exchanging of information by speaking, writing, or using some other medium."

ReactDOM.render(
  <>
  <h1>{c1}</h1>
  <hr/>
  <img src={img1} alt="Critical Thinking"/>
  <p>{cd1}</p>
  <ul>
    <li>Information and Discovery</li>
    <li>Interpretation and Analysis</li>
    <li>Reasoning</li>
    <li>Constructing Arguements</li>
  </ul><br/><br/><br/>

  <h1>{c2}</h1>
  <hr/>
  <img src={img2} alt="Creativity"/>
  <p>{cd2}</p>
  <ul>
    <li>Idea Generation</li>
    <li>Idea Design and Refinement</li>
    <li>Openness and Courage to Explore</li>
    <li>Work Creativity with Others</li>
  </ul><br/><br/><br/>

  <h1>{c3}</h1>
  <hr/>
  <img src={img3} alt="Collaboration"/>
  <p>{cd3}</p>
  <ul>
    <li>Leadership and Initiative</li>
    <li>Cooperation</li>
    <li>Flexibility</li>
    <li>Responsibility and Productivity</li>
  </ul><br/><br/><br/>

  <h1>{c4}</h1>
  <hr/>
  <img src={img4} alt="Comunication"/>
  <p>{cd4}</p>
  <ul>
    <li>Effective Listening</li>
    <li>Delivering Oral Presentations</li>
    <li>Communicating Using Digital Media</li>
    <li>Engaging in Conversations and Discussions</li>
  </ul><br/><br/><br/>
  </>, document.getElementById("root")
);