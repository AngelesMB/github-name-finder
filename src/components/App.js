import "../styles/App.scss";
import { useEffect, useState } from "react";
import callToApi from "../services/api";
import Header from "./Header";
import Main from "./Main";

function App() {
  const [username, setUsername] = useState("");
  const [searchIsValid, setSearchIsValid] = useState(false);
  const [realName, setRealName] = useState("");
  const [message, setMessage] = useState("");

  const updateUsername = (value) => {
    setMessage("");
    setRealName("")
    setUsername(value);
  };

  const updateSearchIsValid = () => {
    if (username !== "") {
      setSearchIsValid(true);
    } else {
      setMessage("Please write something");
    }
  };

  const URL = "https://api.github.com/users";

  useEffect(() => {
    if (searchIsValid) {
      callToApi(URL, username).then((response) => {
        if (response === "User not found") {
          console.log("No existe usuario");
          setMessage("User not found")
        }
        if (response !== "Name not found") {
          setRealName(response);
          console.log(response)
        } else {
          console.log("No existe el nombre");
          setMessage("No Nombre");
        }
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
