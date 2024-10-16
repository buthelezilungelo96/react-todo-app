import React from "react";
import "./CommentCard.css";

const CommentCard = (props) => {
  return (
    <div className="comment-card-wrapper">
      <div className="comment-card-wrapper-left">
        <button className="comment-card-profile-button">{props.name}</button>
        <p>{props.text}</p>
      </div>
      <div className="comment-card-wrapper-right">
        <button>Delete</button>
        <button>Edit</button>
      </div>
    </div>
  );
};

export default CommentCard;
