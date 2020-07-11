import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onInputSubmit }) => {
  return (
    <div>
      <p className="f3">
        Smart Brain detect faces in your images. Want to Try?
      </p>
      <div className="center br3">
        <div className="form center pa4 r3 shadow-3">
          <input
            className="f4 pa2 w-70 center ba b--white"
            type="text"
            onChange={onInputChange}
          />
          <button
            className="w-30 grow f4 link ph3 pv2 dib white ba b--orange bg-orange"
            onClick={onInputSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
