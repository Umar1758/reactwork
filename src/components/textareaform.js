import * as React from "react";
import { FormControl } from "baseui/form-control";
import {
  useStyletron,
  ThemeProvider,
  createTheme,
  lightThemePrimitives,
} from "baseui";
import { Textarea } from "baseui/textarea";
function Textareaform(props) {
  const [value, setValue] = React.useState("");
  const [css] = useStyletron();
  return (
    <ThemeProvider
      theme={createTheme(lightThemePrimitives, {
        colors: {
          inputBorder: "#717171",
          inputFill: "#ffffff",
          inputFillError: "#9B0303",
          inputFillActive: "#ffff",
          inputBorderError: "#9B0303",
        },
      })}
    >
      <Textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Controlled Input"
        clearOnEscape
        overrides={{
          Root: {
            style: ({ $theme }) => ({
              outline: "none",
              backgroundColor: "transparent",
              border: "0",
            }),
          },
          Input: {
            style: ({ $theme }) => ({
              width: "100%",

              backgroundColor: "#ffffff",
              transition: "all ease  0.5s",
              paddingLeft: "10px",
              paddingRight: "10px",
              paddingTop: "10px",
              paddingBottom: "10px",
              fontSize: "16px",
              boxShadow: "inset 0px 1px 3px rgba(0,0,0,0.5)",
            }),
          },
          InputContainer: {
            style: ({ $theme }) => ({
              outline: "none",
              backgroundColor: "transparent",
              border: "solid 1px #717171",
              background: "#ffffff",
              borderRadius: "4px",

              transition:
                "border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
            }),
          },
          After: {
            style: ({ $theme }) => ({
              outline: "none",
              backgroundColor: "transparent",
            }),
          },
        }}
      />
    </ThemeProvider>
  );
}

export default Textareaform;
