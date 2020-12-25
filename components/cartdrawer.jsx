import React, { useContext } from 'react';
import { Div, Button, SideDrawer, Icon, Text , Row, Col} from 'atomize';

import Link from 'next/link';

import { ShopContext } from '../context/shopcontext';

const CartDrawer = () => {
	const { isCartOpen, closeCart, checkout } = useContext(ShopContext);
	return (
		<SideDrawer isOpen={isCartOpen} onClose={closeCart} p={{ x: '2rem', y: '0' }}>
			<Div h='92vh' p={{ y: '2rem' }}>
				<Text tag='h1' textSize='heading'>
					Checkout
				</Text>
				<div
					style={{
						margin: '0.5rem 0 1rem 0',
						borderTop: '1px solid black',
						width: '100%',
					}}
				/>
				<Div d='flex' flexDir='column'>
					{checkout.lineItems &&
						checkout.lineItems.map((item) => (
							<Row key={item.id} m={{b:'1rem'}}>
								<Col>
									<Div
										bgImg={item.variant.image.src}
										bgSize='cover'
										bgPos='center center'
										h='5rem'
										w='5rem'
									/>
								</Col>
								<Col>
									<Text>{item.title}</Text>
									<Text>{item.variant.title}</Text>
									<Text>{item.quantity}</Text>
								</Col>
								<Col>
									<Text>{item.variant.price}</Text>
								</Col>
							</Row>
						))}
				</Div>
			</Div>
			<Div h='8vh' d='flex' justify='flex-end'>
				<Button onClick={closeCart} bg='gray200' textColor='medium' m={{ r: '1rem' }}>
					Empty Cart
				</Button>
				<Link href={checkout.webUrl}>
					<a target="_blank" >
						<Button onClick={closeCart} bg='info700'>
							Proceed to checkout
						</Button>
					</a>
				</Link>
			</Div>
			{/* <Div d='flex' m={{ b: '4rem' }}>
				<Icon name='AlertSolid' color='warning700' />
				<Text p={{ l: '0.5rem', t: '0.25rem' }}>This is the modal</Text>
			</Div>
			<Div d='flex' justify='flex-end'>
				<Button onClick={onClose} bg='gray200' textColor='medium' m={{ r: '1rem' }}>
					Cancel
				</Button>
				<Button onClick={onClose} bg='info700'>
					Submit
				</Button>
			</Div> */}
			<Icon
				name='Cross'
				pos='absolute'
				top='2.3rem'
				right='2rem'
				size='32px'
				onClick={closeCart}
				cursor='pointer'
			/>
		</SideDrawer>
	);
};

export default CartDrawer;