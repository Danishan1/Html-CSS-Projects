import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

const Home = () => <h2>Home Page</h2>;

const About = () => <h2>About Page</h2>;

const User = () => {
  const location = useLocation();
  const { userId } = location.state || {};
  return <h2>User Page for User ID: {userId}</h2>;
};

const Special = () => {
  const location = useLocation();
  const fromPage = location.state?.from;
  return <h2>Special Page (Navigated from: {fromPage})</h2>;
};

const NotFound = () => <h2>404 - Page Not Found</h2>;

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to={{ pathname: "/user/1", state: { userId: 1 } }}>User 1</Link>
      </li>
      <li>
        <Link to={{ pathname: "/user/2", state: { userId: 2 } }}>User 2</Link>
      </li>
      <li>
        <Link to="/special" state={{ from: "Home Page" }}>
          Special
        </Link>
      </li>
      <li>
        <Link to="/special" replace state={{ from: "Home Page (replace)" }}>
          Special with Replace
        </Link>
      </li>
    </ul>
  </nav>
);

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/special" element={<Special />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
