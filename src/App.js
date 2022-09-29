import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home/Home'
import Create from './pages/create/Create'
import Search from './pages/search/Search';
import Recipe from './pages/recipe/Recipe'
import Navbar from './components/Navbar';
//styles
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exakt path="/create">
            <Create/>
          </Route>
          <Route exakt path="/search">
            <Search/>
          </Route>
          <Route exakt path="/recipe:id">
            <Recipe/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
