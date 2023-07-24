import _ from "lodash";
import { useEffect, useState } from "react";
import { Alert, Button, Container, Row } from "reactstrap";
import LoadingSpinner from "../components/LoadingSpinner";
import { downdootChicken, getAllChickens, updootChicken } from "../utils/api";
import useSound from "use-sound";
import Panic from "../assets/Panic.mp3";
import Content from "../assets/Content.mp3";

export default function RateChickens() {
  const [chickens, setChickens] = useState([]);
  const [loading, setLoading] = useState(false);
  const [index, setIndex] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [play1] = useSound(Panic);
  const [play2] = useSound(Content);

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

  function handleUpdoot() {
    play2();
    setErrorMsg(null);
    setLoading(true);
    updootChicken(chicken.id)
      .then(() => setIndex(index + 1))
      .catch((e) => setErrorMsg(e))
      .finally(() => setLoading(false));
  }

  function handleDowndoot() {
    play1();
    setErrorMsg(null);
    setLoading(true);
    downdootChicken(chicken.id)
      .then(() => setIndex(index + 1))
      .catch((e) => setErrorMsg(e))
      .finally(() => setLoading(false));
  }

  return (
    <div>
      {loading ? <LoadingSpinner /> : null}
      {errorMsg ? <Alert color="danger">{errorMsg}</Alert> : null}
      {!loading && !errorMsg && index <= chickens.length - 1 ? (
        <Container>
          <Row>
            <div className="p-2 bg-light d-flex align-items-center justify-content-center">
              <div className="chikn-img d-flex align-items-center justify-content-center">
                <img src={chicken.imgur1} />
              </div>
            </div>
            <div style={{ height: "250px" }}>
              <h2 className="mt-3 d-flex align-items-baseline">
                {chicken.name}
                <small className="text-sm text-muted ms-3 d-flex align-items-center">
                  {chicken.location}
                  {console.log}
                </small>
              </h2>
              <h6>Description</h6>
              <p>{chicken.description}</p>
            </div>
            <div className="d-flex justify-content-between px-2 py-4">
              <Button
                outline
                color="primary"
                size="lg"
                className="shadow-sm"
                onClick={handleDowndoot}
              >
                🧊 Frozen Nuggs 🧊
              </Button>

              <Button
                outline
                color="danger"
                size="lg"
                className="shadow-sm"
                onClick={handleUpdoot}            >
                🔥 Nashville Hot 🔥
              </Button>
            </div>
          </Row>
        </Container>
      ) : (
        "Il n'y a plus de poulets à évaluer!"
      )}
    </div>
  );
}
