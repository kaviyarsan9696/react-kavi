import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

// import  { BrowserRouter,Route } from 'react-router-dom';
import logo1 from './logo1.png';
class Kavi extends Component {

constructor(){
	super();
	this.state={
		month:"",emp_id:"",emp_name:"",emp_des:"",target1:"",achived1:"",key1:"",target2:"",achived2:"",ie1:"",ee1:"",aoq1:"",
		target3:"",achived3:"",ie2:"",ee2:"",aoq2:"",target4:"",achived4:"",key2:"",target5:"",achived5:"",key3:"",competencies1:"",
		competencies2:"",competencies3:"",competencies4:"",competencies5:"",key_achievement:"",quantity_feedback:"",item:"",date:"",plan_achieve:"",
		item1:"",date1:"",plan_achieve1:"",item2:"",date2:"",plan_achieve2:"",item3:"",date3:"",plan_achieve3:"",item4:"",date4:"",plan_achieve4:"",
		reviewer_feedback:"",signature:"",
		redirect:false,
		data:""
	};
	  this.onChange = this.onChange.bind(this)
	  this.onSubmit = this.onSubmit.bind(this)	
	  this.onClick=this.onClick.bind(this)  
}
   onChange(e) {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    }
 
    onClick(e){
    	this.setState({"user": e.target.value});
    	//console.log(this.state.user);
  		const user =e.target.value;
    	var url = "/api/user/"+user;
    	 console.log(user);
    	fetch(url,{
    		method:"get",

    	})
    .then((response) => {

    return response.json()
   
}).then((result) => {
	
  var data = result;	
  // console.log(result);
   this.setState({
   	id:data[0].Emp_id,
   	name:data[0].Emp_name,
   	designation:data[0].Designation
   });
  
  
   console.log(data);
     });
    }
    
