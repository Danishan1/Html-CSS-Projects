import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  useParams,
  useMatch,
  Outlet,
} from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const goToSpecial = () => {
    navigate("/special", { state: { from: "Home Page" } });
  };

  return (
    <div>
      <h2>Home Page</h2>
      <button onClick={goToSpecial}>Go to Special Page</button>
    </div>
  );
};

const About = () => <h2>About Page</h2>;

const User = () => {
  const { userId } = useParams();
  return <h2>User Page for User ID: {userId}</h2>;
};

const Special = () => {
  const location = useLocation();
  const fromPage = location.state?.from;
  return <h2>Special Page (Navigated from: {fromPage})</h2>;
};

const NotFound = () => <h2>404 - Page Not Found</h2>;

const UserLayout = () => {
  const match = useMatch("/user/:userId");
  const userId = match?.params?.userId;

  return (
    <div>
      <h2>User Layout</h2>
      <ul>
        <li>
          <Link to={`/user/${userId}/details`}>Details</Link>
        </li>
        <li>
          <Link to={`/user/${userId}/settings`}>Settings</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

const UserDetails = () => {
  const { userId } = useParams();
  return <h3>User Details for User ID: {userId}</h3>;
};

const UserSettings = () => {
  const { userId } = useParams();
  return <h3>User Settings for User ID: {userId}</h3>;
};

const Navigation = () => (
  <div style={{ display: "flex", gap: "30px", padding: "10px" }}>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/user/1">User 1</Link>
    <Link to="/user/2">User 2</Link>
    <Link to="/special" state={{ from: "Home Page" }}>
      Special
    </Link>
    <Link to="/special" replace state={{ from: "Home Page (replace)" }}>
      Special with Replace
    </Link>{" "}
  </div>
);
const App = () => {
  return (
    <Router>
      <div>
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/user/:userId" element={<UserLayout />}>
            <Route index element={<p>Please select a section.</p>} />
            <Route path="details" element={<UserDetails />} />
            <Route path="settings" element={<UserSettings />} />
          </Route>
          <Route path="/special" element={<Special />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
