import React from "react"
import cosmosParkImg from "../../assets/icons/cosmos-park.jpg"
import cosmosParkImg1 from "../../assets/icons/cosmos-park1.jpg"
import "./CosmoPark.css"

const CosmosPark = () => {
	const movies = [
		{
			title: "Звездный Путь",
			description: "Космическое приключение, полное удивительных открытий.",
			time: "12:30, 15:00, 18:00",
			price: "350 сом",
		},
		{
			title: "Луна 2",
			description: "Секретная миссия на Луну, которая изменит все.",
			time: "13:00, 16:00, 19:30",
			price: "400 сом",
		},
		{
			title: "Галактика",
			description: "Великое сражение за будущее Вселенной.",
			time: "11:00, 14:30, 17:30",
			price: "370 сом",
		},
	]

	return (
		<div className='cosmos-park'>
			<h1>Космо Парк</h1>
			<img src={cosmosParkImg} alt='Cosmo Park' className='main-image' />

			<section className='movies'>
				<h2>Популярные фильмы</h2>
				{movies.map((movie, index) => (
					<div key={index} className='movie-card'>
						<h3>{movie.title}</h3>
						<p>{movie.description}</p>
						<p>
							<strong>Сеансы:</strong> {movie.time}
						</p>
						<p>
							<strong>Цена:</strong> {movie.price}
						</p>
						<button>Забронировать</button>
					</div>
				))}
			</section>

			<img src={cosmosParkImg1} alt='Cosmo Park Additional View' className='additional-image' />

			<section className='location'>
				<h2>Где находится?</h2>
				<p>
					Космо Парк расположен в центре города Бишкек по адресу:{" "}
					<strong>7 мкрн, Суеркулов көчөсү, 40а просп. Юнусалиева</strong>.
				</p>
				<p>
					Для вашего удобства мы добавили карту:
					<iframe
						title='Космо Парк'
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.042604689099!2d74.59954791629045!.87463597915609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec84ff6f6d9e1%3A0x7a4b3c6b5a983914!2sBishkek!5e0!3m2!1sen!2skg!4v1614967127041!5m2!1sen!2skg'
						width='100%'
						height='300'
						style={{ border: 0 }}
						allowFullScreen=''
						loading='lazy'
					></iframe>
				</p>
			</section>
		</div>
	)
}

export default CosmosPark
