import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./scenes/homePage";
import LoginPage from "./scenes/loginPage/login";
import ProfilePage from "./scenes/profilePage/profile";
import DrillsPage from "./scenes/skillsPage/drills";
import SkillsPage from "./scenes/skillsPage/skill";

function App() {
  return (
    <Router>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/profile" component={ProfilePage} />
      <Route exact path="/skills" component={SkillsPage} />
      <Route exact path="/drills" component={DrillsPage} />
    </Router>
  );
}

export default App;
