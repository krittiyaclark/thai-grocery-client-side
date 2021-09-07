import React, { useState } from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap'

const Search = () => {
	const [brandInput, setBrandInput] = useState('')

	const handleInput = () => {
		console.log(brandInput)
	}

	return (
		<InputGroup className='mb-3'>
			<FormControl
				placeholder='Search for Thai Grocery Brands'
				aria-label="Recipient's username"
				aria-describedby='basic-addon2'
				onChange={(e) => setBrandInput(e.target.value)}
			/>
			<Button
				variant='outline-secondary'
				id='button-addon2'
				onClick={() => handleInput()}>
				Button
			</Button>
		</InputGroup>
	)
}

export default Search
