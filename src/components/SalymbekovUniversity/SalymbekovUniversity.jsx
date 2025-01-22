import React from 'react';
import './SalymbekovUniversity.css';
import universityImg from '../../assets/university.jpg';
// import facultyImg from '../../assets/faculty.jpg'; // Пример изображения факультета
// import campusImg from '../../assets/campus.jpg'; // Изображение кампуса

const SalymbekovUniversity = () => {
  return (
    <div className="university-container">
      {/* Заголовок с изображением */}  
      <header className="university-header">
        <div className="header-content">
          <h1>Салымбеков Университет</h1>
          <p className="tagline">Лучшее место для вашего будущего</p>
        </div>
        <img src={universityImg} alt="Salymbekov University" className="header-image" />
      </header>

      {/* Описание университета */}
      <section className="about-university">
        <h2>О университете</h2>
        <p>
          Салымбеков Университет – это один из ведущих образовательных учреждений Кыргызстана,
          предоставляющий высококачественное образование на различных уровнях, включая бакалавриат,
          магистратуру и курсы повышения квалификации. Университет известен своим современным
          подходом к обучению и уникальными образовательными программами.
        </p>
      </section>

      {/* Преимущества учебы */}
      <section className="advantages">
        <h2>Преимущества учебы в Салымбеков Университете</h2>
        <ul>
          <li>Современные учебные материалы и технологии</li>
          <li>Практическая направленность курсов</li>
          <li>Высококвалифицированные преподаватели</li>
          <li>Международные программы обмена</li>
          <li>Широкие возможности для карьерного роста</li>
        </ul>
      </section>

      {/* Как поступить */}
      <section className="admission">
        <h2>Как поступить</h2>
        <p>
          Поступление в Салымбеков Университет — это простой и прозрачный процесс. Следуйте этим
          шагам, чтобы начать ваше образование:
        </p>
        <ol>
          <li>Ознакомьтесь с нашими образовательными программами на сайте.</li>
          <li>Подайте онлайн-заявку через портал поступления.</li>
          <li>Пройдите вступительные экзамены (если применимо).</li>
          <li>Подпишите контракт и оплатите обучение.</li>
          <li>Пройдите ориентацию и начните занятия!</li>
        </ol>
      </section>

      <section className="faculties">
        <h2>Наши факультеты</h2>
        <div className="faculty-list">
          <div className="faculty-item">
            {/* <img src={facultyImg} alt="Faculty of IT" /> */}
            <h3>Факультет информационных технологий</h3>
            <p>Образование в области IT, программирования, разработки и системных технологий.</p>
          </div>
          <div className="faculty-item">
            {/* <img src={facultyImg} alt="Faculty of Business" /> */}
            <h3>Факультет бизнеса и экономики</h3>
            <p>Курсы по бизнесу, экономике, управлению и предпринимательству.</p>
          </div>
        </div>
      </section>

      {/* Кампус университета */}
      <section className="campus">
        <h2>Кампус</h2>
        <p>
          Кампус Салымбеков Университета — это современная образовательная и культурная среда с
          удобными аудиториями, студиями и зонами для отдыха. Мы обеспечиваем студентов всем
          необходимым для комфортного обучения и учебной жизни.
        </p>
        {/* <img src={campusImg} alt="Salymbekov University Campus" className="campus-image" /> */}
      </section>

      {/* Форма обратной связи */}
      <section className="contact-form">
        <h2>Связаться с нами</h2>
        <form>
          <label htmlFor="name">Имя:</label>
          <input type="text" id="name" name="name" placeholder="Ваше имя" required />
          <label htmlFor="email">Электронная почта:</label>
          <input type="email" id="email" name="email" placeholder="Ваш email" required />
          <label htmlFor="message">Сообщение:</label>
          <textarea id="message" name="message" placeholder="Ваш вопрос" required></textarea>
          <button type="submit">Отправить</button>
        </form>
      </section>
      <section className="location">
        <h2>Где находится?</h2>
        <p>Космо Парк расположен в центре города Бишкек по адресу: <strong> Исы Ахунбаева, 125/2</strong>.</p>
        <p>
          Для вашего удобства мы добавили карту:
          <iframe
            title="Космо Парк"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.042604689099!2d74.59954791629045!.87463597915609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec84ff6f6d9e1%3A0x7a4b3c6b5a983914!2sBishkek!5e0!3m2!1sen!2skg!4v1614967127041!5m2!1sen!2skg"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy">
          </iframe>
        </p>
      </section>
    </div>
  );
};

export default SalymbekovUniversity;
