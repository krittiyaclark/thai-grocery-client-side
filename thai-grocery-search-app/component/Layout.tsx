import React, { ReactNode } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

interface Props {
	// any props that come into the component
	children: ReactNode
	className?: string
}

const Layout = ({ children }: Props) => {
	return (
		<>
			<Navbar className='container' />
			<main>{children}</main>
			<Footer className='container' />
		</>
	)
}

export default Layout
