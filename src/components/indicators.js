import * as React from "react";
import { StatefulTooltip } from "baseui/tooltip";
import { useStyletron } from "baseui";

function Indicators(props) {
  const [css, theme] = useStyletron();
  return (
    <StatefulTooltip accessibilityType={"tooltip"} content={props.tooltiptext}>
      <span
        className={css({
          display: "inline-block",
          background: props.color,
          borderStyle: "solid",
          borderWidth: "1px",
          borderColor: props.border,
          width: "13px",
          height: "13px",
          borderRadius: "50%",
          marginTop: "5px",
          cursor: "pointer",
        })}
      ></span>
    </StatefulTooltip>
  );
}

export default Indicators;
