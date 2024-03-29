import React from 'react';
import './Components.css';

function AboutMe() {
    return (
        <div className='about-me'>
            <h1>ABOUT ME</h1>
            <div id='about-me-container'>
                <div id="left">
                    <p>I started my programming journey at
                        <a href="https://teknikhogskolan.se/utbildningar/net-utvecklare/"> Teknikhögskolan</a> in
                        august 2021. I have always had an interest for tech and how
                        things are working, <i>how does this thing work like the
                            way it does?</i> I love new learnings and to challenge myself.&ensp;
                        When it comes to my work history I have always come to an end
                        where I feel a little bit trapped, like I know how everything
                        works here. Ofcourse there are always things to improve but there
                        are no longer a challenge.&ensp;Therefore, I think a career as a
                        programmer is the way to go for me where everything is constantly
                        moving forward.
                        <br></br>
                        <br></br>
                        For now I think the frontend part is the most fun to work with.
                    </p>
                </div>
                <div id="right">
                    <h2>Languages</h2>
                    <ul>
                        <p>Swedish</p>
                        <div className='lang-background'>
                            <li className="lang swe">100%&emsp;</li>
                        </div>
                        <p>English</p>
                        <div className='lang-background'>
                            <li className="lang eng">80%&emsp;</li>
                        </div>
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default AboutMe;