import React from 'react';
import _ from "lodash";
import { useEffect, useState } from 'react';

export default function RateChickens() {
    const [chickens, setChickens] = useState([]);
    const [loading, setLoading] = useState(false);
    const [index, setIndex] = useState(0);
    const [errorMsg, setErrorMsg] = useState(null);

    const chicken = chickens[index];

  return (
    <div>
        <Container>
            <Row>
                
            </Row>
        </Container>
    </div>
  )
}
