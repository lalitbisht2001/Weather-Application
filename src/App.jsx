import "./App";
import Header from "./component/Header";

function App() {
  return (
    <div>
      <Header />
    </div>
  )
}

export default App





// import { useEffect, useState } from "react";
// import "./App.css";
// const App = () => {
//   const [basket1, setBasket1] = useState(10);
//   const [basket2, setBasket2] = useState(10);
//   const [count, setCount] = useState(0);

//   const Right = () => {
//     if (basket2 > 0) {
//       setBasket1(basket1 + 1);
//       setBasket2(basket2 - 1);
//     }
//     else {
//       alert("Insufficient apple")
//     }

//   }


//   const Increment = () => {
//     // setCount((prev) => prev + 1);
//     // console.log(count);
//     // setCount((prev) => prev + 1);
//     // console.log(count);
//     // setCount((prev) => prev + 1);
//     // console.log(count);
//     setCount(count + 1);
//     console.log(count);
//   }


//   console.log("rendering...")
//   const Left = () => {
//     setBasket2(basket2 + 1);
//     setBasket1(basket1 - 1);
//   }

//   return (
//     <>
//       <div className="main">
//         <Basket direction={Right} basket={basket1}>
//           {
//             {
//               name: "Right",
//               number: "1",
//             }
//           }
//         </Basket>
//         <Basket direction={Left} basket={basket2}>
//           {
//             {
//               name: "Left",
//               number: "2",
//             }
//           }
//         </Basket>
//         <div>
//           {count}
//         </div>
//         <button onClick={Increment} >Increment</button>
//       </div>
//     </>
//   );
// }

// const Basket = ({ basket, direction, children }) => {
//   const { name, number } = children;
//   return (
//     <>
//       <div>
//         <p>
//           {basket}
//         </p>
//         <p>Basket {number}
//           {
//             basket == 0 ? "empty" : basket == 20 ? "Full" : ""
//           }
//         </p>
//         <button onClick={direction}> {name} </button>
//       </div>
//     </>
//   );
// }

// export default App;