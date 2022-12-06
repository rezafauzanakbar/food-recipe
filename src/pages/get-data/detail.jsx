//import hook useState dan useEffect from react
import { useState, useEffect } from "react";

//import component Bootstrap React
import { Card, Container, Row, Col, Table, Button } from "react-bootstrap";

//import axios
import axios from "axios";

//import hook history dan params dari react router dom
import { Link, useParams } from "react-router-dom";

function Detail() {
  //state
  const [reza, setReza] = useState([]);

  //get ID from parameter URL
  const { id } = useParams();

  //hook useEffect
  useEffect(() => {
    //panggil method "fetchData"
    getById();
  }, []);

  //function "getPostById"
  const getById = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/user/${id}`
    );
    //get response data
    const data = await response.data;

    //assign data to state
    setReza(data);
  };

  return (
    <>
      <Container className="mt-3">
        <Row>
          <Col md="{12}">
            <Card className="border-0 rounded shadow-sm">
              <Card.Body>
                <Table striped bordered hover className="mb-1">
                  <thead>
                    <tr className="text-center">
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Password</th>
                      <th>Level</th>
                      <th>Gambar</th>
                      <th>AKSI</th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    {reza.map((sat) => (
                      <tr key={sat.id}>
                        <td>{sat.name}</td>
                        <td>{sat.email}</td>
                        <td>{sat.phone}</td>
                        <td>{sat.password}</td>
                        <td>{sat.level}</td>
                        <td>{sat.gambar}</td>
                        <td className="text-center">
                          <Button
                            as={Link}
                            to={`/Update/${sat.id}`}
                            variant="secondary"
                            size="sm"
                            className="me-2"
                          >
                            EDIT
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
                <Button as={Link} to="/Get" variant="primary" className="m-3">
                  KEMBALI
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Detail;