    onSubmit(e) {
        e.preventDefault();
        const data = new FormData(e.target);
         //  const {month,emp_id,emp_name, emp_des, target1, achived1,key1, target2, achived2, ie1, ee1, aoq1,
		// target3, achived3, ie2, ee2, aoq2, target4, achived4, key2, target5, achived5, key3, competencies1,
		// competencies2, competencies3, competencies4, competencies5, key_achievement, quantity_feedback, item, date, plan_achieve,
		// item1, date1, plan_achieve1, item2, date2, plan_achieve2, item3, date3, plan_achieve3, tem4, date4, plan_achieve4,
		// // reviewer_feedback,signature}
		//  = this.state;
console.log(data);

        var url = "/api/home";

        fetch(url,  
        	{method:"post",	

        	body:data,
		});
		// .then((response) => {


  //           if(JSON.parse(response.text).Status=== 'Success') {

               

  //               this.setState({ redirect: true });
  alert("data saved Successfully");
  window.location.reload();


  //           }
  //           console.log("sewfgsgn");
  //       });
    }
    function(){
    	this.props.push('/Login');
    }
	render() {
		// var data=this.state.data;
		return (
			<div>
			<header>
				<img src={logo1} alt=""/>
			</header>
     <h3>welcome:  </h3>
     <form method="get">
     	<button id="btn" type="submit" onSubmit={this.function}>LOGOUT</button>
     </form>
     
			<form method="post" action="" id="form" onSubmit={this.onSubmit}>
<table>
<thead>
	<tr className="hide">
		<th></th>
		<th></th>
		<th></th>
		<th></th>
		<th></th>
		<th></th>

	</tr>
	</thead>
	<tbody>
	<tr>
		<td className="bg">Feedback for the Month of:</td>

		<td colSpan={5}><input type="" name="month" id="month" className="Progress" onChange={this.onChange}/></td>	
	</tr>
		
	<tr>
		<td className="bg">Employee ID:</td>
		<td colSpan={5}><input type="" name="emp_id" id="id" className="sd" onChange={this.onChange} />{this.state.id}</td>
	</tr>	
	<tr>
		<td className="bg">Employee Name:</td>
		<td colSpan={5}> <input type="" name="emp_name" id="name" className="ss" onChange={this.onChange}/>{this.state.name}  </td>
	</tr>
	<tr>	
		<td className="bg" >Designation:</td>
	    <td colSpan={5}><input type="" name="emp_des" id="designation" className="sf" onChange={this.onChange}/>{this.state.designation}</td>
	</tr>
	
		<tr className="head">
		<td className="bghead" align="center">KRAs</td>
		<td className="bghead" align="center">Target</td>
		<td className="bghead" align="center">Achieved</td>
		<td colSpan="3" className="bghead" align="center">Trends noticed/key area to focus/Reasons</td>
	</tr>
	<tr>
		<td className="bg">Quality</td>
		<td><input type="text" name="target1" id="target1"  className="Target" onChange={this.onChange}/></td>
		<td><input type="text" name="achived1" id="achived1" className="Target" onChange={this.onChange}/></td>
		<td colSpan="3"><input type="text" className="Achieved" id="key1" name="key1" onChange={this.onChange}/></td>
	</tr>
	<tr>
		<td className="bg">Revision</td>
		<td><input type="text" className="Target" id="target2" name="target2" onChange={this.onChange}/></td>
		<td><input type="text" className="Target" id="achived2" name="achived2" onChange={this.onChange}/></td>
		<td><label>IE:</label><input type="text" id="ie1" name="ie1" className="eee" onChange={this.onChange}/></td>
		<td><label>EE:</label><input type="text" id="ee1" name="ee1" className="eee" onChange={this.onChange}/></td>
		<td><label>AOQ:</label><input type="text" id="aoq1" name="aoq1" className="eee" onChange={this.onChange}/></td>
	</tr>
	<tr>
		<td className="bg">New Order</td>
		<td><input type="text" className="Target" id="target3" name="target3" onChange={this.onChange}/></td>
		<td><input type="text" className="Target" id="achived3" name="achived3" onChange={this.onChange}/></td>
		<td><label>IE:</label><input type="text" id="ie2" name="ie2" className="eee" onChange={this.onChange}/></td>
		<td><label>EE:</label><input type="text" id="ee2" name="ee2" className="eee" onChange={this.onChange}/></td>
		<td><label>AOQ:</label><input type="text" id="aoq2" name="aoq2" className="eee" onChange={this.onChange}/></td>
	</tr>
	<tr>
		<td className="bg">Productivity</td>
		<td><input type="text" className="Target" id="target4" name="target4" onChange={this.onChange}/></td>
		<td><input type="text" className="Target" id="achived4" name="achived4" onChange={this.onChange}/></td>
		<td colSpan="3"><input type="text" className="Achieved" id="key2" name="key2" onChange={this.onChange}/></td>
	</tr>
	<tr>
		<td className="bg">Unplanned Leaves</td>
		<td><input type="text" className="Target" id="target5" name="target5" onChange={this.onChange}/></td>
		<td><input type="text" className="Target" id="achived5" name="achived5" onChange={this.onChange}/></td>
		<td colSpan="3"><input type="text" className="Achieved" id="key3" name="key3" onChange={this.onChange}/></td>
	</tr>
	<tr>
		<td className="bghead" align="center">Competencies </td>
		<td colSpan="5" className="bghead" align="center">Progress made/Feedback from Supervisor/Area to focus</td>
	</tr>
	<tr>
		<td><input type="text" name="competencies1" id="competencies1" className="Compet" onChange={this.onChange}/></td>
		<td colSpan="5"><input type="" name="supervisor1" id="supervisor1" className="Progress" onChange={this.onChange}/></td>
	</tr>
	<tr>
		<td><input type="text" name="competencies2" id="competencies2" className="Compet" onChange={this.onChange}/></td>
		<td colSpan="5"><input type="" name="supervisor2" id="supervisor2" className="Progress" onChange={this.onChange}/></td>
	</tr>
	<tr>
		<td><input type="text" name="competencies3" id="competencies3" className="Compet" onChange={this.onChange}/></td>
		<td colSpan="5"><input type="" name="supervisor3" id="supervisor3" className="Progress" onChange={this.onChange}/></td>
	</tr>
	<tr>
		<td><input type="text" name="competencies4" id="competencies4" className="Compet" onChange={this.onChange}/></td>
		<td colSpan="5"><input type="" name="supervisor4" id="supervisor4" className="Progress" onChange={this.onChange}/></td>
	</tr>
	<tr>
		<td><input type="text" name="competencies5" id="competencies5" className="Compet" onChange={this.onChange}/></td>
		<td colSpan="5"><input type="" name="supervisor5" id="supervisor5" className="Progress" onChange={this.onChange}/></td>
	</tr>
	<tr>
		<td colSpan="6" align="center" className="bghead" >Key achievements/highlights during the month (also follow up on previous months action items)</td>
	</tr>
	<tr>
		<td colSpan="6"><textarea name="key_achievement" id="key" rows="6" cols="160" onChange={this.onChange}></textarea></td>
	</tr>
	<tr>
		<td colSpan="6" align="center" className="bghead">Quantitative and Qualitative feedback from Supervisor/Manager for the review month</td>
	</tr>
	<tr>
		<td colSpan="6"><textarea name="quantity_feedback" id="quantity" rows="6" cols="160" onChange={this.onChange}></textarea></td>
	</tr>
	<tr>
		<td  colSpan="6" align="center" className="bghead">Action items discussed during the meeting</td>
	</tr>
	<tr>
		<td className="bghead" align="center">Action item</td>
		<td className="bghead" align="center">Target date</td>
		<td colSpan="5" className="bghead" align="center">Plan to achieve the target</td>
	</tr>
	<tr>
		<td><input type="text" name="item" id="item" className="Compet" onChange={this.onChange}/></td>
		
		<td><input type="text" name="date" id="date" className="Compet" onChange={this.onChange}/></td>
		<td colSpan="5"><input type="text" id="plac_achieve" name="plan_achieve" className="Progress1" onChange={this.onChange}/></td>
	</tr>
	<tr>
		<td><input type="text" name="item1" id="item1" className="Compet" onChange={this.onChange}/></td>
		<td><input type="text" name="date1" id="date1" className="Compet" onChange={this.onChange}/></td>
		<td colSpan="5"><input type="text" name="plan_achieve1" id="plan_achieve1" className="Progress1" onChange={this.onChange}/></td>
	</tr>
	<tr>
		<td><input type="text" name="item2" id="item2" className="Compet" onChange={this.onChange}/></td>
		<td><input type="text" name="date2" id="date2" className="Compet" onChange={this.onChange}/></td>
		<td colSpan="5"><input type="text" name="plan_achieve2"  id="plan_achieve2" className="Progress1" onChange={this.onChange}/></td>
	</tr>
	<tr>
		<td><input type="text" name="item3" id="item3" className="Compet" onChange={this.onChange}/></td>
		<td><input type="text" name="date3" id="date3" className="Compet" onChange={this.onChange}/></td>
		<td colSpan="5"><input type="text" name="plan_achieve3" id="plan_achieve3" className="Progress1" onChange={this.onChange}/></td>
	</tr>
	<tr>
		<td><input type="text" name="item4" id="item4" className="Compet" onChange={this.onChange}/></td>
		<td><input type="text" name="date4" id="date4" className="Compet" onChange={this.onChange}/></td>
		<td colSpan="5"><input type="text" name="plan_achieve4" id="plan_achieve4" className="Progress1" onChange={this.onChange}/></td>
	</tr>
	<tr>
		<td colSpan="6" align="center" className="bghead">Reviewer’s Feedback</td>
	</tr>
	<tr>
		<td colSpan="6"><textarea name="reviewer_feedback" id="reviewer_feedback" rowSpan="6" cols="160" onChange={this.onChange}></textarea></td>
	</tr>
	<tr>
		<td colSpan="2" rowSpan="2" className="bghead" align="center">Reviewer’s Signature (with Date)<br/>
		<input type="text" name="" className="sign" onChange={this.onChange}/>
		</td>
		<td colSpan="2"></td>
		<td colSpan="2" className="bghead" align="center">Reviewer’s Signature (with date)<br/>
		<input type="text" name="signature" id="signature" className="sign" onChange={this.onChange}/>
		</td>
	</tr>
	</tbody>
</table>

	<input type="submit" name="" className="button"/>
	</form>
	<div>
	
		<ul>
			<li> <button id="bn" onClick ={this.onClick}></button></li>
			<li> <button id="bn"  value="kavi" onClick ={this.onClick}>kavi</button></li>
			<li> <button id="bn" value="hari" onClick={this.onClick}>hari</button></li>
			<li> <button id="bn"  value="suraj" onClick={this.onClick}>suraj</button></li>
			<li> <button id="bn" value="suresh" onClick={this.onClick}>suresh</button></li>
			<li> <button id="bn" value="prasad" onClick={this.onClick}>prasad</button></li>
			<li> <button id="bn" value="praveen" onClick={this.onClick}>praveen</button></li>
			<li> <button id="bn" value="kavileo" onClick={this.onClick}>kavileo</button></li>
			<li> <button id="bn" value="vicky" onClick={this.onClick}>vicky</button></li>
		</ul> 
	
</div>
	</div>
	);
	}
}
export default Kavi;