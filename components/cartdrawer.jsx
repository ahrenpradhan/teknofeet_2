import { Div, Button, SideDrawer, Icon, Text } from 'atomize';

const CartDrawer = ({ isOpen, onClose }) => {
	return (
		<SideDrawer isOpen={isOpen} onClose={onClose}>
			<Div d='flex' m={{ b: '4rem' }}>
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
			</Div>
		</SideDrawer>
	);
};

export default CartDrawer;