import React, { Component} from 'react';
import Client from 'shopify-buy';

const ShopContext = React.createContext()

// Initializing a client to return content in the store's primary language
const client = Client.buildClient({
	domain: 'teknofeet-test.myshopify.com',
	storefrontAccessToken: 'c177da7b56c17aef7aee736c1d1f48af',
});

class ShopProvider extends Component {
	state = {
		products: [],
		product: {},
		checkout: {},
		isCartOpen: false,
		test: 'test',
		client: client,
	};

    componentDidMount() {
        this.createCheckout();
    }

    createCheckout = async () => {
        const checkout = await client.checkout.create();
        // console.log(checkout);
        this.setState({checkout:checkout})
    };

    addItemToCheckout = async (variantId, quantity) => {
        const lineItemsToAdd = [{
            variantId,
            quantity:parseInt(quantity,10)
        }]
        const checkout = await client.checkout.addLineItems(this.state.checkout.id, lineItemsToAdd)
        this.setState({ checkout: checkout });
    };

    fetchAllProducts = async () => {
        const products = await client.product.fetchAll()
        // console.log('---------------');
		// console.log(products);
        this.setState({ products: products });
    };

    fetchProductWithId = async (id) => {
        const product = await client.product.fetch(id);
		this.setState({ product: product });
    };

    closeCart = () => { this.setState({ isCartOpen: false})};
	
    openCart = () => { this.setState({ isCartOpen: true })};

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
                }}
            >
                {this.props.children}
            </ShopContext.Provider>
        );
	}
}

const ShopConsumer = ShopContext.Consumer;

export { ShopConsumer, ShopContext };

export default ShopProvider;