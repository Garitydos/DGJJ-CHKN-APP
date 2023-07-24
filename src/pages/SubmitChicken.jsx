import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alert, Button, Form, FormGroup, Input, Label } from "reactstrap";
import LoadingSpinner from "../components/LoadingSpinner";
import { submitChicken } from "../utils/api";

const emptyForm = {
  name: "",
  location: "",
  imgUrl: "",
  description: "",
};

function SubmitChicken() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [errorMsg, setErrorMsg] = useState(null);

  const navigate = useNavigate();

  function submitForm() {
    setErrorMsg(null);
    setLoading(true);
    submitChicken(form)
      .then(() => navigate("/view"))
      .catch((e) => setErrorMsg(e))
      .finally(() => setLoading(false));
  }

  return (
    <div
      style={{
        backgroundImage: `url("https://static.displate.com/280x392/displate/2022-12-11/919c68aa57f7c4d486488829af4b2d6e_1d0354edc95336b5c1dce8b8308540bd.jpg")`,
        backgroundRepeat: "repeat repeat",
        backgroundSize: "cover", 
      }}
    >
      <h2
        className="ms-2 mt-5"
        style={{ color: "red", lineHeight: 10, padding: 20,  }}
      >
        Create Chckn Profile
      </h2>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          {errorMsg ? <Alert color="danger">{errorMsg}</Alert> : null}
          <Form className="p-3">
            <FormGroup>
              <Label>Name: </Label>
              <Input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </FormGroup>
            <FormGroup>
              <Label>Location: </Label>
              <Input
                value={form.location}
                onChange={(e) => setForm({ ...form, location: e.target.value })}
              />
            </FormGroup>
            <FormGroup>
              <Label>Image URL: </Label>
              <Input
                value={form.imgUrl}
                onChange={(e) => setForm({ ...form, imgUrl: e.target.value })}
              />
            </FormGroup>
            <FormGroup>
              <Label>Description: </Label>
              <Input
                type="textarea"
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
              />
            </FormGroup>
            <Button color="Alert" size="lrg" onClick={submitForm}>
              Submit 🐔
            </Button>
          </Form>
        </>
      )}
    </div>
  );
}

export default SubmitChicken;
