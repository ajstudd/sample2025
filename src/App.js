import { Heading, Box, Text } from "@chakra-ui/react";
import "./styles.css";

export default function App() {
  return (
    <div className="admin-container">
      <h1 className="admin-title">Admin Dashboard</h1>
      <div className="dashboard-cards">
        <div className="card">
          <div className="card-content">
            <div className="icon">👤</div>
            <div>
              <p className="card-title">Users</p>
              <p className="card-value">1,234</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <div className="icon">🛒</div>
            <div>
              <p className="card-title">Orders</p>
              <p className="card-value">567</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <div className="icon">⚙</div>
            <div>
              <p className="card-title">Settings</p>
              <p className="card-value">Manage</p>
            </div>
          </div>
        </div>
      </div>
      <div className="orders-table">
        <h2>Recent Orders</h2>
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#1234</td>
              <td>John Doe</td>
              <td>$120.00</td>
              <td className="status-completed">Completed</td>
            </tr>
            <tr>
              <td>#1235</td>
              <td>Jane Smith</td>
              <td>$85.50</td>
              <td className="status-pending">Pending</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="manage-button">
        <button>Manage Store</button>
      </div>
    </div>
  );
}
