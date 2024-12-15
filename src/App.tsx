import './App.css';
import Main from './layout/Main/Main';

export default function App() {
  return (
    <div className="bg-menu w-full bg-cover h-dvh fixed top-0 left-0">
      <div className="absolute w-full h-full bg-neutral-950 bg-opacity-85 z-0"></div>
          <Main />
      <div id="modal-root"></div>
    </div>
  );
}