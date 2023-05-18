import axios from "axios";
import React,{useEffect,useState} from "react";
import { Link,useNavigate } from "react-router-dom";

const Update = () => {
    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [name2, setName2] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
      setId(localStorage.getItem("id"));
      setName(localStorage.getItem("name"));
      setName2(localStorage.getItem("name2"));
    }, []);
    const handleUpdate = (e) => {
      e.preventDefault();
      console.log("Id...", id);
      axios
        .put(`https://644a3edd79279846dce297b5.mockapi.io/data/${id}`, {
          name: name,
          name2: name2,
        })
        .then(() => {
          navigate("/read");
        });
    };
    return (
      <>
        <h2>Update</h2>
        <form>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Name2</label>
            <input
              type="text"
              className="form-control"
              value={name2}
              onChange={(e) => setName2(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary mx-2"
            onClick={handleUpdate}
          >
            Update
          </button>
          <Link to="/read">
            <button className="btn btn-secondary mx-2"> Back </button>
          </Link>
        </form>
      </>
    );
  };
  export default Update;