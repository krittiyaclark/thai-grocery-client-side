import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
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
				<div className='relative bg-blue-500'></div>
				<header className='w-full grid grid-flow-row align-middle text-center'>
					<h1 className='text-3xl'>Thai Grocery Search App</h1>
				</header>

				<section className='w-6/12 grid grid-flow-row align-middle text-center'>
					<Search />
				</section>
			</Layout>
		</div>
	)
}

export default Home
