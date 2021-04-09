import React from 'react';
import {Link} from 'react-router-dom';
import logo from "../img/icons/logo_transparent.png";
import account from "../img/icons/account.png";
import cart from "../img/icons/cart.png";

const Header = () => {
	return (
		<div className="header wrapper">
			<div className="header_section">
				<div className="header_logo">
					<Link to="/"><img src={logo}/></Link>
				</div>

				<div className="header_item headerButton"><Link className="headerLink" to="/catalog">Каталог</Link></div>
				<div className="header_item headerButton"><Link className="headerLink" to="/delivery">Доставка</Link></div>
				<div className="header_item headerButton"><Link className="headerLink" to="/points">Пункты выдачи</Link></div>
				<div className="header_item headerButton"><Link className="headerLink" to="/about">О нас</Link></div>
				<div className="header_item headerButton"><Link className="headerLink" to="/contacts">Контакты</Link></div>

				<div className="header_item headerButton cartWrapper">
					<div>
						<img src={cart}/>
						<span id="basket-count">{5}</span>
					</div>
					<Link className="headerLink" to="/basket">Корзина</Link>
				</div>

			</div>

			<div className="header_section">
				<div className="header_item headerButton">
					<img src={account}/>
				</div>
			</div>
		</div>
	)
}
export default Header