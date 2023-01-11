import React, { useState } from "react";
import axios from "../axios/axios";

export default function LoginPage() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState(false);
  const name = `${firstName} ${lastName}`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/auth", {
        name: name,
        email: email,
        password: password,
      });
      res.data && window.location.replace("/");
      console.log(res);
      console.log(alert("Welocome new member"));
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };

  return (
    <div className="relative bg-universe bg-cover bg-center bg-no-repeat">
      <section className="h-screen flex justify-center items-center">
        <div className="px-6 h-auto max-w-lg md:min-w-sm mx-5 py-6  bg-white rounded-lg">
          <div className="flex justify-center items-center flex-wrap h-full g-6">
            <div className="mb-12 md:mb-0 sm:mb-0 sx:mb-0 ">
              <form onSubmit={handleSubmit}>
                <div className="mb-2 flex flex-column">
                  <div className="w-full">
                    <label className="text-black">First name</label>
                    <div className="flex items-center grow bg-blur rounded-lg px-3 mt-2 ring-2 ring-blue-500 ">
                      <input
                        type="text"
                        onChange={(e) => setFirstName(e.target.value)}
                        className="form-control block w-full py-2 text-md font-normal text-black bg-transparent m-0 "
                        placeholder="First name"
                        maxLength={36}
                      />
                    </div>
                  </div>
                  <div className="w-full pt-2 ml-2">
                    <label className="text-black">Last name</label>
                    <div className="flex items-center grow bg-blur rounded-lg px-3 ring-2 ring-blue-500 ring-inset">
                      <input
                        type="text"
                        onChange={(e) => setLastName(e.target.value)}
                        className="form-control block w-full py-2 text-md font-normal text-black bg-transparent m-0 "
                        placeholder="Last name"
                        maxLength={36}
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-2">
                  <label className="text-black">Email</label>
                  <div className="flex items-center grow bg-blur rounded-lg px-3 mt-2 border ring-2 ring-blue-500 ring-inset">
                    <input
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control block w-full px-4 py-2 text-md font-normal text-black bg-transparent m-0 "
                      placeholder="Enter your email"
                      maxLength={36}
                    />
                  </div>
                </div>

                <div className="mb-2">
                  <label className="text-black">Password</label>
                  <div className="flex items-center bg-blur rounded-lg px-3 mt-2 ring-2 ring-blue-500 ring-inset">
                    <input
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                      className="flex form-control w-auto px-4 py-2 text-md font-normal text-black bg-transparent m-0 "
                      placeholder="Enter your password"
                      maxLength={36}
                    />
                  </div>
                </div>

                <div className="text-center">
                  {error && (
                    <span style={{ color: "red" }}>
                      Invalid password or email
                    </span>
                  )}
                  <button
                    type="submit"
                    className="inline-block px-7 mt-4 py-3 w-full bg-blue-600 text-white text-md font-bold leading-snug rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    SignUp
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
