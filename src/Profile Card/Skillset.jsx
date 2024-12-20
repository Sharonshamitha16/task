import React from 'react'
import { ProfileParent } from './ProfileParent'

const Skillset = () => {
    const skills =[
        {skill:"HTML+CSS", emoji:"💪", color:"red"},
        {skill:"JavaScript", emoji:"💪", color:"blue"},
        {skill:"ReactJS", emoji:"💪", color:"green"},
        {skill:"ExpressJS", emoji:"💪", color:"cyan"},
    ]
    
    return (
        <div>
            {/* <ProfileParent skill="html+css" emoji="💪" color="blue" />
            <ProfileParent skill="JavaScript" emoji="💪" color="red" />
            <ProfileParent skill="ReactJs" emoji="💪" color="green" />
            <ProfileParent skill="ExpressJs" emoji="💪" color="yellow" /> */}
            <ProfileParent props ={skills}/>

        </div>
    )
}

export default Skillset