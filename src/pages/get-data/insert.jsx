import React, { useState } from "react";
import axios from "axios";
import { Link, navigate, useNavigate } from "react-router-dom";
import { Button} from 'react-bootstrap';

const Insert = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    phone: "",
    password: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(form);
    if (form.name == "" || form.email == "" || form.phone == "" || form.password == "" || form.level =="") {
      alert("semua input wajib diisi");
    } else {
      const body = {
        name: form.name,
        email: form.email,
        phone: form.phone,
        password: form.password,
        level: form.level
      };
      axios
        .post(`${process.env.REACT_APP_BACKEND_URL}/user`, body)
        .then((response) => {
          //   if (response.data.code !== 200) {
          //     alert("error: " + response.data.message);
          //   }
          console.log(response.data);
          return navigate("/Get");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <>
    <div className="m-5">
    <form onSubmit={(e) => onSubmit(e)}>
        <div className="form-group m-1">
          <input
            type="text"
            className="form-control"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="name"
          />
        </div>
        <div className="form-group m-1">
          <input
            type="text"
            className="form-control"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="email"
          />
        </div>
        <div className="form-group m-1">
          <input
            type="number"
            className="form-control"
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="phone"
          />
        </div>
        <div className="form-group m-1">
          <input
            type="text"
            className="form-control"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            placeholder="password"
          />
        </div>
        <div className="form-group m-1">
          <input
            type="text"
            className="form-control"
            onChange={(e) => setForm({ ...form, level: e.target.value })}
            placeholder="level"
          />
        </div>
        <div className="form-group m-1">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
          <Button as={Link} to="/Get" variant="primary" className="m-3">KEMBALI</Button>
        </div>
      </form>
    </div>
      
    </>
  );
};

export default Insert;