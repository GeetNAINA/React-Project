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
    <div>dashboard</div>
  )
}

export default Dashboard;