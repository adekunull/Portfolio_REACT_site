import React from "react"

const Footer = () => {
	return (
		<div className="footer__wrapper">
			<div className="footer__content">
				<div className="footer__information footer__container--left">
					<div className="footer__download footer__content--container-big">
						<span className="text__black--standard">APLIKACJA VECTRA</span>
						<div className="footer__download--link">
							<div className="footer__download--img"></div>
							<div className="footer__download--text">
								<span className="text__purple--standard">POBIERZ</span>
								<span className="text__purple--big">APLIKACJĘ</span>
							</div>
						</div>
					</div>

					<div className="footer__line"></div>

					<div className="footer__links">
						<span className="footer__links--about footer__links--link">
							O NAS
						</span>
						<span className="footer__links--contack footer__links--link">
							KONTAKT
						</span>
						<span className="footer__links--carier footer__links--link">
							KARIERA
						</span>
						<span className="footer__links--media footer__links--link">
							DLA MEDIÓW
						</span>
					</div>
				</div>

				<div className="footer__media footer__container--right">
					<div className="footer__media--helpline footer__content--container-big">
						<span className="text__black--standard">INFOLINIA SPRZEDAŻOWA</span>
						<span className="text__green--standard">
							ZADZWOŃ LUB WYŚLIJ SMS
						</span>
						<div className="footer__media--phone-number">
							<div className="footer__media--phone-icon"></div>
							<div className="footer__media--smartphone-icon"></div>
							<span className="text__green--big">601 601 601</span>
						</div>
						<span className="text__black--small">(wg stawek operatorów)</span>
					</div>
					<div className="footer__line"></div>
					<div className="footer__media--icons">
						<div className="footer__media--icons-facebook footer__media--icons-icon"></div>
						<div className="footer__media--icons-twitter footer__media--icons-icon"></div>
						<div className="footer__media--icons-youtube footer__media--icons-icon"></div>
					</div>
				</div>

				<div className="footer__phones footer__container--right">
					<span className="text__black--standard">CENTRUM OBSŁUGI KLIENTA</span>
					<span className="text__green--standard">ZADZWOŃ</span>
					<div className="footer__phones--number">
						<div className="footer__media--phone-icon"></div>
						<span className="text__green--big">800 080 800</span>
					</div>
					<span className="text__black--standard"> Z TELEFONU KOMÓRKOWEGO</span>
					<span className="text__green--standard">58 500 65 00</span>
					<span className="text__black--small">(wg stawek operatorów)</span>
				</div>
			</div>
		</div>
	)
}

export default Footer
