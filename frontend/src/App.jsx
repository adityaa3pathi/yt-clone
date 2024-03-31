import { useState } from 'react'
import Header from './components/Header.jsx'
import { Provider } from 'react-redux'
import Body from './components/Body1.jsx'
import store from "./utils/Store.js"
import Hero from './components/Hero.jsx'
import WatchPage from './WatchPage.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"


const appRouter = createBrowserRouter([{
    path: "/",
    element: <Body/>,
    children: [
      {
        path: "/",
        element: <Hero/>
      },
      {
        path: "watch",
        element: <WatchPage/>
      }
    ]
    
}])

function App() {
   

  return (
    <Provider store={store}>
    <>
      <Header/>
      <RouterProvider router={ appRouter }/>
       </>
    </Provider>
  )
}

export default App
