import './App.css';
import imagename from './logoYoutube.png'
import Form from './form/form.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={imagename} className="App-logo" alt="logo" />
        <Form/>
      </header>
    </div>
  );
}

export default App;
