import React, { Component } from 'react'
import axios from 'axios';
import LayoutAdmin from './layoutAdmin';

export default class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
          Users: [],
          id: '',
          username: '',
          password: '',
          fullname: '',
          email: '',
          image: '',
          errStatus: "",
          isLogin: localStorage.getItem("accessToken") !=null
        };
      }

      onChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        this.setState({
          [name]: value
        })
      }
    
      onSave = (e) => {
        e.preventDefault();
        let { username, password } = this.state;
        axios({
          method: 'POST',
          url: '/api/login',
          data: {
            username: username,
            password: password,
          }
        }).then(res => {
           // console.log(res.data.accessToken)
            localStorage.setItem("accessToken", res.data.accessToken)
            this.setState({
              isLogin: localStorage.getItem("accessToken")
            })
        }).catch(e => {
            //console.log(e.response.data.message)
            this.setState({
                errStatus: e.response.data.message
            })
          });
       
     }

Logout = () => {
  this.setState({
    isLogin: localStorage.removeItem("accessToken")
  })
}
    

  render() {
    let {username, password} = this.state
    return (
      <div>
        {this.state.isLogin ?
        <LayoutAdmin onLogout={this.Logout} /> :
        <div className='login-page'>
          <div className="login-box">
<div className="login-logo">
 <a href=""><b>Admin</b>LTE</a>
</div>
{/* /.login-logo */}
<div className="card">
 <div className="card-body login-card-body">
   <p className="login-box-msg">Sign in to start your session</p>
   <form onSubmit={this.onSave}>
     <div className="input-group mb-3">
       <input type="text" className="form-control" name="username" value={username}  onChange={this.onChange} placeholder="Username" />
       <div className="input-group-append">
         <div className="input-group-text">
           <span className="fas fa-envelope" />
         </div>
       </div>
     </div>
     <div className="input-group mb-3">
       <input type="password" name="password" value={password}  onChange={this.onChange} className="form-control" placeholder="Password" />
       <div className="input-group-append">
         <div className="input-group-text">
           <span className="fas fa-lock" />
         </div>
       </div>
     </div>
     <div>
        {this.state.errStatus}
     </div>
     <div className="row">
       <div className="col-8">
         <div className="icheck-primary">
           <input type="checkbox" id="remember" />
           <label htmlFor="remember">
             Remember Me
           </label>
         </div>
       </div>
       {/* /.col */}
       <div className="col-4">
       <button className="btn btn-primary" type="submit">Login</button>
       </div>
       {/* /.col */}
     </div>
   </form>
   <div className="social-auth-links text-center mb-3">
     <p>- OR -</p>
     <a onClick={() => this.showAdmin()}  className="btn btn-block btn-primary">
       <i className="fab fa-facebook mr-2" /> Sign in using Facebook
     </a>
     <a href="#" className="btn btn-block btn-danger">
       <i className="fab fa-google-plus mr-2" /> Sign in using Google+
     </a>
   </div>
   {/* /.social-auth-links */}
   <p className="mb-1">
     <a href="forgot-password.html">I forgot my password</a>
   </p>
   <p className="mb-0">
     <a href="register.html" className="text-center">Register a new membership</a>
   </p>
 </div>
 {/* /.login-card-body */}
</div>
</div>
{/* /.login-box */}
</div>
  }
      </div>

    )
  }
}
