import React from "react"

const Main = () => {
	return (
		<div className="main__wrapper">
			<div className="main__content">
				<div className="main__container--1"></div>

				<div className="main__container--2"></div>

				<div className="main__packages main__container">
					<div className="main__packages--header">
						<h1 className="main__header--white-standard">
							STWÓRZ SWÓJ WŁASNY PAKIET
						</h1>
						<span className="text__white--small-bold">
							TELEWIZJA - INTERNET - TELEFON
						</span>
					</div>

					<div className="main__packages--content">
						<div className="main__packages--content-grafic">
							<div className="packages--grafic-tv packages--grafic"></div>
							<span className="text__white--small">WYBIERZ</span>
							<span className="text__white--small-bold">
								ULUBIONE KANAŁY TV
							</span>
						</div>

						<div className="main__packages--content-plus">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								xmlnsxlink="http://www.w3.org/1999/xlink"
								width="20px"
								height="20px"
							>
								<path
									fill-rule="evenodd"
									fill="rgb(255, 255, 255)"
									d="M18.000,12.000 L12.000,12.000 L12.000,18.000 C12.000,19.105 11.105,20.000 10.000,20.000 C8.895,20.000 8.000,19.105 8.000,18.000 L8.000,12.000 L2.000,12.000 C0.895,12.000 -0.000,11.105 -0.000,10.000 C-0.000,8.895 0.895,8.000 2.000,8.000 L8.000,8.000 L8.000,2.000 C8.000,0.895 8.895,-0.000 10.000,-0.000 C11.105,-0.000 12.000,0.895 12.000,2.000 L12.000,8.000 L18.000,8.000 C19.105,8.000 20.000,8.895 20.000,10.000 C20.000,11.105 19.105,12.000 18.000,12.000 Z"
								/>
							</svg>
						</div>

						<div className="main__packages--content-grafic">
							<div className="packages--grafic-internet packages--grafic"></div>
							<span className="text__white--small">WYBIERZ</span>
							<span className="text__white--small-bold">
								PRĘDKOŚĆ INTERNETU
							</span>
						</div>

						<div className="main__packages--content-plus">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								xmlnsxlink="http://www.w3.org/1999/xlink"
								width="20px"
								height="20px"
							>
								<path
									fill-rule="evenodd"
									fill="rgb(255, 255, 255)"
									d="M18.000,12.000 L12.000,12.000 L12.000,18.000 C12.000,19.105 11.105,20.000 10.000,20.000 C8.895,20.000 8.000,19.105 8.000,18.000 L8.000,12.000 L2.000,12.000 C0.895,12.000 -0.000,11.105 -0.000,10.000 C-0.000,8.895 0.895,8.000 2.000,8.000 L8.000,8.000 L8.000,2.000 C8.000,0.895 8.895,-0.000 10.000,-0.000 C11.105,-0.000 12.000,0.895 12.000,2.000 L12.000,8.000 L18.000,8.000 C19.105,8.000 20.000,8.895 20.000,10.000 C20.000,11.105 19.105,12.000 18.000,12.000 Z"
								/>
							</svg>
						</div>

						<div className="main__packages--content-grafic">
							<div className="packages--grafic-phone packages--grafic"></div>
							<span className="text__white--small">WYBIERZ</span>
							<span className="text__white--small-bold">
								ILOŚĆ MINUT NA ROZMOWY
							</span>
						</div>

						<div className="main__packages--content-plus">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								xmlnsxlink="http://www.w3.org/1999/xlink"
								width="20px"
								height="20px"
							>
								<path
									fill-rule="evenodd"
									fill="rgb(255, 255, 255)"
									d="M18.000,12.000 L12.000,12.000 L12.000,18.000 C12.000,19.105 11.105,20.000 10.000,20.000 C8.895,20.000 8.000,19.105 8.000,18.000 L8.000,12.000 L2.000,12.000 C0.895,12.000 -0.000,11.105 -0.000,10.000 C-0.000,8.895 0.895,8.000 2.000,8.000 L8.000,8.000 L8.000,2.000 C8.000,0.895 8.895,-0.000 10.000,-0.000 C11.105,-0.000 12.000,0.895 12.000,2.000 L12.000,8.000 L18.000,8.000 C19.105,8.000 20.000,8.895 20.000,10.000 C20.000,11.105 19.105,12.000 18.000,12.000 Z"
								/>
							</svg>
						</div>

						<div className="main__packages--content-grafic ">
							<div className="packages--grafic-mobile-internet packages--grafic"></div>
							<span className="text__white--small">WYBIERZ</span>
							<span className="text__white--small-bold">INTERNET MOBILNY</span>
						</div>
					</div>

					<div className="main__packages--create">
						<div className="main__packages--create-button">
							<span className="text__white--x-medium-bold">STWÓRZ PAKIET</span>
						</div>
						<span className="text__white--x-medium">
							lub wybierz pakiet, przygotowany przez nas
						</span>
					</div>
				</div>

				<div className="main__container--4"></div>

				<div className="main__container--5"></div>

				<div className="main__container--6"></div>

				<div className="main__container--7"></div>
			</div>
		</div>
	)
}

export default Main
