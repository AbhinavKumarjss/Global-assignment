import Dashboard from "./components/Dashboard/Dashboard";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Siderbar/Sidebar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from "react-redux";
import './App.css'
import Upload from "./components/Upload/Upload";
import Login from "./components/Login/Login";
import Footer from "./components/Footer/Footer";
import {store} from "./components/context/store.ts"
export default function App() {
  return (
    <div className="flex w-full h-[100vh] bg-white dark:bg-[var(--color-darkgray)]">

          <Provider store={store}>

          <Router>
  
            <Routes>
              <Route path='/' element={
                <>
                  <Sidebar />
                  <div className="page-wrapper-sub flex max-h-screen flex-col w-full dark:bg-[var(--color-darkgray)]">
                    <div className="page-wrapper-sub flex flex-col w-full h-full dark:bg-darkgray">
                      <Navbar />
                      <Dashboard />
                      <Footer/>
                    </div>
                  </div>
                </>
              } />
              <Route path='/upload' element={
                <>
                  <Sidebar />
                  <div className="page-wrapper-sub flex max-h-screen flex-col w-full dark:bg-[var(--color-darkgray)]">
                    <div className="page-wrapper-sub flex flex-col w-full h-full dark:bg-darkgray">
                      <Navbar />
                      <Upload />
                      <Footer/>
                    </div>
                  </div>
                </>
              } />
              <Route path='auth/login' element={<Login/>}/>
            </Routes>
          </Router>
              </Provider>
    </div>
  )
}
