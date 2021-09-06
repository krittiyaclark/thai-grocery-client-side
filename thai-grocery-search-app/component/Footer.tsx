import React from 'react'

interface Props {
	children?: React.ReactNode
	className: string
}

const Footer = ({ className }: Props) => {
	return (
		<footer className={`${className}'container'`}>
			Built by Krittiy Clark
		</footer>
	)
}

export default Footer
