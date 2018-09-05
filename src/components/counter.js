import React,{Component} from 'react';
import {Button} from 'react-mdl';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';


class Counter extends Component
{
	state={
	count:0
		};

	/*onMethod(){
	localstorage.setitem("var","value");
	<button onClick = ()=>{this.onMethod()};
	}*/

	handle=product=>{
	alert("Some product is added");
	this.setState({count:this.state.count+1});
	{
		localStorage.setItem("samsung",this.state.count);
	}

	};

	doHandle=()=>{
	this.handle({id:0});
	};

 
 	render(){
 		return(
 	<div>
 	<h4>Samsung galaxy j7</h4>
 	<img src="./image/cimage1.jpg"/><br/>
 	<span className="badge badge-danger m-2"><h4>Price:$13999</h4></span><br/>
		<span className="badge badge-primary m-2">{this.formatcount()}</span>
	
         
		<button onClick={this.doHandle}>Add Item</button>
		</div>
		
		

	)
	

	}

 	formatcount()
 	{
 	const {count}=this.state;
 	return count===0?<h1>{this.state.count} items added</h1>:count;
 	}
 }
export default  Counter;
