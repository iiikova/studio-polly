import React from "react";
import s from "./Journal.module.scss";

function Journal() {
  return (
    <div className={s.outerWrap}>
      <div className="container">
        <div className={s.inner}>
          <h1>Journal</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            voluptas modi ullam. Numquam, corrupti! Iusto voluptates hic
            reprehenderit molestiae a laboriosam illum libero, atque quaerat,
            soluta velit, in architecto ipsum eius. Alias sint provident saepe
            ut dignissimos exercitationem cupiditate similique error at cum
            porro deleniti fugiat adipisci cumque, impedit fugit?
          </p>
        </div>
      </div>
    </div>
  );
}

export default Journal;
