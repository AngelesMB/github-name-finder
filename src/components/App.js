import "../styles/App.scss";
import { useEffect, useState } from "react";
import callToApi from "../services/api";
import Header from "./Header";
import Main from "./Main";

function App() {
  const [username, setUsername] = useState("");
  const [searchIsValid, setSearchIsValid] = useState(false);
  const [realName, setRealName] = useState("Lola");

  const updateUsername = (value) => {
    return setUsername(value);
  };

  const updateSearchIsValid = () => {
    return setSearchIsValid(true);
  };

  const URL = "https://api.github.com/users";

  useEffect(() => {
    if (searchIsValid) {
      callToApi(URL, username).then((response) => {
        setRealName(response);
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
      ></Main>
    </div>
  );
}

export default App;
