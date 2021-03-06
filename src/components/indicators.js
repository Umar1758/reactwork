import * as React from "react";
import { StatefulPopover, PLACEMENT, TRIGGER_TYPE } from "baseui/popover";
import { Paragraph3 } from "baseui/typography";
import { useStyletron } from "baseui";

function Indicators(props) {
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
            // outline: `${$theme.colors.warning200} solid`,
            outline: "0",
            border: "0",
          }),
        },
        Arrow: {
          style: ({ $theme }) => ({
            // outline: `${$theme.colors.warning200} solid`,
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
      {/* <span className={css({...theme.typography.font300})}>
        Hover
      </span> */}
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
    </StatefulPopover>
  );
}

export default Indicators;
