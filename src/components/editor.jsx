import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const AppEditor = ({ name, value, label, error, handleChange }) => {
  const onChange = (event, editor) => {
    const data = editor.getData();
    handleChange({ currentTarget: { name: name, value: data } });
  }
  return (
    <div className="form-group">
      <label htmlFor={name} className="form-label">{label}</label>
      <CKEditor
        editor={ClassicEditor}
        data={value}
        onChange={onChange}
      />
      {error && (
        <div className="form-control form-error-message" role="alert">
          {error}
        </div>
      )
      }
    </div>
  );
}

export default AppEditor;
