import * as React from "react";
import { useStyletron } from "baseui";

function Dementiacard(pros) {
  const [css, theme] = useStyletron();
  return (
    <div
      className={css({
        boxShadow: "1px 1px 2px rgba(0,0,0,0.36)",
        borderRadius: "8px",
        background: "#f2f2f2",
        paddingBottom: "10px",
        paddingTop: "5px",
        paddingLeft: "5px",
        paddingRight: "5px",
        position: "relative",
      })}
    >
      <div className={css({ position: "relative" })}>
        <div
          className={css({
            position: "absolute",
            top: "5px",
            left: "5px",
            zIndex: "1",
          })}
        >
          <img src={pros.logosrc} className={css({})} />
        </div>
        <div className={css({ position: "relative" })}>
          <figure
            className={css({
              marginBottom: "0",
              marginTop: "0",
              paddingTop: "30px",
            })}
          >
            <img
              src={pros.imgSrc}
              className={css({
                height: "87px",
                width: "87px",
                borderRadius: "50%",
                objectFit: "cover",
                objectPosition: "center",
                marginBottom: "0",
              })}
            />
          </figure>
          <div
            className={css({
              position: "absolute",
              top: "25px",
              right: "25px",
            })}
          >
            <img src={pros.brainProgress} />
          </div>
        </div>
      </div>
      <h3
        className={css({
          fontSize: "16px",
          color: "#222222",
          lineHeight: "16px",
          fontWeight: "400",
          textAlign: "center",
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "-webkit-box",
          WebkitLineClamp: "2",
          WebkitBoxOrient: "vertical",
          minHeight: "40px",
          marginTop: "5px",
          marginBottom: "0",
        })}
      >
        {pros.title}
      </h3>
      <p
        className={css({
          fontSize: "14px",
          color: "#3b3a3a",
          lineHeight: "18px",
          fontWeight: "400",
          textAlign: "center",
          marginTop: "0",
          marginBottom: "0",
        })}
      >
        Due: {pros.date}
      </p>
    </div>
  );
}

export default Dementiacard;
