import React, { useState } from "react";
import TextEditor from "../../Lib/TextEditor";

export default function AddPost() {
	const [content, setContent] = useState('')

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
                  <div className="row g-3 align-items-center p-2">
                    <div className="col-auto">
                      <label
                        htmlFor="inputPassword6"
                        className="col-form-label"
                      >
                        Tiêu đề:
                      </label>
                    </div>
                    <div className="col-auto">
                      <input
                        type="password"
                        id="inputPassword6"
                        className="form-control"
                        aria-describedby="passwordHelpInline"
                      />
                    </div>
                  </div>
                        <TextEditor setValue={setContent} />
                        {content}
                        
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
