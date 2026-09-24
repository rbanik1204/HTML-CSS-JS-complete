import {StrictMode} from 'react'
import {ReactDOM} from 'react-dom/client'
import App from './App.jsx'
const container = document.getElementById("id")
//Initialize react's concurrent rendering engine on that root node
const root = ReactDOM.createRoot(container)
root.render(
    <StrictMode>
        <App/>
    </StrictMode>
)