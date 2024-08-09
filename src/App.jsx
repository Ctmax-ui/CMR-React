import {Routes, Route} from 'react-router-dom'
import Main from './components/main/Main'

const App = () => {
  return (<>
  <Routes>
        <Route path="/" element={<Main />} />
        <Route path="movies" element={'<Movies />'} />
        <Route path="movies/:movieId" element={'ggg'} />


      </Routes>
  </>)
}

export default App