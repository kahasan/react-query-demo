import logo from "./logo.svg";
import "./App.css";

import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import Home from "./pages/Home";
import SuperHeroes from "./pages/SuperHeroes";
import RQHeroes from "./pages/RQHeroes";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import RQSuperHero from "./pages/RQSuperHero";
import RQParelel from "./pages/RQParelel";
import DynamicParalelQuery from "./pages/DynamicParalelQuery";
import DependentQueries from "./pages/DependentQueries";

import { PaginatedQueriesPage } from "./pages/PaginatedQueriesPage";
import { InfiniteQueriesPage } from "./pages/InfiniteQueriesPage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/superheroes">SuperHeroes</Link>
              </li>
              <li>
                <Link to="/rqheroes">RQHeroes</Link>
              </li>
              <li>
                <Link to="/rqparelel">RQParalel</Link>
              </li>
              <li>
                <Link to="/dynamicParalelQueries">RQDynamicParalel</Link>
              </li>
              <li>
                <Link to="/dependentQueries">DependentQueries</Link>
              </li>
              <li>
                <Link to="/rq-paginated">PaginatedQueries</Link>
              </li>
              <li>
                <Link to="/rq-infinite">InfiniteQueries</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/rq-super-heroes/:heroId">
              <RQSuperHero />
            </Route>
            <Route path="/rqheroes">
              <RQHeroes />
            </Route>
            <Route path="/rqparelel">
              <RQParelel />
            </Route>
            <Route path="/dynamicParalelQueries">
              <DynamicParalelQuery heroIds={[1, 2]} />
            </Route>
            <Route path="/dependentQueries">
              <DependentQueries email="vishwas@example.com" />
            </Route>
            <Route path="/superheroes">
              <SuperHeroes />
            </Route>
            <Route path="/rq-paginated">
              <PaginatedQueriesPage />
            </Route>
            <Route path="/rq-infinite">
              <InfiniteQueriesPage />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
      <ReactQueryDevtools initialOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
