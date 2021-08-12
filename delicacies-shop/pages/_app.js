import Default from '../layouts/Default'
import '../styles/globals.scss'

export default function App({ Component, pageProps }) {
  return (
		<Default>
			<Component {...pageProps} />
		</Default>
	)
}