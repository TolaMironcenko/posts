import React, { useState } from "react";
import styles from "./AddCardForm.module.css";
import createpost from './createpost'

const AddCardForm = ({ setActiveaddpost, setPosts, posts, ...props }) => {
  const [newpost, setNewpost] = useState({ title: "", body: "", userId: 1 });

  return (
    <div
      className={styles.addcardform}
      onClick={() => {
        setActiveaddpost(false);
      }}
      {...props}
    >
      <div
        className={styles.addcardformcontent}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className={styles.addcardtitle}>Add post</h2>
        <h3 className={styles.addcardtitle}>Post title</h3>
        <div className={styles.addcardbody}>
          <input
            onChange={(e) => {
              setNewpost({ ...newpost, title: e.target.value });
              console.log(newpost);
            }}
            value={newpost.title}
            type="text"
            className={styles.addcardinput}
            placeholder="Title"
          />
          <h3 className={styles.addcardtitle}>Post body</h3>
          <textarea
            value={newpost.body}
            onChange={(e) => {
              setNewpost({ ...newpost, body: e.target.value });
              console.log(newpost);
            }}
            type="text"
            className={styles.addcardinput}
            placeholder="Body"
            style={{ height: "40vh" }}
          />
        </div>
        <button
          className={styles.addcardbutton}
          onClick={() => {
            if (newpost.title !== '' && newpost.body !== '') {
                createpost(newpost, setNewpost, setPosts, posts);
            }
            setActiveaddpost(false);
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddCardForm;
