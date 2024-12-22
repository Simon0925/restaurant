import { useLocation } from 'react-router-dom';
import './App.css';
import Main from './layout/Main/Main';


export default function App() {

  const location = useLocation()



  const checkLocation = location.pathname === '/about' ||
  location.pathname === '/' || location.pathname === '';


  return (
    <div className="bg-menu w-full bg-cover h-dvh fixed top-0 left-0">
      <div className={`absolute w-full h-full bg-neutral-950 ${checkLocation  ? 'bg-opacity-1' :'bg-opacity-90'} z-0`}></div>
          <Main />
      <div id="modal-root"></div>
    </div>
  );
}