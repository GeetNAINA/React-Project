import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login')
    }
  });
  return (
    <div className="container">
    <div className="card mt-4">
      <div className="card-body">
        <div className="text-center">
          <h2 className="main-heading">User Dashboard</h2>
          <div className="underline mx-auto"></div>
        </div>

        </div>
        </div>
        </div>
  )
}

export default Dashboard;