import { FC } from 'react'
import Head from 'next/head'
import { GetStaticPropsContext } from 'next'

import styles from './product.module.css'

import Layout from '../../component/Layout/Layout'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Wrapper from '../../component/Wrapper/Wrapper'
import Navigationbar from '../../component/Navbar/Navbar'

interface Props {
	product?: any
	data?: object
	context?: any
	page?: any
}

const Product: FC<Props> = ({ product, page }) => {
	return (
		<Wrapper>
			<Head>
				<title>Thai Grocery Search App</title>
				<meta
					name='description'
					content='Thai Grocery Search App is a search application of Thai grocery with Thai grocery product with brand, info, ingredients, weight, and price.'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Layout>
				{!page && <Navigationbar className='container' page />}
				<section>
					<Container className='py-5'>
						<Row>
							<Col md={4}>
								<aside className='text-center'>
									<figure>
										<img
											className={styles.image}
											src={product?.data?.image}
											alt={product?.data?.brand}
										/>
									</figure>
									<figcaption
										className={`${styles.capitalize} ${styles.figcaption}`}>
										Credit: {product?.data?.productSource}
									</figcaption>
								</aside>
							</Col>
							<Col md={8}>
								<aside>
									<h2 className={styles.capitalize}>
										{product?.data?.product}
									</h2>

									<p>
										<span className={styles.capitalize}>
											<strong>Product Info: &nbsp;</strong>
											{product?.data?.info}
										</span>
									</p>
									<p>
										<span className={styles.capitalize}>
											<strong>Ingredients &nbsp;</strong>
											{product?.data?.ingredients}
										</span>
									</p>
									<p>
										<span className={styles.capitalize}>
											<strong>Brand: &nbsp;</strong>
											{product?.data?.brand}
										</span>
									</p>
									<p>
										<span className={styles.capitalize}>
											<strong>Price: &nbsp;</strong>${product?.data?.price}
										</span>
									</p>
									<p>
										<span className={styles.capitalize}>
											<strong>Size: &nbsp;</strong>
											{product?.data?.size}
										</span>
									</p>
									<p>
										<span className={styles.capitalize}>
											<strong>Weight: &nbsp;</strong>
											{product?.data?.weight}
										</span>
									</p>
									<p>
										<span className={styles.capitalize}>
											<a href={product?.data?.buyProduct} target='_blank'>
												<Button className='btnPrimary'>Buy This Product</Button>
											</a>
										</span>
									</p>
								</aside>
							</Col>
						</Row>
					</Container>
				</section>
			</Layout>
		</Wrapper>
	)
}

export default Product

export const getStaticPaths = async () => {
	const response = await fetch(
		'https://thai-grocery-api.herokuapp.com/api/thai-grocery-product'
	)
	const data = await response.json()
	const paths = Object.entries(data).map(([productName, data]) => {
		return {
			params: { product: productName },
		}
	})

	return {
		paths,
		fallback: false,
	}
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
	const id = context?.params?.product

	// console.log(id)

	const response = await fetch(
		`https://thai-grocery-api.herokuapp.com/api/thai-grocery-product/${id}`
	)

	const data = await response.json()

	if (!data) {
		return {
			notFound: true,
		}
	}

	return {
		props: { product: { data } },
	}
}
