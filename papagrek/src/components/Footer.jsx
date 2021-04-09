import React from 'react';
import {Link} from 'react-router-dom';
import instIcon from "../img/icons/instagram.png";
import okIcon from "../img/icons/ok.png";
import pintIcon from "../img/icons/pin.png";


const Footer = () => {
	return (
		<div className="footer">
			<div className="submenuWrapper">
				<div className="buyers">
					<h4>Покупателям</h4>
					<ul>
						<li><Link className="footerLink" to="/buyers">Как сделать заказ</Link></li>
						<li><Link className="footerLink" to="/">Способы оплаты</Link></li>
						<li><Link className="footerLink" to="/delivery">Доставка</Link></li>
						<li><Link className="footerLink" to="/">Возврат товара</Link></li>
						<li><Link className="footerLink" to="/">Возврат денежных средств</Link></li>
					</ul>
				</div>

				<div className="company">
					<h4>Компания</h4>
					<ul>
						<li><Link className="footerLink" to="/about">О нас</Link></li>
						<li><Link className="footerLink" to="/">Реквизиты</Link></li>
						<li><Link className="footerLink" to="/contacts">Контакты</Link></li>
						<li><Link className="footerLink" to="/">Вакансии</Link></li>
					</ul>
				</div>

				<div className="partners">
					<h4>Партнерам</h4>
					<ul>
						<li><Link className="footerLink" to="/">Интернет магазин под ключ</Link></li>
						<li><Link className="footerLink" to="/">Как начать сотрудничество</Link></li>
						<li><Link className="footerLink" to="/">Тарифы и цены</Link></li>
					</ul>
				</div>


				<div className="socialWrapper">
					<h4>Мы в соцсетях</h4>
					<div className="socialIcons">
						<div>
							<Link className="footerLink" to="https://instagram.com/papagrek.com_magazine">
								<img className="size" src={instIcon}/></Link>
						</div>
						<div>
							<Link className="footerLink" to="https://odnoklassniki.ru/papagrek">
								<img className="size" src={okIcon} /></Link>
						</div>
						<div>
							<Link className="footerLink" to="https://pinterest.com/olivesargreek">
								<img className="size" src={pintIcon} /></Link>
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