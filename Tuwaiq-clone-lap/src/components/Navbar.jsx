import React from 'react'

function Navbar() {
  return (
    <div>
  <nav className="nav navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
      <a className="navbar-brand" href="#">
      <img src="https://tuwaiq.edu.sa/img/logos/logo.svg" alt="Logo" width="100" height="50" className="d-inline-block align-text-top"/>
      </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className=" collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">الرئيسية</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">المعسكرات والبرامج</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">حول الأكاديمية</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#">الأكاديميات التابعة</a>
            </li>

            <li className="nav-item">
              <a className="nav-link " href="#">مركز الإختبارات</a>
            </li>

            {/* <li className="nav-item">
              <a className="nav-link " href="#">تسجيل الدخول</a>
            </li> */}

          </ul>

          <a className="nav-link " href="#">تسجيل الدخول</a>

        </div>
      </div>
    </nav>
    

    </div>
  )
}

export default Navbar