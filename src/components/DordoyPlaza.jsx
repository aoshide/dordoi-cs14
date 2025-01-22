import React from "react";
import plazaImg from "../assets/plaza.jpg";
import plazaImg1 from "../assets/plaza1.jpg";
import './DordoyPlaza.css';

const DordoyPlaza = () => {
  return (
    <div className="dordoy-plaza-container">
      {/* Заголовок и изображение */}
      <header className="dordoy-plaza-header">
        <h1>Дордой Плаза</h1>
        <p className="tagline">Самый крупный и современный торговый центр в Бишкеке</p>
        <img src={plazaImg1} alt="Dordoi Plaza Interior" className="plaza-header-image" />
      </header>

      {/* Общее описание */}
      <section className="dordoy-plaza-about">
        <h2>О Дордой Плаза</h2>
        <p>
          Дордой Плаза – это крупнейший торгово-развлекательный центр в Бишкеке, предлагающий
          разнообразные товары и услуги. Здесь вы найдете магазины мировых брендов, элитные рестораны,
          а также удобные зоны для отдыха и развлечений. Каждый этаж этого многофункционального комплекса
          предлагает уникальные магазины и места для досуга.
        </p>
      </section>

      {/* Этажи торгового центра */}
      <section className="dordoy-plaza-floors">
        <h2>Этажи и магазины</h2>
        <div className="dordoy-plaza-floor">
          <h3>1-й этаж: Магазины одежды и аксессуаров</h3>
          <img src={plazaImg} alt="Dordoi Plaza Exterior" className="plaza-floor-image" />
          <p>
            Здесь расположены магазины, предлагающие разнообразие одежды, обуви, аксессуаров и ювелирных
            изделий. Вы найдете популярные бренды, а также уникальные дизайнерские изделия.
          </p>
        </div>
        <div className="dordoy-plaza-floor">
          <h3>2-й этаж: Электроника и техника</h3>
          <img src={plazaImg} alt="Dordoi Plaza Electronics" className="plaza-floor-image" />
          <p>
            На втором этаже располагаются магазины с последними новинками в области электроники, бытовой
            техники и гаджетов. Множество брендов, таких как Apple, Samsung, и других, предлагают продукцию
            высшего качества.
          </p>
        </div>
        <div className="dordoy-plaza-floor">
          <h3>3-й этаж: Рестораны и кафе</h3>
          <img src={plazaImg} alt="Dordoi Plaza Restaurants" className="plaza-floor-image" />
          <p>
            На третьем этаже находится зона питания с ресторанами, кафе и фудкортом. Здесь вы можете
            насладиться вкусной едой в уютной атмосфере, предлагающей различные кухни мира.
          </p>
        </div>
      </section>

      {/* Филиалы брендов */}
      <section className="dordoy-plaza-brands">
        <h2>Филиалы брендов</h2>
        <p>
          В Дордой Плаза представлены известные мировые бренды, которые обеспечивают высокое качество
          товаров и услуг. Вот некоторые из них:
        </p>
        <ul>
          <li>Apple</li>
          <li>Samsung</li>
          <li>H&M</li>
          <li>Uniqlo</li>
          <li>Adidas</li>
          <li>Zara</li>
          <li>Nike</li>
        </ul>
      </section>

      {/* Контактная информация */}
      <section className="dordoy-plaza-contact">
        <h2>Контакты</h2>
        <p>
          Для получения дополнительной информации или бронирования, вы можете связаться с нами:
        </p>
        <ul>
          <li>Телефон: +996 700 000 000</li>
          <li>Email: info@dordoyplaza.kg</li>
          <li>Адрес: Бишкек, ул. Дордойская, 101</li>
        </ul>
      </section>
      <section className="location">
        <h2>Где находится?</h2>
        <p>Космо Парк расположен в центре города Бишкек по адресу: <strong> ​Улица Ибраимова, 115/3</strong>.</p>
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

export default DordoyPlaza;
