import React from 'react'
import Category from "./Category";
import Item, {WithURLItemContainerComponent} from "./Item";

const ItemBlock = () => {
	return (
		<div className="itemBlock">
			<Category/>
			<WithURLItemContainerComponent/>
		</div>
	)
}

export default ItemBlock