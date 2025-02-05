import { useState } from 'react'

import Sidebar from './assets/Component/Sidebar'
import Header from './assets/Component/Header'
import Content from './assets/Component/Content'
import Cards from './assets/Component/Cards'
import Charts from './assets/Component/Charts'
import Project from './assets/Component/Project'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='border-2 border-black flex '>
    <Sidebar/>
     <div className="flex-grow h-full "><Header/>
     <Content/>
    <Cards/>
    <Charts/>
    <Project/>

     </div>
    
    </div>
    
    </>
  )
}

export default App
