import path from 'path'
import Express from 'express'
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
import counterApp from './reducers'
import App from './cointainers/App'

const app = Express()
const port = 3000

// Serve static files
app.use('./static', Express.static('static'))

// This is fried every time the sever side receives a request
app.use(handleRender)

const handleRender = (req, res) => {
    // Create a new Redux store instance
    const store = createStore(counterApp)

    // Render the component to a string
    const html = renderToString(
        <Provider store={store}>
            <App />
        </Provider>
    )

    // Grab the initial state from our Redux store
    const preloadedState = store.getState()

    // Send the rendered page back to the client
    res.send(renderFullPage(html, preloadedState))
}

const renderFullPage = (html, preloadedState) => {

}

app.listen(port)