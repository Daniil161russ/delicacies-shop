import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from "../../public/images/logo.svg"

const links = [
	{ id: 0, name: "Главная", href: "/", active: false },
	{ id: 1, name: "О нас", href: "/about", active: false },
	{ id: 2, name: "Товары", href: "/goods", active: false },
	{ id: 3, name: "Доставка", href: "/delivery", active: false },
	{ id: 4, name: "Контакты", href: "/contacts", active: false }
]

const Navigation = () => {
	const [selected, setSelected] = useState(0)

	const handleChange = (id) => {
		setSelected(id)
	}

	return (
		<div className="navbar">
			<Link href="/">
				<a className="logo">
					<Image src={logo} alt="logo" />
				</a>
			</Link>
			<div className="navbar__panel">
				<div className="navbar__menu">
					<ul className="menu">
						{links.map(link => {
							return (
								<li key={link.id} className="menu__item" onClick={() => handleChange(link.id)}>
									<Link href={link.href}>
										<a className={link.id === selected ? "active-link" : "menu__link"}>{link.name}</a>
									</Link>
								</li>
							)
						})}
					</ul>
				</div>
				<a href="#" className="button button-primary">
					Заказать сейчас
				</a>
			</div>
		</div>
	)
}

export default Navigation;
