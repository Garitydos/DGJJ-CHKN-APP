import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Alert, Button, Table} from "reactstrap"
import { deleteChicken, getAllChickens } from '../utils/api';


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
        <h2>All Chickens{" "}<Button size='sm' color='danger' onClick={()=> navigate("/submit")}></Button></h2>
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
                <th>Fry Chicken</th>
            </tr>
        </thead>
        <tbdoy>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </tbdoy>
        </Table>
        </>
    </div>
  )
}
