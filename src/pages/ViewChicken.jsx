import React from "react";
import _ from "lodash";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alert, Button, Table } from "reactstrap";
import { deleteChicken, getAllChickens } from "../utils/api";
import LoadingSpinner from "../components/LoadingSpinner";

export default function ViewChicken() {
  const [loading, setLoading] = useState(false);
  const [chickens, setChickens] = useState();
  const [errorMsg, setErrorMsg] = useState(null);

  const navigate = useNavigate();

  function refreshChickens() {
    setErrorMsg(null);
    setLoading(true);
    getAllChickens()
      .then((data) => setChickens(data))
      .catch((e) => setErrorMsg(e))
      .finally(() => setLoading(false));
  }

  useEffect(refreshChickens, []);

  function handleDelete(id) {
    setErrorMsg(null);
    setLoading(true);
    deleteChicken(id)
      .then(() => refreshChickens())
      .catch((e) => setErrorMsg(e))
      .finaLLY(() => setLoading(false));
  }

  return (
    <div>
      <h2>
        All Chickens{" "}
        <Button
          size="sm"
          color="danger"
          onClick={() => navigate("/submit")}
        ></Button>
      </h2>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <Table>
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Location</th>
                <th>👍</th>
                <th>👎</th>
                <th>Total Score</th>
              </tr>
            </thead>
            <tbdoy>
              {_.map(chickens, (c) => (
                <tr key={c.id}>
                  <td src={c.imgurl}></td>
                  <td>{c.name}</td>
                  <td>{c.location}</td>
                  <td>{c.updoots}</td>
                  <td>{c.downdoots}</td>
                  <td
                    className={
                      "fw-bold " + (c.score > 0 ? "text-danger" : "text-muted")
                    }
                  >
                    {c.score} {c.score > 0 ? "🔥" : "❄️"}
                  </td>
                  <td>
                    <Button
                    color="danger"
                    size="sm"
                    onClick={() => handleDelete(c.id)}
                    > Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbdoy>
          </Table>
        </>
      )}
    </div>
  );
}
