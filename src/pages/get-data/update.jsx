//import hook useState dan useEffect from react
import { useState, useEffect } from "react";

//import component Bootstrap React
import {
  Card,
  Container,
  Row,
  Col,
  Table,
  Button,
  Form,
} from "react-bootstrap";

//import axios
import axios from "axios";

//import hook history dan params dari react router dom
import { useParams, useNavigate } from "react-router-dom";

function Update() {
  const navigate = useNavigate();
  //state
  const [form, setForm] = useState({
    name: "",
  });

  //get ID from parameter URL
  const { id } = useParams();

  //hook useEffect
  useEffect(() => {
    //panggil method "fetchData"
    getByPostId();
  }, []);

  //function "getPostById"
  const getByPostId = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/user/${id}`
    );
    //get response data
    const data = await response.data;

    //assign data to state
    setForm(data.name);
  };

  //function "updatePost"
  const updatePost = async (e) => {
    e.preventDefault();
    if (form.name == "") {
      alert("harus input");
    } else {
      const body = {
        name: form.name,
      };
      //send data to server
      await axios
        .put(`${process.env.REACT_APP_BACKEND_URL}/user/${id}`, body)
        .then((response) => {
          console.log(response.data);
          //redirect
          // return navigate("/Get");
        })
        .catch((error) => {
          //assign validation on state
          console.log(error);
        });
    }
  };

  return (
    <>
      <Container className="mt-3">
        <Row>
          <Col md="{12}">
            <Card className="border-0 rounded shadow-sm">
              <Card.Body>
                <Form onSubmit={(e) => updatePost(e)}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      placeholder="Masukkan Name"
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    UPDATE
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Update;
