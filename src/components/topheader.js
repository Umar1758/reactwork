import * as React from "react";
import { useStyletron } from "baseui";

function Topheader(props) {
  const [css] = useStyletron();
  return (
    <div className="">
      <div
        className={css({
          background: "#0053b3",
          paddingLeft: "25px",
          paddingRight: "25px",
          paddingTop: "15px",
          paddingBottom: "10px",
          borderRadius: "16px 16px 0 0",
          marginBottom: "8px",
          position: "relative",
        })}
      >
        <h2
          className={css({
            textAlign: "center",
            color: "#ffffff",
            padding: "0",
            fontSize: "24px",
            fontWeight: "500",
            marginLeft: "0",
            marginRight: "0",
            marginTop: "0",
            marginBottom: "10px",
            lineHeight: "24px",
          })}
        >
          {props.label}
          <span
            className={css({
              display: "inline-block",
              background: "#f2f2f2",
              width: "100%",
              height: "10px",
              position: "absolute",
              left: "0",
              right: "0",
              bottom: "-5px",
              borderRadius: "10px",
            })}
          ></span>
        </h2>
      </div>
    </div>
  );
}

export default Topheader;
