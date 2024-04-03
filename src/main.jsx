import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Header from "./containers/header/Header"
import Footer from "./containers/footer/Footer"
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Projects from "./pages/projects/Projects"
import Error from "./pages/error/Error"
import App from "./app/App"
import { store } from './app/store'
import { Provider } from 'react-redux'
import "./main.scss"

const cursor = document.querySelector('.cursor')

document.addEventListener('mousemove', e => {
  cursor.setAttribute('style', 'top:'+(e.pageY - 7)+"px; left:"+(e.pageX - 7)+"px;")
})

document.addEventListener('click', () => {
  cursor.classList.add('expand')

  setTimeout(() => {
    cursor.classList.remove("expand")
  }, 500)
})

const router = createBrowserRouter([
  {
    path: "/myportfolio/",
    element: <App />,
    children: [
      {
        path: "/myportfolio/",
        element: <><Header/><Home/><Footer/></>,
      },
      {
        path: "/myportfolio/about",
        element: <><Header/><About/><Footer/></>,
      },
      {
        path: "/myportfolio/projects",
        element: <><Header/><Projects/><Footer/></>,
      },
      {
        path: "/myportfolio/*",
        element: <><Header/><Error/><Footer/></>,
      },
    ]
  }  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
