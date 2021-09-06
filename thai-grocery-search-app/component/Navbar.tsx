import React from 'react'
import Link from 'next/link'
import { Navbar, Container } from 'react-bootstrap'
interface Props {
	children?: React.ReactNode
	className: string
}

const Navigationbar = ({ className }: Props) => {
	return (
		<Navbar className={className}>
			<Container>
				<Navbar.Brand href='#home'>LOGO</Navbar.Brand>
				<Navbar.Toggle />
				<Navbar.Collapse className='justify-content-end'>
					<Navbar.Text>
						<Link href='#login'>Login</Link>
					</Navbar.Text>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default Navigationbar

// <nav className={`${className} 'w-full grid grid-cols-2'`}>
// 	<li>Logo</li>
// 	<li>Login</li>
// </nav>
