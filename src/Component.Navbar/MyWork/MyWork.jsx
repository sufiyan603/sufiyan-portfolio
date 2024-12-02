import React from 'react'
import "./mywork.css"
import My_Work from '../../assets/MyWork'
import art from '../../assets/art.png.png'
import icon from '../../assets/icon.png'
import { Link } from 'react-router-dom'
const MyWork = () => {
    return (
        <div id='work' className='mywork'>
            <div className='mywork-title'>
                <h1>My Latest Work</h1>
                <img src={art}/>
            </div>
            <div className='mywork-container'>
                {My_Work.map((My_Work, index) => {
                    return (
                    <Link to={My_Work.path} style={{textDecoration:"none", color:"white"}}><div key={index} className='work-format'>
                        <h1>{My_Work.w_title}</h1>
                        <h2 className={My_Work.w_desc === "Completed" ? "green-text" : ""}>
                        {My_Work.w_desc}
                        </h2>
                        <div className="work-readmore">
                            <p>Read More</p>
                            <img src={icon} />
                        </div>

                    </div></Link>)
                })}
            </div>

        </div>
    )
}

export default MyWork
