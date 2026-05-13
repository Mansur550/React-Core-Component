
import './App.css'

function App() {

  return (
    <>
      <h1>RRACT + VITE</h1>
      <Person />
      <Sports />

    </>
  )
}

function Person() {
  const age = 30
  return (

    <p>
      I am a person. My age is {age}.
    </p>
  )
}

function Sports() {

  return (
    <div>
      <h1>Cricket</h1>
      <br />
      <p>Playing and winig </p>


    </div>
  )
}

export default App
