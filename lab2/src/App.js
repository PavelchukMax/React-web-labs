import logo from './logo.svg';
import './App.css';
import Header from './components/head.js'
import Body from './components/body.js'
import Footer from './components/footer.js'
const tovars =[{id:1, value:'Iphone15'}, {id: 2, value:'Iphone14'},{id:3, value:'Airpods'},{id: 4, value: 'Samsung S21'}, { id: 5, value:'Pixel 7 pro'}]

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
