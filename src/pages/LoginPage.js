import { Link, useNavigate } from "react-router-dom";

import { useRef, useContext, useState } from "react";
import { AuthContext } from "../Authen/AuthProvider";
import axios from "../axios/axios";

export default function LoginPage() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(AuthContext);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/sign_in", {
        email: userRef.current.value.toString(),
        password: passwordRef.current.value.toString(),
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      localStorage.setItem(
        "user-data",
        JSON.stringify({
          dataUser: res.data,
          uid: res.headers["uid"],
          access_token: res.headers["access-token"],
          client: res.headers["client"],
        })
      );
      console.log(JSON.parse(localStorage.getItem("user-data")));
      alert("Login successful");
      navigate("/homepage");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
      setError(true);
    }
  };
  return (
    <div className="relative bg-universe bg-cover bg-center bg-no-repeat">
      <section className="relative h-screen flex justify-center items-center">
        <div className="px-6 h-fit w-1/3 max-w-lg md:min-w-sm mx-5 py-6 text-black bg-white rounded-lg">
          <div className="flex w-full justify-center items-center flex-wrap h-full g-6">
            <div className="mb-12 md:mb-0 sm:mb-0 sx:mb-0 ">
              <form onSubmit={handleSubmit}>
                <div className="text-3xl font-bold text-center justify-center mb-2">
                  Login
                </div>
                <div className="mb-6 w-full">
                  <label>Email</label>
                  <div className="flex w-full items-center grow bg-blur rounded-lg px-3 mt-2 ring-2 ring-blue-500">
                    
                    <input
                      type="email"
                      id="username"
                      ref={userRef}
                      autoComplete="off"
                      className="form-control block w-full px-4 py-2 text-md text-black"
                      placeholder="Enter your email"
                      maxLength={36}
                      required
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label>Password</label>
                  <div className="flex justify-center items-center bg-blur rounded-lg px-3 mt-2 ring-2 ring-blue-500">
                    <div className="flex items-center">
                      
                      <input
                        type="password"
                        className="flex form-control w-auto px-4 py-2 text-md  text-black"
                        id="password"
                        placeholder="Enter your password"
                        maxLength={36}
                        ref={passwordRef}
                        required
                      />
                    </div>
                  </div>
                  
                </div>

                <div className="text-center">
                  <button
                    disabled={isFetching}
                    onClick={handleSubmit}
                    type="submit"
                    className="inline-block px-7 py-3 w-full bg-blue-600 text-white text-md tracking-wide font-bold leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Login
                  </button>
                  {error && (
                    <span style={{ color: "red" }}>
                      Wrong email or password
                    </span>
                  )}
                </div>

                <Link to="/signup">
                  <div className="m-auto text-blue-500 hover:text-blue-700 underline underline-offset-2">
                    Register
                  </div>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
