import * as React from "react";
import {
  ThemeProvider,
  useStyletron,
  createTheme,
  lightThemePrimitives,
} from "baseui";

import { RadioGroup, Radio, ALIGN } from "baseui/radio";
function Radiobutton(props) {
  const [css, theme] = useStyletron();
  const [value, setValue] = React.useState("1");
  return (
    <div className="">
      <ThemeProvider
        theme={createTheme(lightThemePrimitives, {
          colors: {
            tickFill: "transparent",
            tickFillHover: "#fff",
            tickFillSelected: "transparent",
            tickFillSelectedHover: "#fff",
            tickBorder: "#7d7d7d",
            tickMarkFill: "#3ba500",
          },
        })}
      >
        <RadioGroup
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
          name="number"
          align={ALIGN.horizontal}
          overrides={{
            Root: {
              style: ({ $theme }) => ({}),
            },
            Input: {
              style: ({ $theme }) => ({
                position: "absolute",
                opacity: "0",
                cursor: "pointer",
                left: "0",
                right: "0",
                width: "100%",
                height: "100%",
                zIndex: "9",
                margin: "0",
              }),
            },
            Label: {
              style: ({ $theme }) => ({
                // outline: `${$theme.colors.warning200} solid`,
                // backgroundColor: $theme.colors.warning200
                opacity: "11",
                paddingLeft: "8px",
                fontSize: "16px",
                color: "#363636",
                lineHeight: "24px",
                fontWeight: "400",
              }),
            },
            RadioGroupRoot: {
              style: ({ $theme }) => ({
                opacity: "22",
              }),
            },
            RadioMarkInner: {
              style: ({ $theme, $checked }) => ({
                opacity: "33",
                minHeight: "14px",
                minWidth: "14px",
                backgroundColor: !$checked ? "#fff" : "#3ba500",
                // borderBottom: !$checked
                //   ? "solid 1px #bdbdbd"
                //   : "solid 1px transparent",
              }),
            },
            RadioMarkOuter: {
              style: ({ $theme, $checked }) => ({
                opacity: "44",
                marginLeft: "0",
                marginRight: "0",
                marginBottom: "0",
                marginTop: "0",
                backgroundColor: "#ffffff",
                boxShadow: "inset 0px 1px 3px rgb(0 0 0 / 50%)",
                border: !$checked ? "solid 1px #b7b7b7" : "solid 1px #000",
              }),
            },
          }}
        >
          {props.radioOptions.length
            ? props.radioOptions.map((r, i) => <Radio value={i + 1}>{r}</Radio>)
            : null}

          {/* <Radio value="1">Yess</Radio>
          <Radio value="2">No</Radio> */}

          {/* {radioArr?radioArr.map(r=><radion value={r}>r</radion>):null} */}
        </RadioGroup>
      </ThemeProvider>
    </div>
  );
}

export default Radiobutton;
