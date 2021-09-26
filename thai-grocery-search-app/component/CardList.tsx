import { FC } from 'react'

import { Card, Button, Row, Col } from 'react-bootstrap'

interface Props {
	children?: React.ReactNode
	item?: object
	dataApi: object
}

const CardList: FC<Props> = ({ dataApi }) => {
	console.log(dataApi)
	// If dataApi is undefined or null, return nothing.
	if (!dataApi) return null

	return (
		<Row xs={1} md={2} className='g-4'>
			{Object.entries(dataApi).map(([productName, data]) => {
				console.log(productName, data)
				return (
					<Col key={productName}>
						<Card>
							<Card.Img variant='top' src='holder.js/100px180' />
							<Card.Body>
								<Card.Title>{productName}</Card.Title>
								<Card.Text>{data?.info}</Card.Text>
								<Button variant='primary'>Go somewhere</Button>
								<p>{data?.brand}</p>
								<p>{data?.info}</p>
							</Card.Body>
						</Card>
					</Col>
				)
			})}
		</Row>
	)
}

export default CardList
