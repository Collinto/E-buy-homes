import Header from "./components/header/Header.jsx";
import './App.css'
import Section from "./components/section/Section.jsx";
import Footer from "./components/footer/Footer.jsx";
import AllProperties from "./components/AllProperties/AllProperties.jsx";

function App() {
  return (
    <div className="app">
      <Header/>
      <Section/>
      <AllProperties />
      <Footer/>
    </div>
  );
}

export default App;
