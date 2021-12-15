import { FC } from 'react'

import styles from './Wrapper.module.css'

interface Props {
	children?: React.ReactNode
}

const Wrapper: FC<Props> = ({ children }) => {
	return <div className={styles.container}>{children}</div>
}

export default Wrapper
