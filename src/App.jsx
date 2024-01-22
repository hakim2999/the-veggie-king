import './App.css'
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Land from './components/Land/Land.jsx';
import Contact from './components/Contact/Contact.jsx';
import About from './components/About/About.jsx';
import Gallery from './components/Gallery/Gallery.jsx';
import Menu from './components/Menu/Menu.jsx';
function App() {

  return (
    <>
    <div>
      <Header/>
      <Land/>
      <About/>
      <Menu/>
      <Gallery/>
      <Contact/>
      <Footer/>
    </div>
      

    </>
  )
}

export default App
