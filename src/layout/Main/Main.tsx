import { Route, Routes, useLocation } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Error from '../../pages/Error/Error';
import Menu from '../../pages/Menu/Menu';
import About from '../../pages/About/About';
import BookATable from '../../pages/BookATable/BookATable';
import Contact from '../../pages/Contact/Contact';
import Blog from '../../pages/Blog/Blog';
import Banner from '../../components/Banner/Banner';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styles from './Main.module.scss';
import { useEffect, useState } from 'react';
import { useRef } from 'react';

export default function Main() {
    const location = useLocation();
    const [currentPath, setCurrentPath] = useState('');
    const nodeRef = useRef(null); 

    useEffect(() => {
        if (currentPath !== location.pathname && !location.hash) {
            setCurrentPath(location.pathname);
        }
    }, [location]);

    return (
        <main className="h-dvh">
            <TransitionGroup component={null}>
                <CSSTransition
                    key={currentPath}
                    timeout={100}
                    nodeRef={nodeRef} 
                    classNames={{
                        enter: styles['fade-enter'],
                        enterActive: styles['fade-enter-active'],
                        exit: styles['fade-exit'],
                        exitActive: styles['fade-exit-active'],
                    }}
                >
                    <div ref={nodeRef} className="relative z-10 w-full block xl:flex xl:flex-row overflow-y-scroll justify-between h-dvh">
                        <div className={styles.loading}><div></div></div>
                        <Banner param={location.pathname} />
                        <Routes location={location}>
                            <Route path="/" element={<Home />} />
                            <Route path="/menu" element={<Menu />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/reservation" element={<BookATable />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/blog" element={<Blog />} />
                            <Route path="*" element={<Error />} />
                        </Routes>
                    </div>
                </CSSTransition>
            </TransitionGroup>
        </main>
    );
}
