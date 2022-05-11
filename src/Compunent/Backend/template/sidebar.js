import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      Userss: {}
    })
  }
  
  async componentDidMount(){
    await axios({
      method: 'GET',
      url: '/api/getuser',
      headers: { 
        'Authorization': ('Bearer ' + localStorage.getItem("accessToken"))
      },
      
    }).then(res => {
      console.log(res)
      this.setState({
        Userss: res.data
      });
    }).catch(err => {
      alert(err.response.data.message)
    });
  }
    render() {
        return (
            <div>
               <aside className="main-sidebar sidebar-dark-primary elevation-4">
  {/* Brand Logo */}
  <a href="index3.html" className="brand-link">
    <img src="../dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
    <span className="brand-text font-weight-light">AdminLTE 3</span>
  </a>
  {/* Sidebar */}
  <div className="sidebar">
    {/* Sidebar user panel (optional) */}
    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
      <div className="image">
        <img src="../dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
      </div>
      <div className="info">
        <a href="#" className="d-block">{this.state.Userss.fullname}</a>
      </div>
      <div>
          <a type='button' className='ml-2 mt-1' onClick={this.props.logout}>
          <i class="fas fa-sign-out-alt"></i>
          </a>
      </div>
    </div>
    {/* SidebarSearch Form */}
    <div className="form-inline">
      <div className="input-group" data-widget="sidebar-search">
        <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
        <div className="input-group-append">
          <button className="btn btn-sidebar">
            <i className="fas fa-search fa-fw" />
          </button>
        </div>
      </div>
    </div>
    {/* Sidebar Menu */}
    <nav className="mt-2">
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
        <li className="nav-item menu-open">
          <a href="#" className="nav-link active">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Dashboard
              <i className="right fas fa-angle-left" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="./index.html" className="nav-link active">
                <i className="far fa-circle nav-icon" />
                <p>Dashboard v1</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="./index2.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Dashboard v2</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="./index3.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Dashboard v3</p>
              </a>
            </li>
          </ul>
        </li>

        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-chart-pie" />
            <p>
              Charts
              <i className="right fas fa-angle-left" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
                <Link to="/admin/device" className='nav-link'>
                <i className="far fa-circle nav-icon" />
                <p>Devices</p>
                </Link>
            </li>
            <li className="nav-item">
              <a href="pages/charts/flot.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Flot</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/charts/inline.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Inline</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/charts/uplot.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>uPlot</p>
              </a>
            </li>
          </ul>
        </li>

        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-chart-pie" />
            <p>
              Setting
              <i className="right fas fa-angle-left" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
                <Link to="/admin/user" className='nav-link'>
                <i className="far fa-circle nav-icon" />
                <p>User</p>
                </Link>
            </li>
            <li className="nav-item">
              <a href="pages/charts/flot.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Flot</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/charts/inline.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Inline</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/charts/uplot.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>uPlot</p>
              </a>
            </li>
          </ul>
          <ul>
          <li className="nav-item">
                <Link to="/admin/user" className='nav-link'>
                <i className="far fa-circle nav-icon" />
                <p>User</p>
                </Link>
            </li>
          </ul>
        </li>

      </ul>
    </nav>
    {/* /.sidebar-menu */}
  </div>
  {/* /.sidebar */}
</aside>

            </div>
        );
    }
}

export default sidebar;