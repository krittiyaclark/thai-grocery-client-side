import { FC } from 'react'
import Link from 'next/link'

import { Image, Button, Row, Col } from 'react-bootstrap'
import styles from './CardList.module.css'

interface Props {
	children?: React.ReactNode
	item?: object
	filterData: [string, any][]
}

const CardList: FC<Props> = ({ filterData }) => {
	// If dataApi is undefined or null, return nothing.
	if (!filterData) return null

	return (
		<>
			{filterData
				.filter(([productName, data]) => productName !== 'unknown')
				.map(([productName, data]) => {
					return (
						<article key={productName} className='py-5'>
							<Row className='g-4'>
								<Col sm={4}>
									<figure>
										<Image
											rounded
											src={data?.image}
											className={styles.cardImg}
										/>
									</figure>
								</Col>
								<Col sm={8}>
									<h2 className={styles.productTitle}>
										{productName.replace(/-/g, ' ')}
									</h2>
									<p>
										<span className={styles.strong}>Product Info:</span>{' '}
										{data?.info}
									</p>
									<p className={styles.capitalize}>
										<span className={styles.strong}>Brand:</span> {data?.brand}
									</p>
									<Link href={`/product/${productName}`} passHref>
										<Button className='btnPrimary'>Product Detail</Button>
									</Link>
								</Col>
							</Row>
						</article>
					)
				})}
		</>
	)
}

export default CardList
