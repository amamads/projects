import { Outlet } from 'react-router'
import { Navbar } from './components'

export default function App() {
  return (
    <div className='w-9/10 mx-auto'>
      <Navbar/>
      <Outlet />
    </div>
  )
}
