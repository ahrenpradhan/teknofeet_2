import React, { useContext, useEffect } from 'react';

import Head from 'next/head';
import Link from 'next/link';

import styles from '../../styles/Home.module.css';
import Header from '../../components/header';
import { ProductCard } from '../../components/card.jsx';
import CartDrawer from '../../components/cartdrawer';

import { Container, Text, Div, Row, Col } from 'atomize';

import { ShopContext } from '../../context/shopcontext';

export default function MarketPlace() {
	const { fetchAllProducts, products, isCartOpen, closeCart, openCart } = useContext(ShopContext);

	useEffect(() => {
		fetchAllProducts();
		console.log(products);
		return () => {};
	}, [fetchAllProducts]);

	if (!products) return <div>loading !!</div>;
	return (
		<Header openCart={openCart}>
			<Head>
				<title>Teknofeet - MarketPlace</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Div h='8vh' />
			<Div
				// className={styles.container}
				// p={{ y: '8vh' }}
				// d='flex'
				h='92vh'>
				<Div p='2rem' flexGrow='1'>
					<Container>
						<ul
							style={{
								display: 'flex',
								flexDirection: 'row',
								flexWrap: 'wrap',
								alignItems: 'stretch',
								justifyContent: 'space-evenly',
								listStyle: 'none',
							}}>
							{[...products, ...products, ...products].map((product) => (
								<li key={product.id} style={{}}>
									<ProductCard product={product} />
									{/* <Text>{product.title}</Text> */}
								</li>
							))}
						</ul>
					</Container>
					<CartDrawer isOpen={isCartOpen} onClose={closeCart} />
				</Div>
			</Div>
		</Header>
	);
}
