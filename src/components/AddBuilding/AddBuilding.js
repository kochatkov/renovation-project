import React from 'react';

export const AddBuilding = () => {
  const changeHandler = (e) => {
    console.log(e.target.files);
  };

  return (
    <div className="form-group">
      <label htmlFor="formFileMultiple" className="form-label">
        Додати будинок до голосування
      </label>
      <input
        className="form-control"
        type="file"
        id="formFileMultiple"
        multiple
        onChange={(e) => changeHandler(e)}
      />
    </div>
  );
};
