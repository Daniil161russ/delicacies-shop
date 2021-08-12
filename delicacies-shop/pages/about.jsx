import Head from 'next/head'
import Image from 'next/image'
import aboutImg from '../public/images/about_img.jpg'

export default function About() {
	return (
		<>
		<Head>
			<title>О нас</title>
		</Head>
		<div className="about">
			<div className="about__img">
				<Image src={aboutImg} alt="person" />
			</div>
			<div className="about__content">
				<h3 className="about__title">О нас</h3>
				<h2 className="about__subtitle">
					Продовольственные лавки с людьми, но с каталогами самолетов по маркетингу продуктов и т.д.
				</h2>
				<p className="about__text">
					Чтобы начать бизнес быстрого питания, 
					нужно многое. Вам нужны не только продуктовые лавки с людьми, 
					но и оборудование, чтобы ваш маркетинговый план был эффективным.
				</p>
			</div>
		</div>
	</>
	)
}
