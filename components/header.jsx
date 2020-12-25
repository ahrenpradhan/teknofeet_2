import React, { Component } from 'react';
import { ThemeProvider, Button, Icon, Div, Input } from 'atomize';
import { ShopContext } from '../context/shopcontext';

const theme = {};

const CompanyImage = () => {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' width='269.1' height='56.406' fill='white' viewBox='0 0 269.1 56.406'>
			<g transform='translate(-118 -41)'>
				<g transform='translate(118 41)'>
					<path
						class='a'
						d='M130.2,80.781v-.209l18.657-9.19.02,7.127L136.61,84.566V110.73l-6.407,4.762Z'
						transform='translate(-102.638 -59.086)'></path>
					<path
						class='a'
						d='M120.884,79.886v-.209L96.072,67.547l.018,7.112,18.388,9.012v18.5l6.407,6.109Z'
						transform='translate(-94.677 -58.191)'></path>
					<path
						class='a'
						d='M94.253,62.512l26.888,13.14L145.822,63.49V56.384L121.352,68.411l-27.1-13.066Z'
						transform='translate(-94.253 -55.345)'></path>
				</g>
				<g transform='translate(189.381 46.891)'>
					<path
						class='a'
						d='M193.242,66.763h-5.894V63.668h15.213v3.095h-5.895V82.9h-3.424Z'
						transform='translate(-187.348 -63.177)'></path>
					<path
						class='a'
						d='M215.09,63.668h12.743v3.095h-9.318v4.726h8.831v3.1h-8.831V79.8h9.807v3.1H215.09Z'
						transform='translate(-193.819 -63.177)'></path>
					<path
						class='a'
						d='M241.593,63.668h3.424v8.147h.164l7.959-8.147h4.62l-8.994,8.881,9.59,10.347h-4.811l-8.338-9.45h-.19V82.9h-3.424Z'
						transform='translate(-200.001 -63.177)'></path>
					<path
						class='a'
						d='M270.721,63.668h4.538l9.319,14.285h.052V63.668h3.424V82.9h-4.348L274.2,68.149h-.052V82.9h-3.424Z'
						transform='translate(-206.795 -63.177)'></path>
					<path
						class='a'
						d='M302.433,73.214a11.148,11.148,0,0,1,.76-4.2A9.437,9.437,0,0,1,305.3,65.8a9.279,9.279,0,0,1,3.208-2.051,11.261,11.261,0,0,1,4.088-.719,11.455,11.455,0,0,1,4.128.666,9.018,9.018,0,0,1,3.234,2.023,9.36,9.36,0,0,1,2.12,3.207,11.031,11.031,0,0,1,.76,4.183,10.671,10.671,0,0,1-.76,4.1,9.4,9.4,0,0,1-2.12,3.179,9.668,9.668,0,0,1-3.234,2.077,11.431,11.431,0,0,1-4.128.773,11.244,11.244,0,0,1-4.088-.719,9.155,9.155,0,0,1-5.314-5.2A10.677,10.677,0,0,1,302.433,73.214ZM306.018,73a8.271,8.271,0,0,0,.477,2.852,6.653,6.653,0,0,0,1.345,2.254,6.213,6.213,0,0,0,2.079,1.494,6.527,6.527,0,0,0,2.7.542,6.612,6.612,0,0,0,2.716-.542A6.241,6.241,0,0,0,317.43,78.1a6.714,6.714,0,0,0,1.345-2.254A8.253,8.253,0,0,0,319.249,73a7.484,7.484,0,0,0-.474-2.688,6.685,6.685,0,0,0-1.345-2.185,6.162,6.162,0,0,0-2.094-1.468,6.749,6.749,0,0,0-2.716-.529,6.662,6.662,0,0,0-2.7.529,6.133,6.133,0,0,0-2.079,1.468,6.621,6.621,0,0,0-1.345,2.185A7.5,7.5,0,0,0,306.018,73Z'
						transform='translate(-214.192 -63.028)'></path>
					<path
						class='a'
						d='M338.15,63.668h12.414v3.095h-8.99v5.053h8.476v3.1h-8.476V82.9H338.15Z'
						transform='translate(-222.523 -63.177)'></path>
					<path
						class='a'
						d='M363.341,63.668h12.743v3.095h-9.318v4.726H375.6v3.1h-8.831V79.8h9.807v3.1H363.341Z'
						transform='translate(-228.398 -63.177)'></path>
					<path
						class='a'
						d='M389.844,63.668h12.743v3.095h-9.318v4.726H402.1v3.1h-8.831V79.8h9.807v3.1H389.844Z'
						transform='translate(-234.58 -63.177)'></path>
					<path
						class='a'
						d='M419.691,66.763H413.8V63.668h15.213v3.095h-5.894V82.9h-3.424Z'
						transform='translate(-240.167 -63.177)'></path>
				</g>
				<g transform='translate(186.38 74.581)'>
					<rect class='a' width='197.72' height='0.355'></rect>
				</g>
				<text class='b' transform='translate(192 90)'>
					<tspan x='0' y='0'>
						Perfect Fit, Anytime Anywhere.
					</tspan>
				</text>
			</g>
		</svg>
	);
};

