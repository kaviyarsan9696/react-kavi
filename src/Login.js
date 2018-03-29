import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo1 from './logo1.png';
import './Login.css'

  //import  { Redirect} from 'react-router-dom';
import Table from './Table';
// import {BrowserRouter , Route} from 'react-router-dom';
class Login  extends Component{
constructor(){
	super();
	this.state={
		uname:"",
		psw:"",
		redirect:false,

	};
	 this.onChange = this.onChange.bind(this)
	 this.onSubmit = this.onSubmit.bind(this)
}
onChange(e) {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

onSubmit(e){
	 e.preventDefault();
	 this.setState({"user": e.target.value});
        // const data = new FormmData(e.target);
       
        const data =this.state;
        const name = data.uname;
        const pass =data.psw;
        console.log(name);
        console.log(pass);
         var url = "/api/login/"+data.uname+'/'+data.psw;
console.log(data);
        fetch(url,  
        	{method:"get",	
        	 
        
			
		})
    
          .then((response) => {

    return response.json()
   
}).then((result) => {
  
 
  this.setState({
       name:result.user_name,
  })
  this.props.history.push({
  pathname:'/Table',
  state:{name:this.state.name}

  });
  alert('welcom:'+ name);
  console.log(name);
//   var data = result;
//   this.setState({
   
// redirect:true,
   
//   });
//    if (result) {
//    this.props.history.push('/Table');
//   } else
  
//   console.log(result);
});


  //return <Redirect to='/Table'/>
}
render(){
	return(
<div>
<header>
	<img src={logo1} alt=""/>
</header>
<hr/>
<div id="id01" className="modal">
  
  <form className="modal-content animate"  onSubmit={this.onSubmit} method="post">
    <div className="container">
      <label className="label"><b>Username</b></label>
      <input type="text" className="input" placeholder="Enter Username" name="uname" id="uname" onChange={this.onChange} autoComplete="off" />
      <br/>

      <label className="label"><b>Password</b></label>
      <input type="password" className="input" placeholder="Enter Password" name="psw"  onChange={this.onChange} id="pswd" />
        
      <input type="submit" name="" id="button" value="LOGIN" />
      <label className="label">
        <input type="checkbox"/> Remember me
      </label>
    </div>
  </form>
</div>
</div>
		);
	}
}
export default Login;