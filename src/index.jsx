
import React  from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

const Loading = () => <div>Loading...</div>;

const Home = Loadable({
  loader: () => import('./view/Home'),
  loading: Loading,
});

const About = Loadable({
  loader: () => import('./about/About'),
  loading: Loading,
});

class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                </Switch>
            </Router>
        )
    }
}

render(
    <App />,
    document.getElementById('app')
);