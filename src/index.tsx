import { createRoot } from 'react-dom/client'
import Layout from 'layout'

document.addEventListener('contextmenu', e => e.preventDefault())

const [app] = document.getElementsByTagName('app')
if (!app) {
	throw new Error('Root element not found')
}

const root = createRoot(app)

root.render(<Layout />)
