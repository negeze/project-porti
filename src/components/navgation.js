import React from 'react'
import logo from '../image/deve.PNG'
import Home from '../dsply/Home'
import Games from '../dsply/Games'
import Feed from '../dsply/Feed'
import Tournaments from '../dsply/Tournaments'
import Spaces from '../dsply/Spaces'
import Login from '../dsply/Login'
import Header from './Header'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function navgation() {
    return (


 <div className="">
<Router>
    <Header/>
    <Routes>
    <Route exact path="/" component={Home} />
    <Route exact path="/Games" component={Games} />
    <Route exact path="/Feed" component={Feed} />
    <Route exact path="/Tournaments" component={Tournaments} />
    <Route exact path="/Spaces" component={Spaces} />
    <Route exact path="/Login" component={Login} />
    <Route exact path="/Header" component={Header} />
    </Routes>
</Router>

        </div>
    )
}

export default navgation


