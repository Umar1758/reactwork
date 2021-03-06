import * as React from "react";
import {
  useStyletron,
  ThemeProvider,
  createTheme,
  lightThemePrimitives,
} from "baseui";
import { Tabs, Tab } from "baseui/tabs";
import { Button, SHAPE } from "baseui/button";
function Roundfillbutton(props) {
  const [css, theme] = useStyletron();
  const [activeKey, setActiveKey] = React.useState("0");
  const secondary = "secondary";
  return (
    <ThemeProvider
      theme={createTheme(lightThemePrimitives, {
        colors: {
          buttonPrimaryFill: props.buttonColor,
          buttonPrimaryHover: props.buttonHoverColor,
        },
      })}
    >
      <div className={css({})}>
        <Button
          className={css({
            ":hover": {
              backgroundColor: props.buttonHoverColor,
              borderColor: props.borderHoverColor,
              color: props.textHoverColor,
            },
            ":focus": {
              backgroundColor: props.buttonHoverColor,
              borderColor: props.borderHoverColor,
              color: props.textHoverColor,
            },
          })}
          onClick={props.handleClick}
          overrides={{
            BaseButton: {
              style: ({ $theme }) => ({
                outline: "0",
                fontSize: "17px",
                fontWeight: "400",
                lineHeight: "38px",
                borderTopLeftRadius: props.borderRadius,
                borderTopRightRadius: props.borderRadius,
                borderBottomLeftRadius: props.borderRadius,
                borderBottomRightRadius: props.borderRadius,

                // borderColor: props.borderColor,
                // borderRightColor: props.borderColor,
                // borderTopColor: props.borderColor,
                // borderBottomColor: props.borderColor,
                // borderWidth: "1px ",
                // borderStyle: "solid",
                border: `${props.borderColor} solid 1px`,
                position: "relative",
                paddingLeft: "20px",
                paddingRight: "20px",
                paddingTop: "0",
                paddingBottom: "0",
                display: "inline-block",
                color: props.textColor,
                transition: "all ease 0.5s",
                minWidth: props.minwidth,
                // textTransform: "uppercase",
              }),
            },
          }}
        >
          {props.text}
          {props.hasArrow ? (
            <div
              className={css({
                color: "#fff",
                position: "absolute",
                top: "1px",
                fontWeight: "400",
                right: "10px",
              })}
            >
              <svg
                width="9"
                height="14"
                viewBox="0 0 9 14"
                xmlns="http://www.w3.org/2000/svg"
                fill="#FFF"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.703 0L0 1.633 5.595 7 0 12.367 1.703 14 9 7 1.703 0z"
                ></path>
              </svg>
            </div>
          ) : null}
        </Button>
      </div>
    </ThemeProvider>
  );
}

export default Roundfillbutton;
