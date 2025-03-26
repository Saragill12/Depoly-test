import React, { useEffect, useState } from "react";
import Nav from "../Components/Navbar";
import Hero from "../Components/Hero";
import axios from "axios";
import Spinner from "../Components/Sniper";

const Home = () => {
  const [users, setUsers] = useState([]); 
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("Saru");

//   const SearchUser = async () => {
//     setLoading(true);
//     try { 
//         const res = axios.get(`https://api.github.com/search/users?q=${value}`,{
//               headers: {
//                 Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`, 
//               },
//             }
//           ).then((data) => {
//             console.log(data,'sara data')
//           });
//     }
//     catch (error) {
//         console.error(error);
//       } finally {
//         setLoading(false);
//       }
//   };

// https://api.github.com/search/users?q=${value}

const SearchUser =() => {
    setLoading(true);
    let res = axios.get(`https://api.github.com/search/users?q=${value}`).then((data) => {
        console.log(data)
        setUsers(data.data);
        setLoading(false);
    })
}


console.log(users,'users')

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
