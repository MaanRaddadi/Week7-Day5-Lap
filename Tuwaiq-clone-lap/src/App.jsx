import CardContainer from './components/CardContainer'
import './App.css'

import Registration from './components/Registration'
import Footer from './components/footer'
import Navbar from './components/Navbar'

import ShowMoreBtn from './components/ShowMoreBtn'

function App() {
const showMore = "عرض المزيد"

  return (
    <>

    <Navbar/>
     <CardContainer></CardContainer>
     
     <div className='moreBtn-container'>
     <ShowMoreBtn btnText={showMore}></ShowMoreBtn>
     </div>
     <Registration/>
     <Footer/>


  
     

    </>
  )
}

export default App
