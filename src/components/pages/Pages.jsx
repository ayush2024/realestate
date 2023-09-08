import React from "react"
import Header from "../common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "../home/Home"
import Footer from "../common/footer/Footer"
import About from "../about/About"

import Blog from "../blog/Blog"
import Services from "../services/Services"
import Contact from "../contact/Contact"
import Agent from "../agent/Agent"
import Agency from "../agency/Agency"
import Rent from "../rent/Rent"
import Buy from "../buy/Buy"

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/buy' component={Buy} />
          <Route exact path='/rent' component={Rent} />
          <Route exact path='/agent' component={Agent} />
          <Route exact path='/agency' component={Agency} />
          <Route exact path='/about' component={About} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/blog' component={Blog} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default Pages
