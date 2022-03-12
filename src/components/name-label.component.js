import * as React from "react";
import { useStyletron } from "baseui";
import COLORS from "../utils/color-pallete.constant";

function NameLabelComponent(props) {
  const [css, theme] = useStyletron();
  return (
    <span
      className={
        css(styles.comonStyle) +
        " " +
        css(props.isLinked ? styles.isLinked : styles.isNotLinked)
      }
    >
      {props.namelabel}
    </span>
  );
}
const styles = {
  comonStyle: {
    fontSize: "16px",
    lineHeight: "24px",
  },
  isLinked: {
    color: COLORS.COBALT,
  },
  isNotLinked: {
    color: "pink",
  },
};

export default NameLabelComponent;
