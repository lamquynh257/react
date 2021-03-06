import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Posts: [],
      id: "",
      username: "",
      password: "",
      fullname: "",
      email: "",
      image: "",
      openModalUser: false,
    };
  }

  // đổ dữ liệu Users ra view
  async componentDidMount() {
    await axios({
      method: "GET",
      url: "/api/allpost",
      data: null,
    })
      .then((res) => {
        //console.log(res)
        this.setState({
          Posts: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  onChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value,
    });
  };

  onSave = (e) => {
    e.preventDefault();
    //console.log(this.state);
    if (this.state.id) {
      axios({
        method: "POST",
        url: "/api/edituser",
        data: {
          id: this.state.id,
          username: this.state.username,
          password: this.state.password,
          fullname: this.state.fullname,
          email: this.state.email,
          image: this.state.image,
        },
      })
        .then(async (res) => {
          //console.log(res)
          await axios({
            method: "GET",
            url: "/api/alluser",
            data: null,
          })
            .then((res) => {
              //console.log(res)
              this.setState({
                Users: res.data,
              });
            })
            .catch((err) => {
              console.log(err);
            });
          this.enableCreU();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      let { username, password, fullname, email, image } = this.state;
      axios({
        method: "POST",
        url: "/api/createuser",
        data: {
          username: username,
          password: password,
          fullname: fullname,
          email: email,
          image: image,
        },
      })
        .then((res) => {
          let userList = {};
          userList.id = res.data.id;
          userList.username = res.data.username;
          userList.password = res.data.password;
          userList.fullname = res.data.fullname;
          userList.email = res.data.email;
          userList.image = res.data.image;
          let usersList = this.state.Users;
          usersList.push(userList);
          this.setState({
            Users: usersList,
          });

          //console.log(res)
          this.enableCreU();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  //  mở modal add, edit
  enableCreU = (data) => {
    //console.log(data)

    // console.log(data.username);
    if (data != null) {
      if (this.state.openModalUser === false) {
        this.setState({
          openModalUser: true,
          id: data.id,
          username: data.username,
          password: data.password,
          fullname: data.fullname,
          email: data.email,
          image: data.image,
        });
      } else {
        this.setState({
          openModalUser: false,
        });
      }
    } else {
      this.setState({
        id: "",
        username: "",
        password: "",
        fullname: "",
        email: "",
        image: "",
      });
      if (this.state.openModalUser === false) {
        this.setState({
          openModalUser: true,
        });
      } else {
        this.setState({
          openModalUser: false,
        });
      }
    }
  };

  // tắt mở modal
  toggleStatus = () => {
    this.setState({
      openModalUser: !this.state.openModalUser,
    });
  };

  // render view add,edit sang modalUser
  renderCreU = () => {
    let { username, password, fullname, email, image } = this.state;
    return (
      <div className="card col-12">
        <div className="card-header">
          <h3 className="card-title">Thêm tài khoản</h3>
        </div>
        <section className="content d-flex justify-content-center">
          <form onSubmit={this.onSave}>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={this.onChange}
              className="form-control"
              defaultValue={this.props.username}
              required
            />
            <label>Mật khẩu:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.onChange}
              className="form-control"
              required
            />
            <label>Tên đầy đủ:</label>
            <input
              type="text"
              name="fullname"
              value={fullname}
              onChange={this.onChange}
              className="form-control"
              required
            />
            <label>Email:</label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={this.onChange}
              className="form-control"
              required
            />
            <label>Hình ảnh:</label>
            <input
              type="text"
              name="image"
              value={image}
              onChange={this.onChange}
              className="form-control"
              required
            />
            <div className="modal-footer">
              <input
                className="btn btn-primary"
                type="submit"
                name="them"
                defaultValue="Thêm"
              />
              {/* <Link to="/admin/user" className="btn btn-danger">Back</Link> */}
              <a
                type="button"
                className="btn btn-danger"
                onClick={() => this.enableCreU()}
              >
                Back
              </a>
            </div>
          </form>
        </section>
      </div>
    );
  };

  onDelete = (id) => {
    if (window.confirm("Bạn có chắc muốn xoá?")) {
      axios({
        method: "DELETE",
        url: "/api/deletepost",
        data: {
          id: id,
        },
      })
        .then((res) => {
          let { Posts } = this.state;
          if (res.status === 200) {
            // OK
            var index = this.findIndex(Posts, id);
            if (index !== -1) {
              Posts.splice(index, 1);
              this.setState({
                Posts: Posts,
              });
            }
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  findIndex = (Posts, id) => {
    var result = -1;
    Posts.forEach((Posts, index) => {
      if (Posts.id === id) {
        result = index;
      }
    });
    return result;
  };

  render() {
    //console.log(this.state.Users)
    let { Posts } = this.state;
    return (
      <div>
        <div className="content-wrapper">
          {/* Content Header (Page header) */}
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1 className="m-0">Dashboard</h1>
                </div>
                {/* /.col */}
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item active">Dashboard v1</li>
                  </ol>
                </div>
                {/* /.col */}
              </div>
              {/* /.row */}
            </div>
            {/* /.container-fluid */}
          </div>
          {/* /.content-header */}
          {/* Main content */}
          <section className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header d-flex">
                      <h3 className="card-title">
                        DataTable with default features
                      </h3>
                      {/* <Link to="/admin/user/create" type="button" class="btn btn-primary btn-flat btn-sm ml-auto p-2" >Thêm mới</Link> */}
                      <Link
                        to="/admin/post/add"
                        type="button"
                        className="btn btn-primary btn-flat btn-sm ml-auto p-2"
                      >
                        Add
                      </Link>
                    </div>

                    {/* /.card-header */}
                    <div className="card-body">
                      <table
                        id="example12"
                        className="table table-bordered table-striped"
                      >
                        <thead>
                          <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Content</th>
                            <th>Author</th>
                            <th>Create date</th>
                            <th>#</th>
                          </tr>
                        </thead>

                        {Posts.map((post, index) => {
                          return (
                            <tbody key={index}>
                              <tr>
                                <td>{index + 1}</td>
                                <td>{post.post_title}</td>
                                <td>{post.post_content}</td>
                                <td>{post.post_author}</td>
                                <td>{post.post_date}</td>

                                <td>
                                  <div className="pull-right btn-group">
                                    <a
                                      className="btn btn-flat btn-primary btn-sm"
                                      data-toggle="modal"
                                      data-target="#view4511"
                                    >
                                      <i className="fa fa-eye" />
                                    </a>
                                    <a
                                      onClick={() => this.enableCreU(post)}
                                      className="btn btn-flat btn-success btn-sm editthietbi"
                                    >
                                      <i className="fa fa-edit" />
                                    </a>
                                    <a
                                      onClick={() => this.onDelete(post.id)}
                                      className="btn btn-flat btn-danger btn-sm"
                                    >
                                      <i className="fa fa-trash" />
                                    </a>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          );
                        })}

                        <tfoot>
                          <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Content</th>
                            <th>Author</th>
                            <th>Create date</th>
                            <th>#</th>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                    {/* /.card-body */}
                  </div>
                  {/* /.card */}
                </div>
                {/* /.col */}
              </div>
              {/* /.row */}
            </div>
            {/* /.container-fluid */}
          </section>

          {/* /.content */}
        </div>
      </div>
    );
  }
}

export default users;
