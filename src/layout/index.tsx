import { FC, HTMLAttributes } from 'react'
import { Root } from 'components'
import { useRouter } from 'elum-router/react'

import Startup from './struct/Startup/Startup'

import Popout from 'layout/popout'
import Modal from 'layout/modal'
import Spin from "./struct/Spin/Spin";

interface Layout extends HTMLAttributes<HTMLDivElement> { }

const Layout: FC<Layout> = () => {
	const activeView = useRouter('view')

	return (
		<Root activeView={activeView} popout={<Popout />} modal={<Modal />}>
			<Startup nav={"startup"} />
			<Spin nav={"spin"} />
		</Root>
	)
}

export default Layout
