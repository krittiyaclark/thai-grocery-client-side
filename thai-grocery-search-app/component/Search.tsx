import { FC, useEffect, useState } from 'react'
import { Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap'
import CardList from './CardList'

interface Props {
	children?: React.ReactNode
	dataApi?: any
}

const Search: FC<Props> = () => {
	const [search, setSearch] = useState('')
	const [isLoading, setIsLoading] = useState(true)
	const [errors, setErrors] = useState()
	const [dataApi, setDataApi] = useState({})

	useEffect(() => {
		const API_URL =
			'https://thai-grocery-api.herokuapp.com/api/thai-grocery-product'
		setIsLoading(true)

		async function getData() {
			try {
				const response = await fetch(API_URL)
				const data = await response.json()
				console.log(data)
				setDataApi(data)
				setIsLoading(false)
			} catch (error) {
				setErrors(errors)
			} finally {
				setIsLoading(false)
			}
		}
		getData()
	}, [])

	// console.log(data)
	console.log(isLoading)
	console.log(dataApi)

	if (isLoading) {
		return <p>Loading...</p>
	}
	const handleInput = () => {
		console.log(search)
	}

	return (
		<>
			<InputGroup className='mb-3'>
				<FormControl
					placeholder='Search for Thai Grocery Product'
					aria-label="Recipient's username"
					aria-describedby='basic-addon2'
					onChange={(e) => setSearch(e.target.value)}
				/>
				<Button
					variant='outline-secondary'
					id='button-addon2'
					onClick={() => handleInput()}>
					Button
				</Button>
			</InputGroup>

			<Row>
				<Col md={12}>
					<section>
						<CardList dataApi={dataApi} />
					</section>
				</Col>
			</Row>
		</>
	)
}

export default Search
