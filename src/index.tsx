import { createRoot } from 'react-dom/client'
import { Router } from 'elum-router/react';
import Layout from 'layout'

import "./styles.css";

document.addEventListener('contextmenu', e => e.preventDefault())

const [app] = document.getElementsByTagName('app')
if (!app) {
	throw new Error('Root element not found')
}

createRoot(app).render(
	<Router branch="startup">
		<Layout />
	</Router>
)
