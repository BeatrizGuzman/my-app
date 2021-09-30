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

//MAP
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => number * 2);
console.log(doubled);


