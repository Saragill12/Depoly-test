import React, { useEffect, useState } from "react";
import Nav from "../Components/Navbar";
import Hero from "../Components/Hero";
import axios from "axios";
import Spinner from "../Components/Sniper";

const Home = () => {
  const [users, setUsers] = useState([]); 
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("Saru");


const SearchUser =() => {
    setLoading(true);
    let res = axios.get(`${ptocess.env.REACT_APP_GITHUB_URL_}/search/users?q=${value}`).then((data) => {
        console.log(data)
        setUsers(data.data);
        setLoading(false);
    })
}



  return (
    <div>
      <Nav />
      <input
        placeholder="Search"
        className="input"
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="btn" onClick={SearchUser}>
        Search Profile
      </button>
      {loading ? <Spinner /> : <Hero users={users} />}
    </div>
  );
};

export default Home;
