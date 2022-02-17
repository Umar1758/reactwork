import * as React from "react";
import { useStyletron } from "baseui";

function Dashboardwidget(props) {
  const [css, theme] = useStyletron();
  const iconClass = `icon-${props.iconname}`;
  return (
    <div
      className={css({
        background: "#fff",
        padding: "10px 15px",
        border: "1px solid #bdbdbd",
        position: "relative",
        borderRadius: "9px",
      })}
    ></div>
  );
}

export default Dashboardwidget;
