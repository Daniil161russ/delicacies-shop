import Head from 'next/head'
import dynamic from "next/dynamic"

const GoodCard = dynamic(() => import("../components/molecules/GoodCard"))

export default function Goods() {
	return (
		<>
		<Head>
			<title>Товары</title>
		</Head>
		<div className="goods">
			<h3 className="goods__title">Товары</h3>
			<h2 className="goods__subtitle">Еда, полная любви</h2>
			<div className="goods__container">
				<GoodCard />
				<GoodCard />
				<GoodCard />
			</div>
		</div>
	</>
	)
}