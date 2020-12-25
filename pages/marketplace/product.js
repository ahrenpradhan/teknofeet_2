import React, { useContext, useEffect } from 'react'

import { Container, Row, Col, Div, Text } from 'atomize';

import { useRouter } from 'next/router';

import Header from '../../components/header';
import CartDrawer from '../../components/cartdrawer';
import { FormId } from '../../components/popupdialogue';
import { ShopContext } from '../../context/shopcontext'

export default function Product() {
    const router = useRouter();
    const { id } = router.query;
    const {
		fetchProductWithId,
		addItemToCheckout,
		product,
        openCart,
        isCartOpen,
        closeCart,
		toggleIsIdFormOpen,
        userId,
        toggleId,
        isIdFormOpen,
        userDetails
	} = useContext(ShopContext);

    useEffect(() => {
		fetchProductWithId(id);
	}, [fetchProductWithId, id]);
    if (!product.title) return <div>Loading..!!</div>;
    return (
		<Header openCart={openCart} handleClose={toggleIsIdFormOpen} userId={userId}>
			<CartDrawer/>
			<FormId
				isOpen={isIdFormOpen}
				handleClose={toggleIsIdFormOpen}
				handleChange={toggleId}
				userId={userId}
				userDetails={userDetails}
			/>
			<Div h='8vh' />
			<Container p={{t:'2rem'}}>
				{/* Product Page - {id} */}
				<Row>
					<Col>
						<Container>
							<Div
								bgImg={product.images[0].src}
								bgSize='cover'
								bgPos='center center'
								h='32rem'
								rounded='lg'
								// w='16rem'
							/>
						</Container>
					</Col>
					<Col>
						<Container>
							<Text>{product.title}</Text>
							<div
								style={{
									margin: '0.5rem 0 0rem 0',
									borderTop: '1px solid rgb(89 103 128 / 50%)',
									width: '80%',
								}}
							/>
							<Div
								d='flex'
								// h='1rem'
								p='1rem'>
								<Text textWeight={700} p={{ r: '1rem' }}>
									{`MRP: ${product.variants[0].price}`}
								</Text>
								<Text textDecor='line-through'>{`MRP: ${product.variants[0].compareAtPrice}`}</Text>
							</Div>
							<Text>{product.description}</Text>
						</Container>
					</Col>
				</Row>
			</Container>
		</Header>
	);
}