const InputWithRightIcon = () => {
	return (
		<Input
			placeholder='Search'
			minW='16rem'
			p={{ l: '4rem' }}
			bg='gray300'
			hoverBg='white'
			focusBg='white'
			suffix={
				<Button
					pos='absolute'
					onClick={() => console.log('clicked')}
					bg='black300'
					hoverBg='black100'
					w='3rem'
					top='0'
					left='0'
					rounded={{ l: 'md' }}>
					<Icon name='Search' size='20px' color='white' cursor='pointer' />
				</Button>
			}
		/>
	);
};

export default class Header extends Component {
	state = {
		id: 'asdasdsd324431',
	};
	openCart = () => {
		this.props.openCart();
	};
	handleClose = () => {
		this.props.handleClose();
	};
	render() {
		return (
			<ThemeProvider theme={theme}>
				<Div
					pos='fixed'
					top='0'
					right='0'
					h='8vh'
					minW='100%'
					shadow='4'
					bg='black600'
					d='flex'
					align='center'
					justify='space-between'
					p={{ x: '2rem' }}>
					<CompanyImage />
					<Div flexGrow='1' m={{ x: '2rem' }} align='right' d='flex' flexDir='row-reverse'>
						<Div maxW='24rem' flexGrow='1'>
							<InputWithRightIcon />
						</Div>
					</Div>
					<Div d='flex'>
						{this.props.userId ? (
							<Button
								onClick={this.handleClose}
								prefix={<Icon name='UserSolid' size='16px' color='white' m={{ r: '0.2rem' }} />}
								bg='black400'
								hoverBg='black300'
								rounded='circle'
								p={{ r: '1.5rem', l: '1rem' }}
								m={{ r: '1rem' }}
								shadow='1'>
								{`: ${this.props.userId}`}
							</Button>
						) : (
							<Button
								onClick={this.handleClose}
								prefix={<Icon name='UserSolid' size='16px' color='white' m={{ r: '0.2rem' }} />}
								bg='black400'
								hoverBg='black300'
								rounded='circle'
								p={{ r: '1.5rem', l: '1rem' }}
								w='104px'
								m={{ r: '1rem' }}
								shadow='1'>
								Add ID
							</Button>
						)}
						<Button
							prefix={<Icon name='Bag' size='16px' color='black400' m={{ r: '0.5rem' }} />}
							bg='gray300'
							hoverBg='white'
							rounded='circle'
							p={{ r: '1.5rem', l: '1rem' }}
							textColor='black400'
							shadow='1'
							hoverShadow='3'
							onClick={this.openCart}>
							Cart
						</Button>
					</Div>
				</Div>
				{this.props.children}
			</ThemeProvider>
		);
	}
}
