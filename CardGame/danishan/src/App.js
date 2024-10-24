import './App.css';
import Card from './components/jsx/Card';

function App() {
  return (
    <div className="App">
      <Card code='DS' setResult={(value) => { console.log(value) }} />
      <Card code='CS' setResult={(value) => { console.log(value) }} />
      <Card code='SS' setResult={(value) => { console.log(value) }} />
      <Card code='HS' setResult={(value) => { console.log(value) }} />
    </div>
  );
}

export default App;
