import logo from './logo.svg';
import './App.css';
import Header from './components/head.js'
import Body from './components/body.js'
import Footer from './components/footer.js'
function App() {
  
  return (
    <div className ="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

export default App;
