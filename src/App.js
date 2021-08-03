import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import Router from './router';

function App() {
  return (
    <div>
      <Route component={Router}/>
    </div>
  );
}

export default App;
