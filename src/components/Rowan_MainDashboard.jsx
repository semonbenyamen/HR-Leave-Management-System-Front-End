import {
  CalendarDays,
  Plus,
  History,
  FileText,
  User,
  LogOut,
} from "lucide-react";

const recentRequests = [
  {
    type: "Casual Leave",
    date: "Dec 25-27, 2024",
    status: "Pending",
  },
  {
    type: "Sick Leave",
    date: "Dec 20, 2024",
    status: "Approved",
  },
];

function RowanMainDashboard() {
  return (
    <div className="dashboard-container">
      <header className="navbar">
        <div className="logo-section">
          <div className="logo-box">
            <CalendarDays size={24} />
          </div>

          <div> 
            <h1>Leave Management</h1>
            <p>Employee Dashboard</p>
          </div>
        </div>

        <div className="user-section">
          <div className="user-info">
            <User size={18} />
            <span>Rowan Mohamed</span>
          </div>

          <button className="logout-btn">
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </header>

      <div className="tabs">
        <button className="active-tab">Dashboard</button>
        <button>Apply</button>
        <button>My Leaves</button>
        <button>Balance</button>
      </div>

      <div className="dashboard-grid">
        <div className="left-section">

          <section className="card">
            <h2>Quick Actions</h2>

            <button className="apply-btn">
              <Plus size={18} />
              Apply for Leave
            </button>

            <div className="action-buttons">
              <button>
                <History size={16} />
                View History
              </button>

              <button>
                <FileText size={16} />
                Check Balance
              </button>
            </div>
          </section>

          <section className="card">
            <h2>Recent Requests</h2>

            {recentRequests.map((request) => (
              <div className="request-card" key={request.type}>
                <div>
                  <h3>{request.type}</h3>
                  <p>{request.date}</p>
                </div>

                <span
                  className={
                    request.status === "Approved"
                      ? "approved"
                      : "pending"
                  }
                >
                  {request.status}
                </span>
              </div>
            ))}
          </section>
        </div>

        <div className="right-section">

          <section className="summary-card">
            <h2>Year-to-Date Summary</h2>

            <div className="summary-grid">
              <div className="summary-box used">
                <h3>15</h3>
                <p>Total Used</p>
              </div>

              <div className="summary-box available">
                <h3>40</h3>
                <p>Total Available</p>
              </div>
            </div>
          </section>

          <section className="card">
            <h2>Upcoming Approved Leaves</h2>

            <div className="upcoming-item">
              <h3>Dec 25, 2024</h3>
              <p>Casual Leave</p>
            </div>

            <div className="upcoming-item">
              <h3>Jan 15, 2025</h3>
              <p>Earned Leave</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}

export default RowanMainDashboard;