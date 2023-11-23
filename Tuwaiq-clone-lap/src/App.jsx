import CardContainer from './components/CardContainer'
import './App.css'
import ShowMoreBtn from './components/ShowMoreBtn'
function App() {
const showMore = "عرض المزيد"

  return (
    <>
     <CardContainer></CardContainer>
     <div className='moreBtn-container'>
     <ShowMoreBtn>{showMore}</ShowMoreBtn>
     </div>
     
    </>
  )
}

export default App
