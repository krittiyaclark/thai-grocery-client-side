import React from 'react'

interface Props {
	children?: React.ReactNode
	className: string
}

const Footer = ({ className }: Props) => {
	return (
		<footer className={`${className}'container'`}>
			Built by{' '}
			<span>
				<a href='https://krittiya-clark.netlify.app' target='_blank'>
					Krittiy Clark
				</a>
			</span>
		</footer>
	)
}

export default Footer
