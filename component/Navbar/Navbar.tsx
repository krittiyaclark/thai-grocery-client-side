import React from 'react'
import Link from 'next/link'
import { Navbar, Container, Button } from 'react-bootstrap'
import { IoIosArrowBack } from 'react-icons/io'

import styles from './Navbar.module.css'
interface Props {
	children?: React.ReactNode
	className: string
	page?: any
}

const Navigationbar = ({ className }: Props) => {
	return (
		<Navbar className={className}>
			<Container>
				<Navbar.Toggle />
				<Navbar.Collapse className='justify-content-end'>
					<Navbar.Text>
						<Link href='/'>
							<Button className={styles.btnPrimary}>
								<IoIosArrowBack />
								All Products
							</Button>
						</Link>
					</Navbar.Text>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default Navigationbar
