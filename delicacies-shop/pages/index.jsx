import Head from 'next/head'
import Image from 'next/image'
import eatImg from '../public//images/hero_img.svg'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Главная</title>
      </Head>
      <div className="hero">
        <div className="hero__content">
          <h1 className="hero__title">Как хорошо провести время, сделав еду хорошей.</h1>
          <p className="hero__description">
            Чтобы начать бизнес быстрого питания, нужно многое. 
            Вам понадобятся не только продуктовые лавки с людьми, но и специализированное оборудование.
          </p>
          <div className="button-group">
            <a href="#" className="button button-primary">
              Перейти к покупкам
            </a>
            <a href="#" className="button button-link">
              Информация о продукте
            </a>
          </div>
        </div>
        <div className="hero__img">
          <Image src={eatImg} alt="eat"/>
        </div> 
      </div>
    </div>
  )
}
