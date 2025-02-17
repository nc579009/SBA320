//import { useState } from 'react'
import './App.css'
import BeerCard from './components/BeerCard'

function App() {

  return (
    <div>
      {beerNumber === 1 && <BeerCard beer={{ name: 'Pilsner', description: 'A light, golden beer with a mild flavor and a clean finish.', url: 'https://www.beeradvocate.com/im/beers/1.jpg' }} />}
    </div>
  )
}


export default App
