import "./App.css"
import React from 'react'
import Navbar from './Component.Navbar/Navbar'
import Hero from './Component.Navbar/Hero/Hero'
import About from './Component.Navbar/About/About'
import Services from './Component.Navbar/Services/Services'
import MyWork from './Component.Navbar/MyWork/MyWork'
import Contact from './Component.Navbar/Contact/Contact'
import Footer from './Component.Navbar/Footer/Footer'
import { Route, Routes } from "react-router-dom"
import ResponsiveWebDesign from "./Component.Navbar/pages/ResponsiveWebDesign";
import CustomWebsiteDevelopment from "./Component.Navbar/pages/CustomWebsiteDevelopment";
import FrontEndProficiency from "./Component.Navbar/pages/FrontEndProficiency";
import PerformanceOptimization from "./Component.Navbar/pages/PerformanceOptimization";
import APIIntegration from "./Component.Navbar/pages/APIIntegration";
import Myportfolio from "./Component.Navbar/MyWork/Myportfolio";
import Ecommerce from "./Component.Navbar/MyWork/Ecommerce"
import Quizapp from "./Component.Navbar/MyWork/Quizapp"
import Recipeapp from "./Component.Navbar/MyWork/Recipeapp"
import Responsivemenu from "./Component.Navbar/MyWork/Responsivemenu"
import Todolist from "./Component.Navbar/MyWork/Todolist"



const App = () => {
  return (
    <div>
     
      <Routes>
        <Route path="/"
          element={
            <><Navbar />
              <Hero />
              <About />
               <Services />
              <MyWork />
              <Contact />
              <Footer />
              </>} />

              <Route path="/responsive-web-design" element={<ResponsiveWebDesign />} />
                <Route path="/custom-website-development" element={<CustomWebsiteDevelopment />} />
                <Route path="/front-end-proficiency" element={<FrontEndProficiency />} />
                <Route path="/performance-optimization" element={<PerformanceOptimization />} />
                <Route path="/api-integration" element={<APIIntegration />} />

                <Route path="Myportfolio" element={<Myportfolio/>}/>
                <Route path="Ecommerce" element={<Ecommerce/>}/>
                <Route path="Quizapp" element={<Quizapp/>}/>
                <Route path="Recipeapp" element={<Recipeapp/>}/>
                <Route path="Responsivemenu" element={<Responsivemenu/>}/>
                <Route path="Todolist" element={<Todolist/>}/>

      </Routes>
      
    </div>
  );
};

export default App;