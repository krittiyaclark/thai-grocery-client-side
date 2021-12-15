import React, { ReactNode } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import Footer from '../Footer'
import styles from './Layout.module.css'

interface Props {
	// any props that come into the component
	children: ReactNode
	className?: string
}

const Layout = ({ children }: Props) => {
	return (
		<>
			<section className={`${styles.background} ${styles.header}`}>
				<Container>
					<Row>
						<Col md={12}>
							<header
								className={`${styles.header} align-middle d-flex justify-content-center align-items-center`}>
								<h1 className={`${styles.title} text-lg`}>
									Thai Grocery Search App
								</h1>
							</header>
						</Col>
					</Row>
				</Container>
			</section>
			<main>{children}</main>
			<Footer className='container' />
		</>
	)
}

export default Layout
