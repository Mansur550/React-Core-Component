
import './App.css'
// import './Components/ToDo.jsx'
import ToDo from './Components/ToDo'

function App() {

  return (
    <>
      <h1 className='text-xl'>REACT Core Concepts</h1>
      {/* <Student name="Mansur" dept="CSE " tool="Mobile"></Student>
      <Student name="Dristy" dept="CSE" tool="Laptop"></Student>
      <Student name="Tahsin" dept="CSE" tool="Pc"></Student>

      <Player name="CR7" goal="960"></Player>
      <Player name="Messi" goal="760"></Player>
      <Player name="Naymer" goal="460"></Player> */}


      <ToDo task= "Learn React"></ToDo>

    </>
  )
}

// function Player({name, goal}) {
//   return (
//     <div style={{
//       border: '2px solid red',
//       borderRadius: '10px',
//       padding: '10px',
//       margin: '20px',
//       marginTop: "20px"
//     }}
//     >
//       <p>Name:{name}</p>
//       <p>Goal:{goal}</p>

//     </div>
//   )
// }

// function Student(props) {
//   console.log(props)
//   return (
//     <div style={{
//       border: '2px solid green',
//       borderRadius: '10px',
//       padding: '10px',
//       margin: '20px'
//     }}
//     >
//       <p>Name:{props.name}</p>
//       <p>Dept:{props.dept}</p>
//       <p>Device:{props.tool}</p>
//     </div>
//   )
// }


// function Person() {
//   const age = 30
//   return (

//     <p>
//       I am a person. My age is {age}.
//     </p>
//   )
// }

// function Sports() {

//   return (
//     <div>
//       <h1>Cricket</h1>
//       <br />
//       <p>Playing and winig </p>


//     </div>
//   )
// }

export default App
