import "./App.css";
import CommentCard from "./components/CommentCard/CommentCard";
import CommentForm from "./components/CommentForm/CommentForm";
import MessageModal from "./components/MessageModal/MessageModal";

function App() {
  const commentData1 = { text: "Hi Guy's I am new here...", name: "LB" };
  const commentData2 = { text: "Welcome lulu", name: "BS" };
  const commentData3 = { text: "Nice to be here", name: "LB" };

  const data = [
    { text: "Hi Guy's I am new here...", name: "LB" },
    { text: "Welcome lulu", name: "BS" },
    { text: "Nice to be here", name: "LB" },
  ];

  const func = () => {
    return <CommentCard text={commentData1.text} name={commentData1.name} />;
  };

  return (
    <div>
      <CommentForm />
      
      {/* <CommentCard text={commentData1.text} name={commentData1.name}/>
      <CommentCard text={commentData2.text} name={commentData2.name}/>
      <CommentCard text={commentData3.text} name={commentData3.name}/> */}
      {/* array.map(function) */}

      {data.map((item) => {
        return (
          <CommentCard text={item.text} name={item.name} />
        );
      })}
      <MessageModal />
    </div>
  );
}

export default App;

// const numbers = [65, 44, 12, 4];
// const newArr = numbers.map(myFunction)

// function myFunction(num) {
//   return num * 10;
// }
