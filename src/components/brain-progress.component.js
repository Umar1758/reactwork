import * as React from "react";
import { StatefulTooltip } from "baseui/tooltip";
import { useStyletron } from "baseui";
import { StatefulPopover, PLACEMENT, TRIGGER_TYPE } from "baseui/popover";
import { Paragraph3 } from "baseui/typography";

function BrainProgressComponent(props) {
  const [css, theme] = useStyletron();
  const iconClass = `icon-${props.iconname}`;
  return (
    <StatefulPopover
      content={
        <Paragraph3 margin="0" padding="scale500">
          {props.tooltipopup}
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
        className={
          iconClass +
          " " +
          css({
            color: props.colorcode,
            fontSize: "24px",
            cursor: "pointer",
          })
        }
      ></span>
    </StatefulPopover>
  );
}

export default BrainProgressComponent;
