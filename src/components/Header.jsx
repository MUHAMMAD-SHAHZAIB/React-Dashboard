import React from "react";

const Header = ({ title, category }) => {
  return (
    <div className="mt-10 mb-6">
      <p className="text-gray-400">{category}</p>
      <p className="text-3xl font-extrabold tracking-tight text-slate-900">
        {title}
      </p>
    </div>
  );
};

export default Header;
