import React, { useState, useContext, useEffect } from 'react';

import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';


import styles from '../../styles/Home.module.css';
import Header from '../../components/header';
import { ProductCard } from '../../components/card.jsx';
import CartDrawer from '../../components/cartdrawer';
import { FormId } from '../../components/popupdialogue';

import { Container, Text, Div, Row, Col } from 'atomize';

import { ShopContext } from '../../context/shopcontext';

export default function MarketPlace() {
	const {
		fetchAllProducts,
		products,
		openCart,
		// user ids
		toggleId,
		toggleIsIdFormOpen,
		userId,
		userDetails,
		isIdFormOpen,
	} = useContext(ShopContext);
	const [routerStat,setRouterStat] = useState(true)
	const router = useRouter();
	const handleRouterStat = (value) => {
		setRouterStat(value || false);
	}
	const handleProductClick = (id) => {
		routerStat &&
			router.push({
				pathname: '/marketplace/product',
				query: {
					id: id
				}
			});
	}
	useEffect(() => {
		fetchAllProducts();
		console.log(products);
		return () => {};
	}, [fetchAllProducts]);

	if (!products) return <div>loading !!</div>;
	return (
		<Header openCart={openCart} handleClose={toggleIsIdFormOpen} userId={userId}>
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
							{products.map((product) => (
								<li key={product.id}>
									<ProductCard
										product={product}
										productRedirect={handleProductClick.bind(this, product.id)}
										handleRouterStat={handleRouterStat.bind(this)}
										routerStat={routerStat}
									/>
								</li>
							))}
						</ul>
					</Container>
					<CartDrawer/>
					<FormId
						isOpen={isIdFormOpen}
						handleClose={toggleIsIdFormOpen}
						handleChange={toggleId}
						userId={userId}
						userDetails={userDetails}
					/>
				</Div>
			</Div>
		</Header>
	);
}
