import React from "react";

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: "#1E40AF", color: "white", padding: "16px", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", maxWidth: "1200px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "24px", fontWeight: "bold",marginLeft:"14%" }}>Github Finder</h1>
        <ul style={{ display: "flex", gap: "24px", listStyle: "none", margin: 0, padding: 0 }}>
          {/* <li><a href="#" style={{ color: "white", textDecoration: "none", fontSize: "16px" }}>Home</a></li> */}
          {/* <li><a href="#" style={{ color: "white", textDecoration: "none", fontSize: "16px" }}>About</a></li> */}
          {/* <li><a href="#" style={{ color: "white", textDecoration: "none", fontSize: "16px" }}>Services</a></li> */}
          {/* <li><a href="#" style={{ color: "white", textDecoration: "none", fontSize: "16px" }}>Contact</a></li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;