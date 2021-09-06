import { InputGroup, FormControl, Button } from 'react-bootstrap'

const Search = () => {
	return (
		<InputGroup className='mb-3'>
			<FormControl
				placeholder='Search for Thai Grocery Brands'
				aria-label="Recipient's username"
				aria-describedby='basic-addon2'
			/>
			<Button variant='outline-secondary' id='button-addon2'>
				Button
			</Button>
		</InputGroup>
	)
}

export default Search
