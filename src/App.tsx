import {Route, Routes} from "react-router-dom";
import {ProductsPage, AboutPage} from "./pages";
import {Navigation} from "./components";

function App() {
    return (
        <>
            <Navigation/>
            <Routes>
                <Route path='/' element={<ProductsPage/>}/>
                <Route path='/about' element={<AboutPage/>}/>
            </Routes>
        </>
    )
}

export default App;
