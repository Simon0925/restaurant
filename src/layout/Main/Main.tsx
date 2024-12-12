import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Error from '../../pages/Error/Error'
import Menu from '../../pages/Menu/Menu';
import About from '../../pages/About/About';
import BookATable from '../../pages/BookATable/BookATable';


export default function Main () {
    return(
    <main className="w-full h-dvh">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/book" element={<BookATable />} />
            <Route path="*" element={<Error />} />
        </Routes>
    </main>
    )
}