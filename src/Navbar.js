import React from "react";

const Navbar = () => {
  return (
    <div>
      <button
        onClick={() =>
          document.documentElement.style.setProperty(
            "--background",
            "red"
            // "--text-primary",
            // "blue"
          )
        }
      >
        change
      </button>
    </div>
  );
};

export default Navbar;
