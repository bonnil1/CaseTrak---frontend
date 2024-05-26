import { Link } from "react-router-dom"

const Header = ({isLoggedIn, handleLogout}) => {
  let username = localStorage.getItem("username")

  const loggedInLink = (
    
    <div className='flex items-end space-x-4 mr-10'>

        <h1 className="text-xl mr-10">welcome, {username}</h1>

        <button onClick={handleLogout} className='text-2xl font-bold text-blue-500 hover:text-blue-600'>logout</button>     
    </div>

  )

  const notLoggedIn = (
    <div>
      <Link to="/login" className='text-2xl font-bold text-blue-500 hover:text-blue-600 mr-10'>login </Link>
    </div>
  )

  return (
    <div className='ml-10 mt-5 flex justify-between items-center'>
      <Link to='/' className='text-2xl font-bold text-blue-500 hover:text-blue-600'>home</Link>
      {isLoggedIn ? loggedInLink : notLoggedIn}
    </div>
  )
}

export default Header