import Navbar from './Componnet/Navbar';
import About from './Componnet/About';
import Bgprimary from './Componnet/bg-primary';
import Blog from './Componnet/Blog';
import Contact from './Componnet/Contact';
import Footer from './Componnet/Footer';
import Header from './Componnet/Header';
import Portfolio from './Componnet/Portfolio';
import Pricing from './Componnet/Pricing';
import Service from './Componnet/Service';
import Testimonial from './Componnet/Testmonial';
import './App.css'

const App=()=> {
  return (
    <>
     <div>
  {/* Page Navbar */}
  <Navbar/>
{/* End of Page Navbar */}

  {/* page header */}
  <Header/>
{/* end of page header */}
  
  {/* about section */}
  <About/>
 {/* end of about section */}
  
  {/* service section */}
  <Service/>
{/* end of service section */}
  
  {/* portfolio section */}
  <Portfolio/>
{/* end of portfolio section */}
  
  {/* pricing section */}
  <Pricing/>
 {/* end of pricing section */}
  
  {/* section */}
  <Bgprimary/>
 {/* end of section */}
  
  {/* testimonial section */}
  <Testimonial/>
 {/* end of testimonial section */}
  
  {/* blog section */}
  <Blog/>
 {/* end of blog section */}
  
  {/* contact section */}
  <Contact/>
{/* end of contact section */}
  
  {/* footer */}
  <Footer/>
{/* end of page footer */}
  
  {/* core  */}
  {/* bootstrap 3 affix */}
  {/* Meyawo js */}
</div>
    </>
  )
}

export default App;
