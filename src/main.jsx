import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css"
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux'
import { store } from './app/store.js'
import {QueryClient,QueryClientProvider} from "@tanstack/react-query"
const queryClient=new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>,
  </Provider>
)
