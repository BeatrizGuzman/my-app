// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


// import React, { Component } from 'react';

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <h1>COMODYET</h1>
//         <h2>APP DE NOTICIAS</h2>
//       </div>
//     );
//   }
// }
// export default App;


import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"

const App = () => {

    return (
        <>
            <Header></Header> 
            <Main></Main>
            <Footer></Footer>
        </>
    )
}

export default App