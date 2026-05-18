
import './App.css'
// import './Components/ToDo.jsx'
// import ToDo from './Components/ToDo'
import Actor from './Components/actor'
import Singers from './Components/singers'
import Library from './Components/library'


// const actors =["Mansur", "Dristy", "Tahsin", "Naymer", "Messi", "CR7"]




function App() {
  const singers = [
    { id: 1, name: "Arijit Singh", age: 40 },
    { id: 2, name: "Atif Aslam", age: 50 },
    { id: 3, name: "Warfaz", age: 40 },
    { id: 4, name: "Balam", age: 38 },
  ]

  const books = [
    { id: 1, name: "physics", price: "199" },
    { id: 2, name: "Math", price: "210" },
    { id: 3, name: "Biology", price: "220" },
    { id: 4, name: "chemistry", price: "240" },
  ]
  return (
    <>

      <Library books={books}></Library>

      <h1 className='text-xl'>REACT Core Concepts</h1>

      {/* {
        actors.map(actor =><Actor actor={actor} ></Actor>) // map is used to loop through the array and return a new array of components
      } */}

      {
        singers.map(singer => <Singers key={singer.id} siinger={singer}></Singers>)
      }



      {/* <Student name="Mansur" dept="CSE " tool="Mobile"></Student>
      <Student name="Dristy" dept="CSE" tool="Laptop"></Student>
      <Student name="Tahsin" dept="CSE" tool="Pc"></Student>

      <Player name="CR7" goal="960"></Player>
      <Player name="Messi" goal="760"></Player>
      <Player name="Naymer" goal="460"></Player> */}


      {/* <ToDo task= "Learn React" isDone={true}></ToDo>
      <ToDo task= "Reviice Js" isDone={true}></ToDo>
      <ToDo task= "Take a shower" isDone={false}></ToDo>
      <ToDo task= "Eat Now" isDone={false}></ToDo> */}

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
