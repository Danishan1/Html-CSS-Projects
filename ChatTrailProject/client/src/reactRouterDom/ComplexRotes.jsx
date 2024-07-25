import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

const DashboardHome = () => {
  return <h2>Dashboard Home</h2>;
};

const Profile = () => {
  return <h2>Profile</h2>;
};

const Settings = () => {
  return <h2>Settings</h2>;
};
const Home = () => {
  return <h2>Home</h2>;
};
const About = () => {
  return <h2>About</h2>;
};
const Contact = () => {
  return <h2>Contact</h2>;
};

const DailyReports = () => {
  return <h2>Daily Reports</h2>;
};

const MonthlyReports = () => {
  return <h2>Monthly Reports</h2>;
};

const Layout = ({ children }) => {
  return (
    <div>
      <div style={{ display: "flex", gap: "30px", padding: "10px" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/reports">Reports</Link>
      </div>
      <div>{children}</div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" exact element={<DashboardHome />} />
          <Route path="/dashboard/profile" element={<Profile />} />
          <Route path="/dashboard/settings" element={<Settings />} />
          <Route path="/reports" exact element={<DailyReports />} />
          <Route path="/reports/monthly" element={<MonthlyReports />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
