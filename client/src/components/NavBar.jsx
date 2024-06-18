import { Link } from "react-router-dom"

function NavBar() {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/register'>SignUp</Link>
      <Link to='/login'>Login</Link>
    </nav>
  )
}

export default NavBar