import Events from './Components/Events';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <div className="App bg-gray-100 lg:h-screen lg:overflow-hidden">
      <div className='w-full flex justify-center items-center flex-col'>
        <div className='w-full text-white'>
          <Navbar />
        </div>
        <div className='flex justify-center w-full text-gray-800'>
          <div className='lg:flex hidden w-2/12'>
            <Sidebar />
          </div>
          <div className='lg:w-10/12 w-full lg:p-0 p-3'>
            <Events />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
