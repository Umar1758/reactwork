import * as React from "react";
import { StatefulPopover, PLACEMENT, TRIGGER_TYPE } from "baseui/popover";
import { Paragraph3 } from "baseui/typography";
import { useStyletron } from "baseui";

function Impactbars(props) {
  const [css, theme] = useStyletron();
  return (
    <StatefulPopover
      content={
        <Paragraph3 margin="0" padding="scale500">
          {props.tooltiptext}
        </Paragraph3>
      }
      accessibilityType={"tooltip"}
      showArrow
      triggerType={TRIGGER_TYPE.hover}
      placement={PLACEMENT.bottom}
      overrides={{
        Root: {
          style: ({ $theme }) => ({
            outline: "0",
            border: "0",
          }),
        },
        Arrow: {
          style: ({ $theme }) => ({
            backgroundColor: "#fff2bd",
          }),
        },
        Body: {
          style: ({ $theme }) => ({
            outline: "0",
            padding: "0",
            backgroundColor: "transparent",
          }),
        },
        Inner: {
          style: ({ $theme }) => ({
            backgroundColor: "#fff2bd",
          }),
        },
      }}
    >
      <div
        className={css({
          display: "inline-block",
          position: "relative",
          cursor: "pointer",
        })}
      >
        <span
          className={css({
            height: "4px",
            background: "#ced6c6",
            width: "4px",
            display: "inline-block",
            verticalAlign: "bottom",
            marginRight: "4px",
          })}
        ></span>
        <span
          className={css({
            height: "11px",
            background: "#ced6c6",
            width: "4px",
            display: "inline-block",
            marginRight: "4px",
            verticalAlign: "bottom",
          })}
        ></span>
        <span
          className={css({
            height: "15px",
            background: "#ced6c6",
            width: "4px",
            display: "inline-block",
            verticalAlign: "bottom",
            marginRight: "4px",
          })}
        ></span>
        <span
          className={css({
            height: "22px",
            background: "#ced6c6",
            width: "4px",
            display: "inline-block",
            verticalAlign: "bottom",
          })}
        ></span>
      </div>
    </StatefulPopover>
  );
}

export default Impactbars;
