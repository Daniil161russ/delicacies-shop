import Link from "next/link"
import Head from 'next/head'

const NotFound = () => {
  return ( 
    <>
			<Head>
        <title>Страница не найдена</title>
      </Head>
			<div className="not-found">
				<h1>Страница не найдена.</h1>
				<span>Воспользуйтесь навигацией для перехода на страницу</span>
				<Link href="/">
					<a className="button button-primary">На главную</a>
				</Link>
			</div>
    </>
   );
}
 
export default NotFound;