/** @format */

import { useContext, useEffect, useState } from "react";
import "./Homepage.css";
import axios from "axios";
import { Cartcontext } from "../../context/Context";

const Homepage = () => {
  const [data, setdata] = useState([]);
  const fetchData = async () => {
    const response = await axios.get("https://644a3edd79279846dce297b5.mockapi.io/data");
    setdata(response.data);
    console.log(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const Globalstate = useContext(Cartcontext);
  const dispatch = Globalstate.dispatch;
  console.log(Globalstate);
  return (
    <div className="home">
      {data.map((item, index) => {
        item.quantity = 1;
        return (
          <div className="card" key={index}>
            
            <p>{item.name}</p>
            <h3>$. {item.name2}</h3>
            <button onClick={() => dispatch({ type: "ADD", payload: item })}>
              add to cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Homepage;
