import React,{useState,useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Read = () => {
    const [data, setData] = useState([]);
    const [tabledark, setTableDark] = useState("");
    function getData() {
      axios
        .get("https://644a3edd79279846dce297b5.mockapi.io/data")
        .then((res) => {
          setData(res.data);
        });
    }
    function handleDelete(id) {
      axios
        .delete(`https://644a3edd79279846dce297b5.mockapi.io/data/${id}`)
        .then(() => {
          getData();
        });
    }
    const setToLocalStorage = (id, name, name2) => {
      localStorage.setItem("id", id);
      localStorage.setItem("name", name);
      localStorage.setItem("name2", name2);
    };
    useEffect(() => {
      getData();
    }, []);

    
    return (
      <>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            onClick={() => {
              if (tabledark === "table-dark") setTableDark("");
              else setTableDark("table-dark");
            }}
          />
        </div>
        <div className="d-flex justify-content-between m-2">
          <br></br>
        </div>
        <table className={`table ${tabledark}`}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Name2</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          {data.map((eachData) => {
            return (
              <>
                <tbody>
                  <tr>
                    <th scope="row">{eachData.id}</th>
                    <td>{eachData.name}</td>
                    <td>{eachData.name2}</td>
                    <td>
                      <Link to="/update">
                        <button
                          className="btn-success"
                          onClick={() =>
                            setToLocalStorage(
                              eachData.id,
                              eachData.name,
                              eachData.name2
                            )
                          }
                        >
                          Edit{" "}
                        </button>
                      </Link>
                    </td>
                    <td>
                      <button
                        className="btn-danger"
                        onClick={() => handleDelete(eachData.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </>
            );
          })}
        </table>
      </>
    );
  };
  export default Read;