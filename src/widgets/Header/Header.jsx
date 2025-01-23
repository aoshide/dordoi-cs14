import React, { useState } from "react"
import "./Header.css"
import { Link, useLocation } from "react-router-dom"
import dordoyLogo from "../../assets/icons/dordoy-logo.png" // Убедитесь, что логотип в этой папке

function Header() {
	const [menuOpen, setMenuOpen] = useState(false)
	const location = useLocation()

	const toggleMenu = () => {
		setMenuOpen(!menuOpen)
	}

	const closeMenu = () => {
		setMenuOpen(false)
	}

	return (
		<header className='header'>
			<div className='header-container'>
				{/* Логотип */}
				<div className='logo-container'>
					<img src={dordoyLogo} alt='Дордой Логотип' className='logo-img' />
					<h1 className='logo-text'>Ассоциация "Дордой"</h1>
				</div>

				{/* Бургер-меню */}
				<button className={`burger-menu ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
					<div className='line'></div>
					<div className='line'></div>
					<div className='line'></div>
				</button>
			</div>

			{/* Навигация */}
			<nav className={`nav ${menuOpen ? "open" : ""}`}>
				<ul>
					<li>
						<Link to='/' className={location.pathname === "/" ? "active" : ""} onClick={closeMenu}>
							Главная
						</Link>
					</li>
					<li>
						<Link
							to='/football'
							className={location.pathname === "/football" ? "active" : ""}
							onClick={closeMenu}
						>
							Дордой Футбол
						</Link>
					</li>
					<li>
						<Link
							to='/university'
							className={location.pathname === "/university" ? "active" : ""}
							onClick={closeMenu}
						>
							Салымбеков Университет
						</Link>
					</li>
					<li>
						<Link
							to='/dordoy-plaza'
							className={location.pathname === "/dordoy-plaza" ? "active" : ""}
							onClick={closeMenu}
						>
							Дордой Плаза
						</Link>
					</li>
					<li>
						<Link
							to='/cosmos-park'
							className={location.pathname === "/cosmos-park" ? "active" : ""}
							onClick={closeMenu}
						>
							Космопарк
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header
