import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/overview">Overview</Link></li>
        <li><Link to="/revenue-breakdown">Revenue Breakdown</Link></li>
        <li><Link to="/expense-breakdown">Expense Breakdown</Link></li>
        <li><Link to="/profit-loss">Profit & Loss</Link></li>
        <li><Link to="/kpis">KPIs</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;