
import AOS from 'aos';
import 'aos/dist/aos.css';
import bgImage from './assets/bg.jpg';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes';

AOS.init();

function App() {

  return (
    <div className="min-h-screen overflow-hidden"
    style={{
      backgroundImage: `url(${bgImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }}>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
