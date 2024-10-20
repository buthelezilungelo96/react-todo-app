import React, { useState } from "react";
import "./CommentForm.css";
import "../CommentCard/CommentCard.css";
// import CommentCard from "../CommentCard/CommentCard";

const CommentForm = () => {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([
    {id: 1, text: "Hi Guy's I am new here...", name: "LB" },
    {id: 2, text: "Welcome lulu", name: "BS" },
    {id:3, text: "Nice to be here", name: "LB" },
  ]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    console.log("button clicked!");
    // clone the previous data
    let prevData = [...data];

    // generate random number to use as an Id
    const randomNumber = Math.floor(Math.random() * 100001);

    // add new data (which we typed) to the clone of the previous data
    prevData.push({id: randomNumber,  text: inputValue, name: "LB" });

    //Set the data with the new prevData
    setData(prevData);
    setInputValue("")
  };

  // const onRemoveHandler = () => {
  //   console.log("Removing item");
  // };

  return (
    <>
      <div className="comment-form-wrapper">
        <input
          onChange={handleChange}
          type="text"
          value={inputValue}
          placeholder="What's happening?"
        />
        <button onClick={handleClick}>Post</button>
      </div>
      <br />
      {data.map((item) => {
        return (
          <div key={item.id} className="comment-card-wrapper">
            <div className="comment-card-wrapper-left">
              <button className="comment-card-profile-button">{item.name}</button>
              <p>{item.text}</p>
            </div>
            <div className="comment-card-wrapper-right">
              <button onClick={() => {
                const filteredData = data.filter((arg) => arg.id !== item.id); // exclude
                console.log("filtered...", filteredData)
                setData(filteredData)
                }}>Delete</button>


              <button>Edit</button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CommentForm;


// >, >= <=, <, ==, ===, !==