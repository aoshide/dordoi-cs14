import React from "react"
import footballImg from "../../assets/icons/football.jpg"
import matchImg from "../../assets/icons/match1.jpeg" // Реальное изображение матча
import logo from "../../assets/icons/logo.png"

import "./DordoiFootball.css"

const Football = () => {
	return (
		<div className='football-container'>
			{/* Заголовок и изображение клуба */}
			<header className='football-header'>
				<div className='header-content'>
					<h1>Футбольный клуб Дордой</h1>
					<img src={logo} alt='Dordoy FC Logo' className='club-logo' />
				</div>
				<img src={footballImg} alt='Football Field' className='header-image' />
			</header>

			{/* История клуба */}
			<section className='club-history'>
				<h2>История клуба</h2>
				<p>
					Футбольный клуб «Дордой» был основан в 1995 году и является одним из самых успешных
					футбольных клубов Кыргызстана. Он многократный чемпион Кыргызстана и регулярно участвует в
					международных турнирах, таких как Лига чемпионов АФК и Кубок Азиатских чемпионов.
				</p>
				<p>
					Домашним стадионом клуба является «Дордой Арена», вмещающая до 15 000 зрителей. Это символ
					современного футбольного стадиона в Бишкеке, где проходят важнейшие матчи.
				</p>
			</section>

			{/* Актуальные матчи */}
			<section className='matches-section'>
				<h2>Актуальные матчи</h2>
				<div className='match-image'>
					<img src={matchImg} alt='Match Schedule' className='match-image-small' />
				</div>
				<ul className='matches-list'>
					<li>
						<strong>Матч 1:</strong> Дордой против Алга
						<br />
						<strong>Дата:</strong> 1 февраля 2025
						<br />
						<strong>Место:</strong> Дордой Арена, Бишкек
						<br />
						<strong>Время:</strong> 18:00
					</li>
					<li>
						<strong>Матч 2:</strong> Дордой против Ала-Тоо
						<br />
						<strong>Дата:</strong> 8 февраля 2025
						<br />
						<strong>Место:</strong> Дордой Арена, Бишкек
						<br />
						<strong>Время:</strong> 17:00
					</li>
					<li>
						<strong>Матч 3:</strong> Дордой против Кайрат
						<br />
						<strong>Дата:</strong> 15 февраля 2025
						<br />
						<strong>Место:</strong> Центральный стадион, Алматы
						<br />
						<strong>Время:</strong> 16:00
					</li>
				</ul>
			</section>

			{/* Запись на матч */}
			<section className='registration-section'>
				<h3>Запись на матч</h3>
				<form className='registration-form'>
					<label>
						Имя:
						<input type='text' name='name' placeholder='Ваше имя' required />
					</label>
					<label>
						Команда:
						<select name='team' required>
							<option value='dordoy'>Дордой</option>
							<option value='alga'>Алга</option>
							<option value='alata'>Ала-Тоо</option>
						</select>
					</label>
					<button type='submit' className='submit-button'>
						Записаться
					</button>
				</form>
			</section>

			{/* Галерея */}
			<section className='gallery-section'>
				<h2>Галерея клуба</h2>
				<div className='gallery'>
					<img
						src='https://via.placeholder.com/300'
						alt='Gallery Image 1'
						className='gallery-item'
					/>
					<img
						src='https://via.placeholder.com/300'
						alt='Gallery Image 2'
						className='gallery-item'
					/>
					<img
						src='https://via.placeholder.com/300'
						alt='Gallery Image 3'
						className='gallery-item'
					/>
				</div>
			</section>
			<section className='location'>
				<h2>Где находится?</h2>
				<p>
					Космо Парк расположен в центре города Бишкек по адресу:{" "}
					<strong> ул. Абдрахманова 230А</strong>.
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

export default Football
