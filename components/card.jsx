import React, { useState, useContext } from 'react';
import { ThemeProvider, Div, Text, Button, Icon, Container } from 'atomize';

import { ShopContext } from '../context/shopcontext';

const theme = {
	shadows: {
		'new-shadow': '0 16px 24px -2px rgba(0, 0, 0, 0.08)',
	},
};

function ProductCard(props) {
	const { availableforSale, description, images, title, variants } = props.product;
	const { productRedirect, handleRouterStat, routerStat } = props;
	const { addItemToCheckout } = useContext(ShopContext);
	const [onHover, setOnHover] = useState(false);
	const toggleHover = (value) => {
		setOnHover(value || false);
	};
	return (
		<ThemeProvider theme={theme}>
			<Container
				p={{ x: '0rem', y: '0rem' }}
				m={{ y: '1rem' }}
				shadow='new-shadow'
				rounded='lg'
				cursor='pointer'
				w='fit-content'
				hoverShadow='4'
				onMouseOver={() => {
					!onHover && toggleHover(true);
				}}
				onMouseEnter={() => {
					!onHover && toggleHover(true);
				}}
				onMouseLeave={() => {
					onHover && toggleHover(false);
				}}
				onClick={productRedirect}>
				<Div h='12rem' rounded={{ tl: 'lg', tr: 'lg' }} w='16rem' bgImg={images[0].src} bgSize='cover' />
				<Div d='flex' w='16rem' align='center' justify='center' p={{ x: '1rem', y: '1rem' }} pos='relative'>
					<Div h='4rem' flexGrow='1'>
						<Text tag='h3' textSize='title'>
							{title || 'No name'}
						</Text>
						<Text>{description}</Text>
					</Div>
					{onHover ? (
						<Button
							// pos='absolute'
							h='2.5rem'
							w='2.5rem'
							bg='info700'
							hoverBg='info600'
							rounded='circle'
							// m={{ r: '1rem' }}
							shadow='2'
							onMouseOver={() => {
								routerStat && handleRouterStat(false);
							}}
							onMouseEnter={() => {
								routerStat && handleRouterStat(false);
							}}
							onMouseLeave={() => {
								!routerStat && handleRouterStat(true);
							}}
							onClick={() => {
								console.log('btn');
							}}
							hoverShadow='4'
							onClick={() => addItemToCheckout(variants[0].id,1)}>
							<Icon name='Plus' color='white' />
						</Button>
					) : (
						<Div h='2.5rem' w='2.5rem'>
							{/* <Text>
                                        {variants[0].price}
                                    </Text>
                                    <Text>
                                        {variants[0].compareAtPrice}
                                    </Text> */}
						</Div>
					)}
				</Div>
				<Div
					d='flex'
					// h='1rem'
					p='1rem'>
					<Text textWeight={700} p={{ r: '1rem' }}>
						{`MRP: ${variants[0].price}`}
					</Text>
					<Text textDecor='line-through'>{`MRP: ${variants[0].compareAtPrice}`}</Text>
				</Div>
			</Container>
		</ThemeProvider>
	);
}

export { ProductCard };
