import React from 'react';
import {Switch,Route} from 'react-router-dom'
import Login from './login';
import Register from './register';
import Landingpage from './landingpage';
import Aboutme from './aboutme';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';
import Counter from './counter';


export const Main = ()=>(
	<Switch>
	<Route exact path="/" component={Landingpage}/>
	<Route  path="/login" component={Login}/>
	<Route  path="/register" component={Register}/>
	<Route  path="/aboutme" component={Aboutme}/>
	<Route  path="/resume" component={Resume}/>
	<Route path="/projects" component={Projects}/>
	<Route  path="/contact" component={Contact}/>
	<Route  path="/counter" component={Counter}/>
	

	</Switch>
)
export default Main;