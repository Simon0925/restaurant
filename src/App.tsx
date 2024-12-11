import './App.css';
import Header from './layout/Header/Header';
import Main from './layout/Main/Main';

export default function App() {
  return (
    <div className="bg-menu w-full bg-cover h-screen fixed top-0 left-0">
      <div className="absolute w-full h-full bg-black bg-opacity-70 z-0"></div>
      <div className="relative z-10 w-full flex justify-between h-screen">
        <div className="w-full h-full p-6">
          <Header />
        </div>
        <Main />
      </div>
    </div>
  );
}
