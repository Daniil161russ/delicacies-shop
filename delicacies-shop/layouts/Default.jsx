import dynamic from "next/dynamic"
const Navigation = dynamic(() => import("../components/molecules/Navigation"))

const Default = ({children}) => {
	return (
		<div className="layout">
			<div className="container">
				<header>
					<Navigation/>
				</header>
				<main>
					{ children }
				</main>
			</div>
			
		</div>
	)
}

export default Default