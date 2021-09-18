import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import "./style.css"


const regularExpression  = RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/);
const regExp=RegExp(/^\(?([0-9]{11})$/);


export default class Add extends React.Component {
    state = {
        name: '',mail:'',phone:'', Password:'', postId: '',          
        error: {
            name: '',  mail: '',  phone: '', Password: ''
        },
    }


    getData = () => {
        axios("http://localhost:3000/registers").then(res => {
            this.setState({
                posts: res.data
            })
            console.log(res.data);
        });            
    }

    formValChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let error = { ...this.state.error };

    switch (name) {
        case "name":  
            error.name =
                value.length < 4 ? "At least 4 characaters required" : "";
            break;
        case "mail":
            error.mail = regularExpression.test(value)
                ? ""
                : "Email address is invalid";
            break;
        case "phone":
            error.phone = regExp.test(value)
                ? ""
                : "Phone is invalid";
            break;  
        case "Password":
            error.Password =
                value.length < 6? "At least 6 characaters required" : "";
            break;
        default:
            break;
    }
    
    this.setState({
        error,
        [name]: value
    })
}
onFormSubmit = event => {
    let checkValidation;
    let error = { ...this.state.error };
    console.log("error",error);
    if (error.name.length > 0 || error.mail.length>0||error.phone.length>0||error.Password.length>0) {
        checkValidation = false   
    }else if(this.state.name.length===0||this.state.mail.length===0||this.state.phone.length===0||this.state.Password.length===0){
        checkValidation = false;
        alert("There is one or more empty fields");
    }else {
        checkValidation = true
    }
    event.preventDefault();
    let newReg;
    if (checkValidation===true) {
         newReg = {
            "name": this.state.name,
            "mail": this.state.mail,
            "phone": this.state.phone,
            "Password": this.state.Password
        }
        axios.post("http://localhost:3000/registers", newReg).then(res => {
            console.log(res);
            this.getData();
        }).catch(Error => {
            console.log(Error);
        })  
        alert("Register completed successfully");
        this.props.history.push("/Login");    
    } else {
        console.log("Error occured");
    }   
   };
 
    render() {
        const { error } = this.state;

        return (
            <div className="log" id="register">
                <form className="form" onSubmit={this.onFormSubmit}>


                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        className={error.name.length > 0 ? "is-invalid form-control" : "form-control"}
                        name="name"
                        onChange={this.formValChange}
                    />
                    {error.name.length > 0 && (
                        <span className="invalid-feedback">{error.name}</span>
                    )}
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        className={error.mail.length > 0 ? "is-invalid form-control" : "form-control"}
                        name="mail"
                        onChange={this.formValChange}
                    />
                    {error.mail.length > 0 && (
                        <span className="invalid-feedback">{error.mail}</span>
                    )}
                </div>

                <div className="form-group">
                    <label>Phone</label>
                    <input
                        type="text"
                        className={error.phone.length > 0 ? "is-invalid form-control" : "form-control"}
                        name="phone"
                        onChange={this.formValChange}
                    />
                    {error.phone.length > 0 && (
                        <span className="invalid-feedback">{error.phone}</span>
                    )}
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="Password"
                        maxLength="10"
                        className={error.Password.length > 0 ? "is-invalid form-control" : "form-control"}
                        name="Password"
                        onChange={this.formValChange}
                    />
                    {error.Password.length > 0 && (
                        <span className="invalid-feedback">{error.Password}</span>
                    )}
                </div>

                <div className="d-grid mt-3">
                    <button type="submit" id="button" className="btn btn-block btn-secondary" onChange={this.onFormSubmit}>Submit</button>
                </div>
                <span className="no"> Already have an account? Login &nbsp;
                    <Link to="/Login" id="a">here</Link>
                </span>
            </form>
            </div>


        )
    }}
    
   
