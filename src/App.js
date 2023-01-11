import LoginPage from "./pages/LoginPage";
import SignUp from "./pages/SignUp";
import MainPage from "./pages/MainPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<LoginPage />} />
        <Route path="/signup" exact element={<SignUp />} />
        <Route path="/homepage" exact element={<MainPage />} />
      </Routes>
    </Router>
  );
};

export default App;
