import ThemeDropdown from './ThemeDropdown'

export default function Navbar() {
  return (
    <div className='flex items-center py-3'>
      <div><h5>AMS</h5></div>
      <div className='ml-auto'>
        <ThemeDropdown/>
      </div>
    </div>
  )
}
