import React from 'react';
import _ from "lodash";
import Header from "../components/Header";
import { useEffect, useState } from 'react';
import { downdootChicken, getAllChickens, updootChicken } from '../utils/api';
import LoadingSpinner from '../../../chikntender_fake/src/components/LoadingSpinner';

export default function RateChickens() {
    const [chickens, setChickens] = useState([]);
    const [loading, setLoading] = useState(false);
    const [index, setIndex] = useState(0);
    const [errorMsg, setErrorMsg] = useState(null);

    const chicken = chickens[index];

    function getNewChicken() {
        setErrorMsg(null);
        setLoading(true);
        getAllChickens()
            .then((data) => setChickens(_.shuffle(data)))
            .catch((e) => setErrorMsg(e))
            .finally(() => setLoading(false));
    }

    useEffect(getNewChicken, []);

    function handleUpvote(){
        setErrorMsg(null);
        setLoading(true);
        updootChicken(chicken.id)
        .then(() => setIndex(index + 1))
        .catch((e) => setErrorMsg(e))
        .finally(() => setLoading(false));
    }

    function handleDownvote() {
        setErrorMsg(null);
        setLoading(true);
        downdootChicken(chicken.id)
        .then(() => setIndex(index + 1))
        .catch((e) => setErrorMsg(e))
        .finally(() => setLoading(false));
    }

  return (
    <div>
        {loading ? <LoadingSpinner/> : null}
        {errorMsg ? <Alert color="danger">{errorMsg}</Alert> : null }
        {!loading && !errorMsg && index <= chickens.length - 1 ? (
        <Container>
            <Row>
                <div>
                    <div>
                        <img/>
                    </div>
                </div>
                <div>
                    <h2><small></small></h2>
                    <hr/>
                    <h6></h6>
                    <p>{}</p>
                </div>
            </Row>
        </Container>
        ) : (
         "No More Chickens to Rate!"
        )}
    </div>
  )
}
