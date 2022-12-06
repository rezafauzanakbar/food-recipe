//import hook useState dan useEffect from react
import { useState, useEffect } from "react";

//import react router dom
import { Link } from "react-router-dom";

//import component Bootstrap React
import { Card, Container, Row, Col, Button, Table } from "react-bootstrap";

//import axios
import axios from "axios";

function Get() {
  //define state
  const [posts, setPosts] = useState([]);

  //useEffect hook
  useEffect(() => {
    //panggil method "fetchData"
    fectData();
  }, []);

  //function "Get Data User"
  const fectData = async () => {
    //fetching
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/user`
    );
    //get response data
    const data = await response.data.rows;

    //assign response data to state "posts"
    setPosts(data);
  };

  //function "Delete Data User"
  const deletePost = async (id) => {
    //sending
    await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/user/${id}`);

    //panggil function "fetchData"
    fectData();
  };

  return (
    <Container className="mt-3">
      <Row>
        <Col md="{12}">
          <Card className="border-0 rounded shadow-sm">
            <Card.Body>
              <Button as={Link} to="/Insert" variant="success" className="mb-3">
                TAMBAH USER
              </Button>
              <Table striped bordered hover className="mb-1">
                <thead>
                  <tr className="text-center">
                    <th>NO.</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>AKSI</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  {posts.map((post, index) => (
                    <tr key={post.id}>
                      <td>{index + 1}</td>
                      <td>{post.name}</td>
                      <td>{post.email}</td>
                      <td className="text-center">
                        <Button
                          as={Link}
                          to={`/Detail/${post.id}`}
                          variant="primary"
                          size="sm"
                          className="me-2"
                        >
                          Detail
                        </Button>
                        <Button
                          onClick={() => deletePost(post.id)}
                          variant="danger"
                          size="sm"
                        >
                          DELETE
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Get;
