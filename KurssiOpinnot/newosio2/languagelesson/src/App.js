import React, { useState, useEffect } from 'react'
import axios from 'axios'

  //App


const App = () => {
  const [ countries, setcountriess] = useState([
  ])
  const [ filter, setFiltering ] = useState('')
  
  const [ countriesShow, setCountriesShow] = useState([])

  const hook = () => {
    console.log('effect')
    axios
    .get('https://restcountries.eu/rest/v2/all')
    .then(response => {
      console.log('promise fulfilled')
      setcountriess(response.data)
    })
  }
  useEffect(hook, [])

// Lets find out how many countires we show


const NumberOfCountries = ({countries}) => {
if (countries.length < 10 && countries.length > 1) {
    {console.log("done2")}
      return (
          <LessThanTen ltt = {countries }/>
      )} else if (countries.length === 1)  {
        {console.log("done2")}
        return (
          <OnlyOne oo = {countries[0]} />
        
        )} else {
        console.log("done3")
          return ( 
           
            <p>Be more spesific</p>
        )
          
      }
  }

    const LessThanTen = ({ltt}) => {
      return (
        <div>
      <h1>{ltt.name}</h1>
      <ul>
        {ltt.map(n => 
        <li key = {n.name}>{n.name}</li>)}
        </ul>
      </div>
      )
    }
    const OnlyOne = ({oo}) => {
      return (
        <div>
            <h1>{oo.name}</h1>
            <p>capital : {oo.capital}</p>
            <p>population : {oo.population}</p>
            <h2>Languages</h2>
            <ul>{oo.languages.map(n => <li key={n.name}>{n.name}</li>)}
           </ul>
            <img src={oo.flag} alt='flag' style ={{width : '200px'}}/>
          </div> 
        )
    }

    
      const filtering = (event) => {
        
        setFiltering(event.target.value)
        console.log(countriesShow)
        setCountriesShow
        (countries.filter
          (countries => countries.name.toLowerCase()
          .includes(event.target.value.toLowerCase()))
        )
      }
      return (
      <div>
        <form>
               
        input to show with: 
        <input
        value={filter}
        onChange={filtering} />
         
        </form>
       <NumberOfCountries countries = {countriesShow} />

              
     </div>
      )
      
    }
    export default App;