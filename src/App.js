import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [data, setData, ] = useState([])
  // useEffect(() => {
  //   const url = "https://app.teacherjackonline.com/api/user/buyings/1"
  //   fetch(url).then(response => response.json()).then(json => {
  //     console.log(json)
  //     setData(json)
  //   }).catch(e => {
  //     console.log('e', e)
  //   })
  // })

  const postPutEvent = () => {
    const data = {
      email: 'admin@application.com',
      password: 'admin4application.com'
    }
  }
  const url = "https://app.teacherjackonline.com/api/login"
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type' : 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    body:JSON.stringify(data)
  }).then(response => {
    console.log('response', response)
  }).catch(e=> {
    console.log("e", e)
  })
  // const [data, setData, ] = useState([])
  // useEffect(() => {
  //   const url = "https://app.teacherjackonline.com/api/login"
  //   fetch(url, 
  //     {
  //       method: 'POST',
  //       headers:{
  //         'Content-Type': 'application/json',
  //         'Access-Control-Allow-Origin': '*'
  //       }
  //   }).then(response => response.json()).then(json => {
  //     console.log(json)
  //     setData(json)
  //   }).catch(e => {
  //     console.log('e', e)
  //   })
  // })

  // const [data, setData, ] = useState([])
  // useEffect(() => {
  //   const url = "https://app.teacherjackonline.com/api/user/buyings/65"
  //   fetch(url, {
  //     method: 'GET',
  //     headers:{
  //       'Content-Type': 'application/json',
  //       'Access-Control-Allow-Origin': '*',
  //       'Authorization': '262|xvIG9SGskt7mtR1DaZ8H82qiNCfOwO6D0yLbmJ5l'
  //     }
  //   }).then(response => response.json()).then(json => {
  //     console.log(json)
  //     setData(json)
  //   }).catch(e => {
  //     console.log('e', e)
  //   })
  // })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. I am learning now
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
