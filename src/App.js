import './App.css'
import Sidebar from './teacher/Sidebar'
import Topbar from './teacher/Topbar'
import './sb-admin-2.min.css'
import Dashboard from './teacher/Dashboard'
import UserList from './teacher/UserList'
import Login from './Login'
import Portal from './teacher/Portal'
import CreateUser from './teacher/CreateUser'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserView from './teacher/UserView'
import UserEdit from './teacher/UserEdit'
import Courses from './student/courses/Courses'
import Studentportal from './student/courses/Studentportal'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/portal" element={<Portal />}>
          <Route path="dashbord" element={<Dashboard />} />
          <Route path="user-list" element={<UserList />} />
          <Route path="createuser" element={<CreateUser />} />
          <Route path="user-view/:id" element={<UserView />} />
          <Route path="useredit/:id" element={<UserEdit />} />
        </Route>
        <Route path="/studentportal" element={<Studentportal />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
