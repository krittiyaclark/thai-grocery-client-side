import { FC } from 'react'
import Head from 'next/head'
import { Container, Row, Col } from 'react-bootstrap'
import Layout from '../component/Layout/Layout'
import Search from '../component/Search'

import Wrapper from '../component/Wrapper/Wrapper'

interface Props {
	children?: React.ReactNode
	data: [string, any][]
}

export async function getServerSideProps() {
	const res = await fetch(
		'https://thai-grocery-api.herokuapp.com/api/thai-grocery-product'
	)
	const data = await res.json()

	return { props: { data: Object.entries(data) } }
}

const Home: FC<Props> = ({ data }) => {
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
				<Container>
					<Row>
						<Col md={12}>
							<section className='py-5'>
								<Search data={data} />
							</section>
						</Col>
					</Row>
				</Container>
			</Layout>
		</Wrapper>
	)
}

export default Home
