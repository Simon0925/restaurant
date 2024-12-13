import './App.css';
import Header from './layout/Header/Header';
import Main from './layout/Main/Main';

export default function App() {
  return (
    <div className="bg-menu w-full bg-cover h-dvh fixed top-0 left-0">
      <div className="absolute w-full h-full bg-neutral-950 bg-opacity-85 z-0"></div>
      <div className="relative z-10 w-full block xl:flex xl:flex-row overflow-y-scroll justify-between h-dvh">
        <div className="w-full p-3 xl:p-6">
          <Header />
        </div>
          <Main />
      </div>
      <div id="modal-root"></div>
    </div>
  );
}
