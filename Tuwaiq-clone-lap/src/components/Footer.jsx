import React from 'react'

function Footer() {
  return (
    <>
    <div className='Footer'>
        <img src="https://tuwaiq.edu.sa/img/logos/logo.svg" />

        <div className='Footer-section'>
            <a href='https://bootcamp.sa/forms/wdVS11qexZ/apply'> شارك كمدرب </a>
            <a href='https://tuwaiq.edu.sa/about'>حول الأكاديمية</a>
        </div>

        <div className='Footer-section'>
            <a href='https://tuwaiq.edu.sa/terms'>الشروط والأحكام</a>
            <a href='https://tuwaiq.edu.sa/privacy'>سياسة الخصوصية</a>
        </div>

        <div className='Footer-section'>
            <div className='Footer-icon-section'>
             <img className='Footer-icon' src='https://tuwaiq.edu.sa/icons/linkedin-icon.svg'/>
             <img className='Footer-icon' src='https://tuwaiq.edu.sa/icons/snapchat-icon.svg'/>
             <img className='Footer-icon' src='https://tuwaiq.edu.sa/icons/youtube-icon.svg'/>
             <img className='Footer-icon' src='https://tuwaiq.edu.sa/icons/twitter-icon.svg'/>
                {/* <img className='Footer-icon' id="icon-D" src='https://tuwaiq.edu.sa/icons/discord-icon.svg'/> */}
            </div>
            <a >@TuwaiqAcademy </a>
        </div>

        <div >
            <img src='https://tuwaiq.edu.sa/img/logos/logos2.svg'/>
        </div>
    </div>
    <div className='Fotter-section2'>
            <h6>جميع الحقوق محفوظة لأكاديمية طويق  2023 </h6>
        </div>
    </>
  )
}

export default Footer