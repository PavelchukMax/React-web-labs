import logo from './logo.svg';
import './App.css';
import Header from './components/head.js'
import Body from './components/body.js'
import Footer from './components/footer.js'
const tovars =['Iphone15','Iphone14', 'Airpods','Samsung S21', 'Pixel 7 pro']

function App() {
 
  return (
    <div className ="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Header />
      <Body  tovar={tovars}/>
      <Footer />
    </div>
  )
}

export default App;
