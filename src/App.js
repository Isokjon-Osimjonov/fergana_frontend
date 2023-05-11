import "./style/App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./components/home/Home";
import FirstMeals from "./components/firstMeals/FirstMeals";
import SecondMeals from "./components/secondMeals/SecondMeals";
import Salads from "./components/salads/Salads";
import Desserts from "./components/desserts/Desserts";
function App() {
  return (
    <div className='App'>
      {/* <Main /> */}
      <Switch>
        {/* <Route exact path='/' component={Main} /> */}

        <Route exact path='/' component={Home} />
        <Route path='/fmeals' component={FirstMeals} />
        <Route path='/smeals' component={SecondMeals} />
        <Route path='/salads' component={Salads} />
        <Route path='/desserts' component={Desserts} />
      </Switch>
    </div>
  );
}

export default App;
