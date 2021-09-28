import Image from 'next/image'
import cardImg from '../../public/images/card__img.png'


const GoodCard = () => {
	return (
		<div className="card">
			<Image src={cardImg} className="card__img"/>
			<div className="card__wrapper">
				<div className="card__header">
					<h3>Веги Маффен</h3>
					<h3>1000 ₽</h3>
				</div>
				<p className="card__description">
					Чтобы начать бизнес в сфере быстрого питания, нужно многое.
				</p>
				<button href="#" className="button button-primary">
					+
				</button>
			</div>
		</div>
	)
}

export default GoodCard
