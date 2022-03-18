import "../styles/App.scss";
import { useEffect, useState } from "react";
import callToApi from "../services/api";
import Header from "./Header";
import Main from "./Main";

function App() {
  const [username, setUsername] = useState("");
  const [searchIsValid, setSearchIsValid] = useState(false);
  const [realName, setRealName] = useState("cmon");
  const [message, setMessage] = useState("");

  const updateUsername = (value) => {
    setMessage("");
    setUsername(value);
  };

  const updateSearchIsValid = () => {
    setSearchIsValid(true);
  };

  const updateMessage = () => {
    if (realName === "User not found" && username === "") {
      setMessage("Please, fill out the username field");
    } else if (realName === "User not found") {
      setMessage("Username not found :(");
    } else if (realName === "Name not found") {
      setMessage("We could not find the user's real name :(");
    } else {
      setMessage("Blocks");
    }
  };

  const URL = "https://api.github.com/users";

  useEffect(() => {
    if (searchIsValid) {
      callToApi(URL, username).then((response) => {
        setRealName(response);
        updateMessage();
        setSearchIsValid(false);
      });
    }
  }, [searchIsValid]);

  return (
    <div>
      <Header></Header>
      <Main
        updateUsername={updateUsername}
        updateSearchIsValid={updateSearchIsValid}
        username={username}
        realName={realName}
        message={message}
      ></Main>
    </div>
  );
}

export default App;
