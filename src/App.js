import React, {Suspense} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Components/home';
import Vacation from './Components/vacation';
const Index = () => <h2>Index</h2>;

const AppRouter = () => {
    const LazyHome = React.lazy(() => import('./Components/home'));

    console.log(LazyHome, 'lazy home');
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Index</Link>
                        </li>
                        <li>
                            <Link to="/about/">Home</Link>
                        </li>
                        <li>
                            <Link to="/users/">Vacation</Link>
                        </li>
                    </ul>
                </nav>
                <Suspense fallback={<div>loading....</div>}>
                    <Route path="/" exact component={Index} />
                    <Route path="/about/" component={() => <LazyHome />} />
                    <Route path="/users/" component={Vacation} />
                </Suspense>
            </div>
        </Router>
    );
}

export default AppRouter;