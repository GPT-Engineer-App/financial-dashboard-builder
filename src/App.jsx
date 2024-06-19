import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Overview from "./pages/Overview.jsx";
import RevenueBreakdown from "./pages/RevenueBreakdown.jsx";
import ExpenseBreakdown from "./pages/ExpenseBreakdown.jsx";
import ProfitLoss from "./pages/ProfitLoss.jsx";
import KPIs from "./pages/KPIs.jsx";
import Navbar from "./components/Navbar.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route exact path="/overview" element={<Overview />} />
          <Route exact path="/revenue-breakdown" element={<RevenueBreakdown />} />
          <Route exact path="/expense-breakdown" element={<ExpenseBreakdown />} />
          <Route exact path="/profit-loss" element={<ProfitLoss />} />
          <Route exact path="/kpis" element={<KPIs />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;