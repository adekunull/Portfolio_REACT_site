import React from "react"

const Menu = () => {
	return (
		<div className="menu__wrapper">
			<div className="menu__list menu__container">
				<h3 className="menu__title-purple">PACZKI I PAKIETY</h3>

				<div className="menu__line--white"></div>

				<div className="menu__list--tv menu__list--option">
					<div className="menu__list--tv-icon menu__list--icon"></div>
					<span className="menu__list--text">telewizja</span>
				</div>

				<div className="menu__line--white"></div>

				<div className="menu__list--internet menu__list--option">
					<div className="menu__list--internet-icon menu__list--icon"></div>
					<span className="menu__list--text">internet</span>
				</div>

				<div className="menu__line--white"></div>

				<div className="menu__list--phone menu__list--option">
					<div className="menu__list--phone-icon menu__list--icon"></div>
					<span className="menu__list--text">telefon</span>
				</div>

				<div className="menu__line--white"></div>

				<div className="menu__list--mobile-internet menu__list--option">
					<div className="menu__list--mobile-internet-icon menu__list--icon"></div>
					<span className="menu__list--text">internet mobilny</span>
				</div>

				<div className="menu__line--white"></div>
			</div>

			<div className="menu__vod menu__container">
				<h3 className="menu__title--green">VOD</h3>

				<span className="text__black--standard">
					Oglądaj wtedy, gdy masz czas i ochotę
				</span>

				<div className="menu__vod--promotion">
					<div className="menu__vod--promotion-img"></div>

					<div className="menu__vod--promotion-description">
						<h5 className="menu__title--green">DZIŚ NA PROMOCJI</h5>
						<h4 className="menu__title--black">Ocalony</h4>
						<span className="text__black--small">Dramat</span>
						<span className="text__blue--standard">5,00 zł KUP</span>
					</div>
				</div>
			</div>

			<div className="menu__online menu__container">
				<h3 className="menu__title--green">TV ONLINE</h3>

				<span className="text__black--standard">
					Oglądaj telewizję przez internet na czym chces: komputer, tablet,
					telefon
				</span>
			</div>
		</div>
	)
}

export default Menu
