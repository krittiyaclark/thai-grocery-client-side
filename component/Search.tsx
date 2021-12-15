import React, { FC, useState } from 'react'
import { Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap'
import CardList from './CardList/CardList'

interface Props {
	children?: React.ReactNode
	event?: any
	data: [string, any][]
}

const Search: FC<Props> = ({ data }) => {
	const [filterData, setFilterData] = useState(data)
	const [productEnter, setProductEnter] = useState('')

	const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
		const searchProduct = event.target.value

		setProductEnter(searchProduct)

		const newFilter = data?.filter(([productName, data]) => {
			return productName.toLowerCase().includes(searchProduct.toLowerCase())
		})

		return newFilter ? setFilterData(newFilter) : setFilterData(data)
	}

	//   const clearInput = () => {
	//     setFilterData([]);
	//   };

	return (
		<>
			<InputGroup className='mb-3'>
				<FormControl
					placeholder='Search for Thai Grocery Product'
					aria-label="Recipient's username"
					aria-describedby='basic-addon2'
					value={productEnter}
					onChange={handleFilter}
				/>
			</InputGroup>

			<Row>
				<Col md={12}>
					<section>
						<CardList filterData={filterData} />
					</section>
				</Col>
			</Row>
		</>
	)
}

export default Search
