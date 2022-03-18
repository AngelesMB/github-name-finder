import "../styles/LetterList.scss";
import LetterItem from "./LetterItem";
import MessageItem from "./MessageItem";

const LetterList = ({ realName, message }) => {
  const lettersHtml = realName.split("").map((eachLetter, index) => {
    return <LetterItem key={index} letter={eachLetter}></LetterItem>;
  });

  const renderListItemsHtml = () => {
    if (message === "Blocks") {
      return lettersHtml;
    } else {
      return <MessageItem message={message}></MessageItem>;
    }
  };
  return <ul className="letter__list">{renderListItemsHtml()}</ul>;
};
export default LetterList;
