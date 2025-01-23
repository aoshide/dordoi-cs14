import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section about">
        <h3>О Дордое</h3>
        <p>
          Дордой — крупнейший торговый рынок в Кыргызстане, а также центр спорта и
          образования через проекты, такие как Salymbekov University и Dordoi Football.
        </p>
      </div>
      <div className="footer-section links">
        <h3>Быстрые ссылки</h3>
        <ul>
          <li><a href="#dordoi-football">Dordoi Football</a></li>
          <li><a href="#salymbekov-university">Salymbekov University</a></li>
          <li><a href="#contacts">Контакты</a></li>
          <li><a href="#about-us">О нас</a></li>
          <li><a href="#shops">Магазины</a></li>
        </ul>
      </div>
      <div className="footer-section contacts">
        <h3>Контакты</h3>
        <p>Телефон: +996 555 123 456</p>
        <p>Email: info@dordoi.kg</p>
        <p>Адрес: г. Бишкек, ул. Токтоналиева, 15</p>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Дордой. Все права защищены.</p>
        <p>Разработано с любовью в Бишкеке 💙</p>
      </div>
    </footer>
  );
};

export default Footer;
