import React from 'react';
import '../styleSheet/stylePages/About.css'

const About = () => {
    return (
        <div className='container'>
            <div className="intro">
                <div className="intro_item">
                    <h1 style={{textAlign: 'center', fontSize: '50px'}}>Заметки чтобы не забыть</h1>
                    <p style={{textAlign: 'center', fontSize: '30px', margin: '30px 0 0 0'}}>Используй приложение когда угодно и где угодно</p>
                </div>
            </div>
        </div>
    );
}

export default About;
