import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import the styles

function AddJob() {
  const [editorContent, setEditorContent] = useState("");

  const handleEditorChange = (content, delta, source, editor) => {
    setEditorContent(content);
  };

  return (
    <div>
      <form>
        <div className="row mb-4">
          <div className="col">
            <div data-mdb-input-init className="form-outline">
              <input type="text" id="form6Example1" className="form-control" />
              <label className="form-label" htmlFor="form6Example1">
                First name
              </label>
            </div>
          </div>
          <div className="col">
            <div data-mdb-input-init className="form-outline">
              <input type="text" id="form6Example2" className="form-control" />
              <label className="form-label" htmlFor="form6Example2">
                Last name
              </label>
            </div>
          </div>
        </div>

        <div data-mdb-input-init className="form-outline mb-4">
          <input type="text" id="form6Example3" className="form-control" />
          <label className="form-label" htmlFor="form6Example3">
            Company name
          </label>
        </div>

        <div data-mdb-input-init className="form-outline mb-4">
          <input type="text" id="form6Example4" className="form-control" />
          <label className="form-label" htmlFor="form6Example4">
            Address
          </label>
        </div>

        <div data-mdb-input-init className="form-outline mb-4">
          <input type="email" id="form6Example5" className="form-control" />
          <label className="form-label" htmlFor="form6Example5">
            Email
          </label>
        </div>

        <div data-mdb-input-init className="form-outline mb-4">
          <input type="number" id="form6Example6" className="form-control" />
          <label className="form-label" htmlFor="form6Example6">
            Phone
          </label>
        </div>

        <div data-mdb-input-init className="form-outline mb-4">
          <ReactQuill
            theme="snow"
            value={editorContent}
            onChange={handleEditorChange}
            modules={{
              toolbar: [
                [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
                [{ size: [] }],
                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                ['link', 'image', 'video'],
                ['clean']
              ],
            }}
          />
          <label className="form-label" htmlFor="form6Example7">
            Additional information
          </label>
        </div>

        <div className="form-check d-flex justify-content-center mb-4">
          <input
            className="form-check-input me-2"
            type="checkbox"
            value=""
            id="form6Example8"
            defaultChecked
          />
          <label className="form-check-label" htmlFor="form6Example8">
            Create an account?
          </label>
        </div>

        <button
          data-mdb-ripple-init
          type="button"
          className="btn btn-primary btn-block mb-4"
        >
          Place order
        </button>
      </form>
    </div>
  );
}

export default AddJob;
