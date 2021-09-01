import React from "react"
import Footer from "../../components/footer"
import Main from "../../components/main"
import Nav from "../../components/nav"

const Homepage = () => {
	return (
		<div className="homepage__wrapper">
			<Nav />
			<Main />
			<Footer />
		</div>
	)
}

export default Homepage
