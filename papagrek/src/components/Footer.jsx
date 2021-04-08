import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
	return (
		<div>
			<div className="submenuWrapper">
				<div className="buyers">
					<h4>Покупателям</h4>
					<ul>
						<li><a href="/buyers.php">Как сделать заказ</a></li>
						<li><a href="#">Способы оплаты</a></li>
						<li><a href="delivery.php">Доставка</a></li>
						<li><a href="#">Возврат товара</a></li>
						<li><a href="#">Возврат денежных средств</a></li>
					</ul>
				</div>

				<div className="company">
					<h4>Компания</h4>
					<ul>
						<li><a href="about.php">О нас</a></li>
						<li><a href="#">Реквизиты</a></li>
						<li><a href="contacts.php">Контакты</a></li>
						<li><a href="#">Вакансии</a></li>
					</ul>
				</div>

				<div className="partners">
					<h4>Партнерам</h4>
					<ul>
						<li><a href="#">Интернет магазин под ключ</a></li>
						<li><a href="#">Как начать сотрудничество</a></li>
						<li><a href="#">Тарифы и цены</a></li>
					</ul>
				</div>


				<div className="socialWrapper">
					<h4>Мы в соцсетях</h4>
					<div className="socialIcons">
						<div>
							<a href="https://instagram.com/papagrek.com_magazine"><img className="size"
																					   src="/img/icons/instagram.png"/></a>
						</div>
						<div>
							<a href="https://odnoklassniki.ru/papagrek"><img className="size"
																			 src="/img/icons/ok.png"/></a>
						</div>
						<div>
							<a href="https://pinterest.com/olivesargreek"><img className="size"
																			   src="/img/icons/pin.png"/></a>
						</div>
					</div>
				</div>
			</div>

			<div className="copyright">
				<p>2019-2020 © Papagrek - интернет-магазин аксессуаров к часам Apple Watch.</p>
				<p>Все права защищены. Доставка по Саратову и Энгельсу.</p>
			</div>
		</div>
	)
}

export default Footer