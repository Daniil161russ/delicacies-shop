import Link from 'next/link'
import Image from 'next/image'
import logo from "../../public/images/logo.svg"

const Navigation = () => {
	return (
		<div className="navbar">
			<a href="/about" className="logo">
				<Image src={logo} alt="logo" />
			</a>
			<div className="navbar__panel">
				<div className="navbar__menu">
					<ul className="menu">
						<li className="menu__item">
							<Link href="/">
								<a className="menu__link">Главная</a>
							</Link>
						</li>
						<li className="menu__item">
							<Link href="/about">
								<a className="menu__link">О нас</a>
							</Link>
						</li>
						<li className="menu__item">
							<Link href="/goods">
								<a className="menu__link">Товары</a>
							</Link>
						</li>
						<li className="menu__item">
							<Link href="/delivery">
								<a className="menu__link">Доставка</a>
							</Link>
						</li>
						<li className="menu__item">
							<Link href="/contacts">
								<a className="menu__link">Контакты</a>
							</Link>
						</li>
					</ul>
				</div>
				<a href="#" class="button button-primary">
					Заказать сейчас
				</a>
			</div>
		</div>
	)
}

export default Navigation;
