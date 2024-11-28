import React from 'react'
import "./mywork.css"
import My_Work from '../../assets/MyWork'
import art from '../../assets/art.png.png'
import icon from '../../assets/icon.png'

const MyWork = () => {
    return (
        <div id='work' className='mywork'>
            <div className='mywork-title'>
                <h1>My Latest Work</h1>
                <img src={art}/>
            </div>
            <div className='mywork-container'>
                {My_Work.map((My_Work, index) => {
                    return <div key={index} className='work-format'>
                        <h1>{My_Work.w_title}</h1>
                        <h2>{My_Work.w_desc}</h2>
                        <div className="work-readmore">
                            <p>Read More</p>
                            <img src={icon} />
                        </div>

                    </div>
                })}
            </div>

        </div>
    )
}

export default MyWork
