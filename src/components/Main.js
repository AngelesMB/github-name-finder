import "../styles/Main.scss";
import Form from "./Form";
import LetterList from "./LetterList";

const Main = ({
  updateUsername,
  updateSearchIsValid,
  username,
  realName,
  message,
}) => {
  return (
    <main className="main">
      <Form
        username={username}
        realname={realName}
        updateUsername={updateUsername}
        updateSearchIsValid={updateSearchIsValid}
      ></Form>
      <LetterList
        username={username}
        realName={realName}
        message={message}
      ></LetterList>
    </main>
  );
};
export default Main;
