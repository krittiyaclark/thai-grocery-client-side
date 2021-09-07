import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../component/Layout'
import Search from '../component/Search'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Thai Grocery Search App</title>
				<meta
					name='description'
					content='Thai Grocery Search App is a search application of Thai grocery with Thai grocery product with brand, info, ingredients, weight, and price.'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Layout>
				<header className='align-middle text-center'>
					<h1 className='text-lg'>Thai Grocery Search App</h1>
				</header>

				<section className='py-5'>
					<Search />
				</section>
			</Layout>
		</div>
	)
}

export default Home
