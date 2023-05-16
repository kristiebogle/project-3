import './App.css';
import Broadway from './components/Broadway.js'
import broadwayArray from './broadway.json'


const App = () => {
  return (
        <div>
        <h1> Top 25 Highest Grossing Broadway Shows</h1>
        <main>
          {broadwayArray.broadway.map((broadway) => (
            <Broadway broadway={broadway} />
          ))}
        </main>
      </div>
  );
}

export default App;
