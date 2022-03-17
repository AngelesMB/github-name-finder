import "../styles/Main.scss";
import Form from "./Form";
import LetterList from "./LetterList";

const Main = ({ updateUsername, updateSearchIsValid, username, realName }) => {
  return (
    <main className="main">
      <Form
        username={username}
        realname={realName}
        updateUsername={updateUsername}
        updateSearchIsValid={updateSearchIsValid}
      ></Form>
      <LetterList username={username} realName={realName}></LetterList>
    </main>
  );
};
export default Main;
