import React from "react";
import "./darktheme.css";
import { useDispatch } from "react-redux";
import { setTheme } from "../../STORE/Premium/PremiumSlice";
const Darkatheme = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <label className="switch">
        <input
          type="checkbox"
          onClick={() => {
            dispatch(setTheme());
          }}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default Darkatheme;
