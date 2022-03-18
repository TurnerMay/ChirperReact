import React, { useState } from "react";
import Chirp from "./Chirp";

const App = () => {
  const [chirp, setChirp] = useState([
    { username: "TWM007", message: "Hollywood up to no good" },

    { username: "ShotGunDaddy", message: "You better get flat" },
    {
      username: "Page's New Shirt",
      message: "When Page stands up, I get down.",
    },
  ]);
  const [username, setUserName] = useState("");
  const [message, setMessage] = useState("");

  return (
    <>
      <div className="container border rounded mt-2 text-center">
        <div className="row">
          <div className="col"></div>
          
            <div class="form-group mt-1">
              <input
                type="username"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                class="form-control"
                placeholder="Username"
              />
            </div>
            <div class="form-group bg-light">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                class="form-control mt-3"
                rows="3"
                placeholder="Your Thoughts..."
              ></textarea>
            </div>
            <div className="row">
            <button id="submit-button"
              class="btn btn-primary mx-2 mt-3"
              onClick={(e) => {
                e.preventDefault();
                setChirp([
                  ...chirp,
                  {
                    username: username,
                    message: message,
                  },
                ]);
              }}
            >
              Submit
            </button>
         </div>
        </div>
        <div className="d-flex flex-column align-items-center">
          {chirp.map((chirp) => (
            <Chirp username={chirp.username} message={chirp.message} />
          ))}
        </div>
      </div>
    </>
  );
};
export default App;
