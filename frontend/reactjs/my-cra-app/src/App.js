import logo from './logoSanber.png';
import './App.css';
import { CountClass } from './Clock-countdown/countdown';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <CountClass/>


        <img src={logo} className="App-logo" alt="logo" />
        <h1>THINGS TO DO</h1>
        <h4>During bootcamp in sanbercode</h4>
        <form method="post" action="google.com">
          <input id="cb" className="form_checkbox" type="checkbox" value=""/>
          <label for="cb">Belajar GIT & CLI</label>
          <br></br>
          <input id="cb" className="form_checkbox" type="checkbox" value=""/>
          <label for="cb">Belajar HTML & CSS</label>
          <br></br>
          <input id="cb" className="form_checkbox" type="checkbox" value=""/>
          <label for="cb">Belajar Javascript</label>
          <br></br>
          <input id="cb" className="form_checkbox" type="checkbox" value=""/>
          <label for="cb">Belajar ReactJS Dasar</label>
          <br></br>
          <input id="cb" className="form_checkbox" type="checkbox" value=""/>
          <label for="cb">Belajar ReactJS Advance</label>
          <br></br>
          <button>Send</button>
        </form>
      </header>
    </div>
  );
} 

export default App;
