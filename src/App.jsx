
import './App.css'

function App() {

  return (
    <>
      <h1 className='text-xl'>REACT Core Concepts</h1>
      <Student name="Mansur" dept="CSE " tool="Mobile"></Student>
      <Student name="Dristy" dept="CSE" tool="Laptop"></Student>
      <Student name="Tahsin" dept="CSE" tool="Pc"></Student>




    </>
  )
}

function Student(props) {
  console.log(props)
  return (
    <div style={{
      border: '2px solid green',
      borderRadius: '10px',
      padding: '10px',
      margin: '20px'
    }}
    >
      <p>Name:{props.name}</p>
      <p>Dept:{props.dept}</p>
      <p>Device:{props.tool}</p>
    </div>
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
