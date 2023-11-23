import React from 'react'

function Registration() {
  return (
    <div className='Registration'>
      <h1>خطوات التسجيل</h1>
      <div className='Registration-section' >

        <div className='Registration-steps'>
          <img src="./src/assets/icon1.png"/>
          <h5>الانضمام<br></br> للمنصــة</h5>
        </div>

        <div className="img-">
          <img src="https://tuwaiq.edu.sa/img/horizontal_line.svg" />
        </div>

        <div className='Registration-steps'>
        <img src='./src/assets/icon2.png'/>
          <h5>التــســـجيــل في <br></br>المعسكر أو البرنامج</h5>
        </div>

        <div className="img-">
          <img src="https://tuwaiq.edu.sa/img/horizontal_line.svg" />
        </div>

        <div className='Registration-steps'>
        <img src='./src/assets/icon3.png'/>
          <h5>انتظار رسالة<br></br> القـــبــول</h5>
        </div>

      </div>


    </div>
  )
}

export default Registration