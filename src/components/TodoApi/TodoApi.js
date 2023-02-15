import axios from "axios";
import React, { useEffect, useState } from "react";

function TodoApi() {
  const [data, setdata] = useState([]);

  console.log(data);
  function getData() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        console.log(res.data);
        setdata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div>
        <div>
          <table className="table table-dark table-hover mt-5 w-75 mx-auto">
            <thead>
              <tr>
                <th scope="col" className="col">
                  id
                </th>
                <th scope="col" className="col">
                  Title
                </th>
                <th scope="col" className="col">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {Array.from(data).map((d, i) => {
                return (
                  <tr key={i}>
                    <td>{d.id}</td>
                    <td>{d.title}</td>
                    <td>
                      {d.completed ? (
                        <span className="badge bg-success">completed</span>
                      ) : (
                        <span className="badge bg-danger">Not completed</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default TodoApi;
