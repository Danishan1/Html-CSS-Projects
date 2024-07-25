import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
  useParams,
} from "react-router-dom";

const Home = () => <h2>Home Page</h2>;

const About = () => <h2>About Page</h2>;

const UserList = () => (
  <div>
    <h2>User List</h2>
    <ul>
      <li>
        <Link to="1">User 1</Link>
      </li>
      <li>
        <Link to="2">User 2</Link>
      </li>
    </ul>
    <Outlet />
  </div>
);

const UserDetails = () => {
  const { userId } = useParams();
  return <h3>User Details for User ID: {userId}</h3>;
};

const NotFound = () => <h2>404 - Page Not Found</h2>;

const ErrorComponent = () => <h2>An error occurred</h2>;

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<UserList />}>
            <Route index element={<p>Please select a user.</p>} />
            <Route path=":userId" element={<UserDetails />} />
          </Route>
          <Route
            path="*"
            element={<NotFound />}
            errorElement={<ErrorComponent />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;