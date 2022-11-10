import React from "react";
import s from "./Info.module.scss";

function Info() {
  return (
    <div>
      <div className={s.infoTop}>
        <div className="container">
          <div className={s.row}>
            <div>
              <img src={require("../../assets/images/hash2.png")} alt="hash2" />
              <h2>sustainable materials</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                lobortis ante sit amet neque tristique rutrum.
              </p>
            </div>
            <div>
              <img src={require("../../assets/images/hash2.png")} alt="hash2" />
              <h2>sustainable materials</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                lobortis ante sit amet neque tristique rutrum.
              </p>
            </div>
            <div>
              <img src={require("../../assets/images/hash2.png")} alt="hash2" />
              <h2>sustainable materials</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                lobortis ante sit amet neque tristique rutrum.
              </p>
            </div>
            <div>
              <img src={require("../../assets/images/hash2.png")} alt="hash2" />
              <h2>sustainable materials</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                lobortis ante sit amet neque tristique rutrum.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={s.infoBottom}>
        <div className="container">
          <div className={s.row2}>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare.
              </p>
              <h2>katie, Chicago</h2>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare.
              </p>
              <h2>liam, london</h2>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare.
              </p>
              <h2>emma, portland</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
