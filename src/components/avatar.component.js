import * as React from "react";
import { useStyletron } from "baseui";

function AvatarComponent(props) {
  const [css, theme] = useStyletron();
  const getIntials = (name = "") => name.match(/\b\w/g).join("");
  return (
    <>
      {props.imageSrc != "" ? (
        <img src={props.imageSrc} />
      ) : (
        <span
          className={
            css(styles.nameInitials) +
            " " +
            css({
              width: props.size,
              height: props.size,
              lineHeight: props.size,
            })
          }
        >
          {getIntials(props.name)}
        </span>
      )}
    </>
  );
}
const styles = {
  nameInitials: {
    color: "#838383",
    fontSize: "30px",
    fontWeight: "400",
    textAlign: "center",
    background: "#d8d8d8",
    display: "inline-block",
    borderRadius: "50%",
    marginBottom: "2px",
  },
};

export default AvatarComponent;
