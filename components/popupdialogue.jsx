import React, { useState } from 'react';
import { Div, Button, Modal, Icon, Text, Input } from 'atomize';

const IdInputField = ({ id, handleChange }) => {
	return (
		<Input
			placeholder='ID'
			p={{ x: '2.5rem' }}
			value={id}
			onChange={(e) =>handleChange(e.target.value.split(' ').join(''))}
			prefix={
				<Icon
					name='UserSolid'
					color='warning800'
					size='16px'
					cursor='pointer'
					pos='absolute'
					top='50%'
					left='0.75rem'
					transform='translateY(-50%)'
				/>
			}
		/>
	);
};

const FormId = ({ isOpen, handleClose, handleChange, userId, userDetails }) => {
	const [id, setId] = useState(userId || '');
	return (
		<Modal isOpen={isOpen} onClose={handleClose} align='center' rounded='md'>
			{/* <Icon
				name='Cross'
				pos='absolute'
				top='1rem'
				right='1rem'
				size='16px'
				onClick={handleClose}
				cursor='pointer'
			/> */}
			<Div m={{ b: '4rem' }}>
				{/* <Icon name='AlertSolid' color='warning700' m={{ t: '0.35rem', r: '0.5rem' }} /> */}
				<Text p={{ l: '0.5rem', t: '0.25rem' }} textSize='subheader'>
					Please enter the provided ID :
				</Text>
				<IdInputField id={id} handleChange={setId} />
			</Div>
			<Div d='flex' justify='flex-end'>
				<Button onClick={handleClose} bg='gray200' textColor='medium' m={{ r: '1rem' }}>
					Cancel
				</Button>
				<Button
					disabled={!(id.length>0 && id!=userId)}
					onClick={() => {
						handleChange(id);
						handleClose();
					}}
					bg='info700'>
					Yes, Submit
				</Button>
			</Div>
		</Modal>
	);
};

export { FormId };
