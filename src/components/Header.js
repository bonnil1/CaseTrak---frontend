import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className='ml-10 mt-5'>
      <Link to='/' className='text-2xl font-bold text-blue-500 hover:text-blue-600'>home</Link>
    </div>
  )
}

export default Header