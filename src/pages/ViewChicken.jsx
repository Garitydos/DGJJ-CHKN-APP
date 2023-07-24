import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Alert, Button, Table} from "reactstrap"
import { deleteChicken, getAllChickens } from '../../../chikntender_fake/src/utils/api';


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
        <h2></h2>
        
    </div>
  )
}
