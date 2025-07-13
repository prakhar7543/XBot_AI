import "./App.css";
import HomePage from "./components/homePage/homePage";
import HistoryPage from "./components/pastConversationPage/historyPage";
import { Routes, Route } from "react-router-dom";  // ✅ Only import Routes & Route

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/history" element={<HistoryPage />} />
    </Routes>
  );
}

export default App;
