import React from "react";
import { searchBarProps } from "../../../data/types";

const SearchBar: React.FC<searchBarProps> = ({
  input,
  setButtonState,
  buttonState,
}) => {
  return (
    <div className="SearchBar">
      <div className="innerBar">
        <input
          onChange={(e) =>
            e.target.value === ""
              ? input(null)
              : input(e.target.value.toLowerCase())
          }
          type="text"
          placeholder="Busca una enfermedad o medicamento"
        />

        <div className="svgBox">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M9.145 18.29c-5.042 0-9.145-4.102-9.145-9.145s4.103-9.145 9.145-9.145 9.145 4.103 9.145 9.145-4.102 9.145-9.145 9.145zm0-15.167c-3.321 0-6.022 2.702-6.022 6.022s2.702 6.022 6.022 6.022 6.023-2.702 6.023-6.022-2.702-6.022-6.023-6.022zm9.263 12.443c-.817 1.176-1.852 2.188-3.046 2.981l5.452 5.453 3.014-3.013-5.42-5.421z" />
          </svg>
        </div>
      </div>

      <div className="arrowButton" onClick={() => setButtonState(!buttonState)}>
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fillRule="evenodd"
          clipRule="evenodd"
          style={{
            transform: buttonState ? "rotateZ(180deg)" : "rotateZ(0deg)",
            transition: "transform 500ms, background-color 500ms",
          }}
        >
          <path d="M12 0c-6.623 0-12 5.377-12 12s5.377 12 12 12 12-5.377 12-12-5.377-12-12-12zm0 1c-6.071 0-11 4.929-11 11s4.929 11 11 11 11-4.929 11-11-4.929-11-11-11zm4.828 11.5l-4.608 3.763.679.737 6.101-5-6.112-5-.666.753 4.604 3.747h-11.826v1h11.828z" />
        </svg>
      </div>
    </div>
  );
};

export default SearchBar;
