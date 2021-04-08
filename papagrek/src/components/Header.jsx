import React from 'react';
import {Link} from 'react-router-dom';
import logo from "../img/icons/logo_transparent.png"

const Header = () => {
	return (
		<div className="header wrapper">
			<div className="header_section">
				<div className="header_logo">
					<Link to="/"><img src={logo}/></Link>
				</div>

				<div className="header_item headerButton"><a href="/catalog.php">Каталог</a></div>
				<div className="header_item headerButton"><a href="/delivery.php">Доставка</a></div>
				<div className="header_item headerButton"><a href="/points.php">Пункты выдачи</a></div>
				<div className="header_item headerButton"><a href="/about.php">О нас</a></div>
				<div className="header_item headerButton"><a href="/contacts.php">Контакты</a></div>

				<div className="header_item headerButton cartWrapper">
					<div>
						<img src="/img/icons/cart.png"/>
						<span id="basket-count">



                    </span>
					</div>

					<a href="/basket.php">Корзина</a>
				</div>

			</div>

			<div className="header_section">


				<div className="header_item headerButton">
					<img src="/img/icons/account.png"/>


				</div>

			</div>
		</div>
	)
}

export default Header