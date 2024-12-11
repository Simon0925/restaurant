import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Error from '../../pages/Error/Error'
import Menu from '../../pages/Menu/Menu';


export default function Main () {
    return(
    <main className="w-full h-full">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="*" element={<Error />} />
        </Routes>
    </main>
    )
}