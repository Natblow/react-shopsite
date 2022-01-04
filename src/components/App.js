import Banner from './Banner'
import Cart from './Cart'
import ShoppingList from './ShoppingList'
import Footer from './Footer'
import { useState } from 'react'
import logo from '../assets/logo.png'
 
function App() {
  const [cart, updateCart] = useState([])
  
	return (
		<div>
			<Banner>
				<img src={logo} alt='Jungle House' className='jh-logo' />
				<h1 className='jh-title'>Jungle House</h1>
			</Banner>
			{/* <QuestionForm /> */}
			<div className='jh-layout'>
				<Cart cart={cart} updateCart={updateCart} />
				<ShoppingList cart={cart} updateCart={updateCart} />
			</div>
      <Footer />
		</div>
	)
}
 
export default App
