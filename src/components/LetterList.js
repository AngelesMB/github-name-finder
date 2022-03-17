import LetterItem from "./LetterItem";

const LetterList = ({ username, realName }) => {
  const lettersHtml = realName.split("").map((eachLetter, index) => {
    return <LetterItem key={index} letter={eachLetter}></LetterItem>;
  });
  const renderListItemsHtml = () => {
    if (realName === "User not found") {
      return <li>Username not found</li>;
    } else if (realName === "Name not found") {
      return <li>We could not find {username}'s real name</li>;
    } else {
      return lettersHtml;
    }
  };
  return <ul>{renderListItemsHtml()}</ul>;
};
export default LetterList;
