import React, { ReactNode } from 'react'
import Footer from './Footer'
import Navigationbar from './Navbar'

interface Props {
	// any props that come into the component
	children: ReactNode
	className?: string
}

const Layout = ({ children }: Props) => {
	return (
		<>
			<Navigationbar className='container' />
			<main>{children}</main>
			<Footer className='container' />
		</>
	)
}

export default Layout
