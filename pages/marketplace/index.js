import React, { useContext, useEffect} from 'react'

import Head from 'next/head';
import Link from 'next/link';

import styles from '../../styles/Home.module.css';
import { ProductCard } from '../../components/card.jsx';

import { Container, Text, Div, Row, Col } from 'atomize';

import { ShopContext } from '../../context/shopcontext'


export default function MarketPlace() {
	
	const { fetchAllProducts, products } = useContext(ShopContext)
	
	useEffect(() => {
		fetchAllProducts();
		console.log(products)
		return () =>{}
	}, [fetchAllProducts])
	
	if (!products) return <div>loading !!</div>
	return (
		<div className={styles.container}>
			<Head>
				<title>Teknofeet - MarketPlace</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Container>
				<Row>
					{products.map((product) => (
						<Col key={product.id}>
							<ProductCard product={product} />
							{/* <Text>{product.title}</Text> */}
						</Col>
					))}
				</Row>
			</Container>
		</div>
	);
}