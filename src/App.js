import Listing from './components/Listing';
import './App.css';
const data = require('./data/data.json');

function App() {
  return (
    <Listing items={data}/>
  );
}

export default App;
