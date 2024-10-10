import Navbar from './Component/Navbar';
import Hero from './Component/Hero';
import Cards from './Component/Cards';
import Contact from './Component/Contact';
import Footer from './Component/Footer';







function App() {
  return (
    <>
 <Navbar />
 <Hero />
 <div className='flex' > 
<Cards />
<Cards />
<Cards />
<Cards />
 </div>
 <div className='flex' > 
<Cards />
<Cards />
<Cards />
<Cards />
 </div>
 <Contact />
 <Footer/>
 
    </> 
  );}

export default App;
