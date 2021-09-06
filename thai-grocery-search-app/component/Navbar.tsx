import React from 'react'

interface Props {
	children?: React.ReactNode
	className: string
}

const Navbar = ({ className }: Props) => {
	return (
		<nav className={`${className} 'w-full grid grid-cols-2'`}>
			<li>Logo</li>
			<li>Login</li>
		</nav>
	)
}

export default Navbar
