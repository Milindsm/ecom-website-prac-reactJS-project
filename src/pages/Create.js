import axios from "axios";
import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Create = () => {
    const [name, setName] = useState("");
    const [name2, setName2] = useState("");
    const history = useNavigate();
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("clciekd");
      axios
        .post("https://644a3edd79279846dce297b5.mockapi.io/data", {
          name: name,
          name2:name2,
        })
        .then(() => {
          history("/read");
        });
    };
    return (
      <>
      
        <div className="d-flex justify-content-between m-2">
          <h2>Create</h2>
          <Link to="/read">
            <button className="btn btn-primary">Show Data</button>
          </Link>
        </div>
        <form>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Name2</label>
            <input
              type="text"
              className="form-control"
              aria-describedby="emailHelp"
              onChange={(e) => setName2(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
       
      </>
    );
  };
  export default Create;