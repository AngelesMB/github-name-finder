import "../styles/LetterList.scss";
import LetterItem from "./LetterItem";
import MessageItem from "./MessageItem";

const LetterList = ({ realName, message }) => {
  const renderLettersHtml = () => {
    return realName.split("").map((eachLetter, index) => {
      return <LetterItem key={index} letter={eachLetter}></LetterItem>;
    });
  };
  const renderListItemsHtml = () => {
    if (message !== "") {
      return <MessageItem message={message}></MessageItem>;
    } else {
      return renderLettersHtml();
    }
  };

  return <ul className="letter__list">{renderListItemsHtml()}</ul>;
};

export default LetterList;
