import { FC, HTMLAttributes } from 'react'
// import { Root } from 'components'
// import { Router, useRouter } from 'elum-router/react'

// import Startup from './struct/Startup/Startup'

// import Popout from 'layout/popout'
// import Modal from 'layout/modal'
// import Game from "./struct/Game/Game";

interface Layout extends HTMLAttributes<HTMLDivElement> {}

const Layout: FC<Layout> = props => {
	// const activeView = useRouter('view')

	return <>s</>

	// return (
	// 	<Router branch='startup'>
	// 		<Root activeView={activeView} popout={<Popout />} modal={<Modal />}>
	// 			<Startup nav={'startup'} />
	// 			{/* <Game nav={"game"} /> */}
	// 		</Root>
	// 	</Router>
	// )
}

export default Layout
