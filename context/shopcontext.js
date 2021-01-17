import React, { Component} from 'react';
// import Client from 'shopify-buy';
import Client from '../modules/shopify-buy';

const ShopContext = React.createContext()

// Initializing a client to return content in the store's primary language
// const client = Client.buildClient({
// 	domain: 'teknofeet-test.myshopify.com',
// 	storefrontAccessToken: 'c177da7b56c17aef7aee736c1d1f48af',
// });
const client = Client.buildClient({
	domain: 'sak-design.myshopify.com',
	storefrontAccessToken: '2f4c4f3944ccdf2165c5a95d72156e06',
});
class ShopProvider extends Component {
	state = {
		products: [],
		product: {},
		checkout: {},
		isCartOpen: false,
		isIdFormOpen: false,
		userId: null,
		userDetails: {},
		test: 'test',
		client: client,
		accessToken: null,
	};

	componentDidMount() {
		this.createCheckout();
	}

	createCheckout = async () => {
		const input = {
			email: 'ahrenpradhan@gmail.com',
			password: 'Ahren@1998',
		};
		const accessToken = await client.customer.createAccessToken(input);
		let checkout = await client.checkout.create();
		let checkout2 = await client.checkout.associateCustomer(
			checkout.id,
			accessToken.customerAccessToken.accessToken,
		);
		
		// console.log(checkout);
		this.setState({
			checkout: checkout,
			accessToken: accessToken.customerAccessToken,
			checkout2,
		});
	};

	addItemToCheckout = async (variantId, quantity) => {
		const lineItemsToAdd = [
			{
				variantId,
				quantity: parseInt(quantity, 10),
			},
		];
		// const shippingAddress = {
		// 	address1: 'G1-28, BPTP Parksland',
		// 	address2: 'Sector-89',
		// 	city: 'Faridabad',
		// 	company: null,
		// 	country: 'India',
		// 	firstName: 'Ahren',
		// 	lastName: 'Pradhan',
		// 	phone: '9560490133',
		// 	province: 'Haryana',
		// 	zip: '121002',
		// };
		let checkout = await client.checkout.addLineItems(
			this.state.checkout.id,
			lineItemsToAdd,
		);

		// checkout = await client.checkout.updateEmail(
		// 	this.state.checkout.id,
		// 	'ahrenpradhan@gmail.com',
		// );
		// checkout = await client.checkout.updateShippingAddress(
		// 	this.state.checkout.id,
		// 	shippingAddress,
		// );
		console.log(this.state.accessToken.accessToken);
		// let checkout2 = await client.checkout.associateCustomer(
		// 	this.state.checkout.id,
		// 	this.state.accessToken.accessToken,
		// );
		let client2 = await client.customer.fetch(
			this.state.accessToken.accessToken,
		);
		this.setState({ checkout: checkout, client2 });
	};

	fetchAllProducts = async () => {
		const products = await client.product.fetchAll();
		// console.log('---------------');
		// console.log(products);
		this.setState({ products: products });
	};

	fetchProductWithId = async (id) => {
		const product = await client.product.fetch(id);
		this.setState({ product: product });
	};

	closeCart = () => {
		this.setState({ isCartOpen: false });
	};

	openCart = () => {
		this.setState({ isCartOpen: true });
	};

	toggleId = (id) => {
		this.setState({ userId: id });
	};
	toggleIsIdFormOpen = () => {
		this.setState((prevState) => ({
			isIdFormOpen: !prevState.isIdFormOpen,
		}));
	};

	render() {
		return (
			<ShopContext.Provider
				value={{
					...this.state,
					fetchAllProducts: this.fetchAllProducts,
					fetchProductWithId: this.fetchProductWithId,
					closeCart: this.closeCart,
					openCart: this.openCart,
					addItemToCheckout: this.addItemToCheckout,
					toggleId: this.toggleId,
					toggleIsIdFormOpen: this.toggleIsIdFormOpen,
				}}>
				{this.props.children}
			</ShopContext.Provider>
		);
	}
}

const ShopConsumer = ShopContext.Consumer;

export { ShopConsumer, ShopContext };

export default ShopProvider;