import React, { Component } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import draftToMarkdown from "draftjs-to-markdown";
import axios from "axios";
import { Link } from "react-router-dom";
var qs = require("qs");

export default class test extends Component {
  state = {
    editorState: EditorState.createEmpty(),
    Posts: [],
    post_title: "",
    post_content: "",
    post_image: "",
    post_author: "",
    post_date: "",
  };

  onChange = (e) => {
    console.log(e);
    const target = e.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value,
    });
  };

  onSave = (e) => {
    e.preventDefault();
    let { post_title, post_content, post_image, editorState } = this.state;
    let today = new Date();
    let data = qs.stringify({
      post_title: post_title,
      post_content: draftToMarkdown(
        convertToRaw(editorState.getCurrentContent())
      ),
      post_image: post_image,
      post_author: "NTL",
      post_date:
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate(),
    });
    let config = {
      method: "post",
      url: "/api/createpost",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };
  render() {
    let { editorState } = this.state;

    console.log(draftToMarkdown(convertToRaw(editorState.getCurrentContent())));
    let { post_title, post_content, post_image } = this.state;

    return (
      <div>
        {/* Content Wrapper. Contains page content */}
        <div className="content-wrapper">
          {/* Content Header (Page header) */}
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1>Text Editors</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item active">Text Editors</li>
                  </ol>
                </div>
              </div>
            </div>
            {/* /.container-fluid */}
          </section>
          {/* Main content */}
          <section className="content">
            <div className="row">
              <div className="col-md-12">
                <div className="card card-outline card-info">
                  <div className="card-header">
                    <h3 className="card-title">Thêm bài viết</h3>
                  </div>
                  {/* /.card-header */}
                  <div className="card-body">
                    <div className="row g-3 align-items-center p-2"></div>
                    <form onSubmit={this.onSave}>
                      <label>Title:</label>
                      <input
                        type="text"
                        name="post_title"
                        value={post_title}
                        onChange={this.onChange}
                        className="form-control"
                        required
                      />
                      <label>Thumbnail:</label>
                      <input
                        type="text"
                        name="post_image"
                        value={post_image}
                        onChange={this.onChange}
                        className="form-control"
                        required
                      />
                      <div>
                        <Editor
                          editorState={editorState}
                          toolbarClassName="toolbarClassName"
                          wrapperClassName="wrapperClassName"
                          editorClassName="editorClassName"
                          onEditorStateChange={this.onEditorStateChange}
                        />
                        {/* <textarea
                          disabled
                          value={draftToHtml(
                            convertToRaw(editorState.getCurrentContent())
                          )}
                        /> */}
                        <button className="btn btn-success float-right">
                          Tạo bài viết
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/* /.col*/}
            </div>
            {/* ./row */}
          </section>
          {/* /.content */}
        </div>
        {/* /.content-wrapper */}
      </div>
    );
  }
}
