
import './NavB.css'
import CartWidget from '../CartWidget/CartWidget'
const NavB = () => {
    return (

      <header>
        
        <h1>LeFleur</h1>
        
      <nav className='nav-b'>
        <ul>
          <li>HOME</li>
          <li>BUY</li>
          <li>KNOW</li>
          
        </ul>
      </nav>

      <CartWidget />

      </header>
    
      
    )
  }
  
  export default NavB