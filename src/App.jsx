import { Routes, Route } from 'react-router-dom';

// components
import Layout from './components/Layout';
import Home from './pages/Home';
import Forum from './pages/Forum';
import Events from './pages/Events';
import Therapy from './pages/Therapy';
import Journal from './pages/Journal';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='forum' element={<Forum />} />
          <Route path='events' element={<Events />} />
          <Route path='therapy' element={<Therapy />} />
          <Route path='journal' element={<Journal />} />
        </Route>

        <Route path='login' element={<Login />} />
        <Route path='signup' element={<SignUp />}/>
      </Routes>
    </>
  )
}
