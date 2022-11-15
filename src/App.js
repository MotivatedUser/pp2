import logo from './logo.svg';
import './App.css';
import InspectionForm from './features/InspectionForm';
import ScheduleForm from './features/ScheduleForm';
import ContactForm from './features/ContactForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <InspectionForm />
        <ScheduleForm />
        <ContactForm />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
