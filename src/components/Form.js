import "../styles/Form.scss";

const Form = ({ realname, updateUsername, updateSearchIsValid }) => {
  const handleUsername = (ev) => {
    return updateUsername(ev.currentTarget.value);
  };
  const handleFindClick = () => {
    return updateSearchIsValid();
  };
  return (
    <form className="form" action="" onSubmit={(ev) => ev.preventDefault()}>
      <label className="form__label" htmlFor="githubUsername">
        Github's username
      </label>
      <input
        className="form__input"
        type="text"
        name=""
        id="githubUsername"
        onChange={handleUsername}
      />
      <input
        className="form__button"
        type="submit"
        value="Find user's real name"
        onClick={handleFindClick}
      />
    </form>
  );
};
export default Form;
