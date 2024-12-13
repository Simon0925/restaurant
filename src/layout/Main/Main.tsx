import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Error from '../../pages/Error/Error'
import Menu from '../../pages/Menu/Menu';
import About from '../../pages/About/About';
import BookATable from '../../pages/BookATable/BookATable';
import Contact from '../../pages/Contact/Contact';
import Blog from '../../pages/Blog/Blog';


export default function Main () {
    return(
    <main className="h-dvh">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/reservation" element={<BookATable />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="*" element={<Error />} />
        </Routes>
    </main>
    )
}