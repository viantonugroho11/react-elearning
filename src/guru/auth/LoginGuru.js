//import hook react
import React, { useState } from 'react';

//import hook useHitory from react router dom
import { useHistory } from 'react-router';

//import axios
import axios from 'axios';

function LoginGuru() {

  //define state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //define state validation
  const [validation, setValidation] = useState([]);

  //define history
  const history = useHistory();

  //function "loginHanlder"
  const loginHandler = async (e) => {
    e.preventDefault();

    //initialize formData
    const formData = new FormData();

    //append data to formData
    formData.append('email', email);
    formData.append('password', password);

    //send data to server
    await axios.post('http://appsiaksd.ugcorpusskkni.online/api/loginguru', formData)
      .then((response) => {

        //set token on localStorage
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('id', response.data.user.id);

        //redirect to dashboard
        history.push('/guru');
      })
      .catch((error) => {

        //assign error to state "validation"
        setValidation(error.response.data);
      })
  };
  return (
    <div>
      <div className="login-header box-shadow">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <div className="brand-logo">
            <a href="login.html">
              {/* <img src="" alt /> */}
            </a>
          </div>
          <div className="login-menu">
          </div>
        </div>
      </div>
      <div className="login-wrap d-flex align-items-center flex-wrap justify-content-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 col-lg-7">
              {/* <img src="vendors/images/login-page-img.png" alt /> */}
            </div>
            <div className="col-md-6 col-lg-5">
              <div className="login-box bg-white box-shadow border-radius-10">
                <div className="login-title">
                  <h2 className="text-center text-primary">Login Admin SDIT AL-MANAR</h2>
                  {
                    validation.message && (
                      <div className="alert alert-danger">
                        {validation.message}
                      </div>
                    )
                  }
                </div>
                <form onSubmit={loginHandler}>
                  <div className="input-group custom">
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" className="form-control form-control-lg" placeholder="Username" />
                    <div className="input-group-append custom">
                      <span className="input-group-text"><i className="icon-copy dw dw-user1" /></span>
                    </div>
                  </div>
                  <div className="input-group custom">
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control form-control-lg" placeholder="**********" />
                    <div className="input-group-append custom">
                      <span className="input-group-text"><i className="dw dw-padlock1" /></span>
                    </div>
                  </div>
                  <div className="row pb-30">
                    {/* <div className="col-6">
                      <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Ingat</label>
                      </div>
                    </div> */}
                    <div className="col-6">
                      <div className="forgot-password"><a href="forgot-password.html">Lupa Password</a></div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="input-group mb-0">
                        <button type="submit" className="btn btn-primary btn-lg btn-block">Masuk</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default LoginGuru