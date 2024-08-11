import { useState } from 'react'
import UserDashboard from './features/user/pages/dashboard/index';
import AddUserForm from './features/user/pages/addUserForm/index';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <div className="sidebar">
          <div className='menutitle'>
            <i class="fa-solid fa-bars"></i>
            <div>Menu</div>

          </div>
          <ul className="dashboardmenu">
            <li className='search'>
              <i class="fa-solid fa-magnifying-glass"></i>
              <div>Search</div>

            </li>
            <li className='user'>
              <i class="fa-solid fa-user"></i>
              <div>Users</div>

            </li>
            <li className='flag'>
              <i class="fa-solid fa-flag"></i>
              <div>Flag</div>

            </li>
            <li className='analysis'>
              <i class="fa-solid fa-chart-pie"></i>
              <div>Analysis</div>

            </li>
            <li className='message'>
              <i class="fa-solid fa-message"></i>
              <div>Message</div>

            </li>
            <li className='task'>
              <i class="fa-solid fa-list-check"></i>
              <div>Tasks</div>

            </li>
            <li className='calendar'>
              <i class="fa-solid fa-calendar-days"></i>
              <div>Calendar</div>

            </li>
            <li className='setting'>
              <i class="fa-solid fa-gear"></i>
              <div>Setting</div>
            </li>
          </ul>
        </div>
        <div className="header">
          <div className='bigname'>HRDept Company</div>
          <ul className="userinfo">
            <li className='notification'>N</li>
            <li className='username'>Na</li>
            <li className='avatar'>Av</li>
          </ul>
        </div>
        <div className='content'>
          <div className='userdashboard'><UserDashboard /></div>
        </div>
      </div>
    </>
  )
}

export default App
