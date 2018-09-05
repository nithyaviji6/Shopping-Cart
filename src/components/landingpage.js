import React,{Component} from 'react';
import ReactTable from 'react-table';
import {DataTable,TableHeader} from 'react-mdl';
import Button from 'react-mdl';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';




 class Landingpage extends Component
 {
    constructor(){
        super();
        this.handleOnClick=this.handleOnClick.bind(this);
                this.handleClick=this.handleClick.bind(this);
    }
    handleOnClick(e){
        e.preventDefault();
        this.props.history.push('/login');
        }
      handleClick(e){
        e.preventDefault();
        this.props.history.push('/register');
        }
 	render(){
       
 		return(
            <div>
            <h1 className="text-center align-self-center">SHEIN ONLINE SHOPPING</h1>
            <h4 className="text-center align-self-center">The thing about shopping is that you never know exactly what you are going to find. 
            A shopping experience can be filled with joyous surprises or unexpected pitfalls. 
            No matter how hard you try, you cannot plan every detail of a shopping trip, and you never know exactly how it will end up.
        
            </h4>
            <button onClick={this.handleOnClick} type="button"className="badge badge-primary m-2"><h4 classname="text-center align-self-center">Login</h4></button>
            <button  onClick={this.handleClick} type="button"  className="badge badge-primary m-2"><h4 className="text-center align-self-center">Register</h4></button>


</div>



        
        );
    }
};
 
            
            
            
        
 export default Landingpage;
 			