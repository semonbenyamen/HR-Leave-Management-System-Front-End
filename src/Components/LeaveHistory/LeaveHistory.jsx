import React, { useState } from 'react';

const LeaveHistory = () => {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('All Status');
  const [type, setType] = useState('All Types');

  const leaves = [
    { id: 'LV-2024-001', type: 'Casual Leave', duration: '2024-12-25 to 2024-12-27', days: 3, status: 'Pending', appliedOn: '2024-12-15' },
    { id: 'LV-2024-002', type: 'Sick Leave', duration: '2024-12-20 to 2024-12-20', days: 1, status: 'Approved', appliedOn: '2024-12-19' },
    { id: 'LV-2024-003', type: 'Earned Leave', duration: '2024-11-15 to 2024-11-18', days: 4, status: 'Approved', appliedOn: '2024-11-01' },
    { id: 'LV-2024-004', type: 'Casual Leave', duration: '2024-10-10 to 2024-10-10', days: 1, status: 'Rejected', appliedOn: '2024-10-09' },
    { id: 'LV-2024-005', type: 'Sick Leave', duration: '2024-09-05 to 2024-09-06', days: 2, status: 'Approved', appliedOn: '2024-09-05' }
  ];

  // Filter the leaves
  const filtered = leaves.filter(leave => {
    const matchSearch = leave.id.toLowerCase().includes(search.toLowerCase()) || leave.type.toLowerCase().includes(search.toLowerCase());
    const matchStatus = status === 'All Status' || leave.status === status;
    const matchType = type === 'All Types' || leave.type === type;
    return matchSearch && matchStatus && matchType;
  });

  // Get badge color for status
  const getStatusColor = (s) => {
    if (s === 'Pending') return 'bg-warning text-dark';
    if (s === 'Approved') return 'bg-success text-white';
    if (s === 'Rejected') return 'bg-danger text-white';
  };

  return (
    <div className="container-fluid py-4" style={{ width: '70%', minHeight: '100vh' }}>
      <div className="bg-white rounded-3 shadow-sm p-4">
          <h5 className="mb-4">My Leave History</h5>
        
        {/* Filters */}
        <div className="row g-3 mb-4">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Search by reason or ID..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="col-md-3">
            <select className="form-select" value={status} onChange={(e) => setStatus(e.target.value)}>
              <option>All Status</option>
              <option>Pending</option>
              <option>Approved</option>
              <option>Rejected</option>
            </select>
          </div>
          <div className="col-md-3">
            <select className="form-select" value={type} onChange={(e) => setType(e.target.value)}>
              <option>All Types</option>
              <option>Casual Leave</option>
              <option>Sick Leave</option>
              <option>Earned Leave</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <table className="table table-hover mb-0">
          <thead>
            <tr>
              <th>Leave ID</th>
              <th>Type</th>
              <th>Duration</th>
              <th>Days</th>
              <th>Status</th>
              <th>Applied On</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length > 0 ? (
              filtered.map((leave) => (
                <tr key={leave.id}>
                  <td>{leave.id}</td>
                  <td>{leave.type}</td>
                  <td>{leave.duration}</td>
                  <td>{leave.days}</td>
                  <td>
                    <span className={`badge ${getStatusColor(leave.status)} rounded-pill`}>
                      {leave.status}
                    </span>
                  </td>
                  <td>{leave.appliedOn}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-4 text-muted">No records found</td>
              </tr>
            )}
          </tbody>
        </table>

        <div className="mt-3 text-muted small">
          Showing {filtered.length} of {leaves.length} records
        </div>
      </div>

      <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" rel="stylesheet" />
    </div>
  );
};

export default LeaveHistory;
