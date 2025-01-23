import React from "react"
import ReactDOM from "react-dom/client"
import App from "./app/routes/routes"
import reportWebVitals from "./reportWebVitals"
import { BrowserRouter } from "react-router-dom"
import "./assets/styles/global.css"
import "./assets/styles/reset.css"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
)

reportWebVitals()
