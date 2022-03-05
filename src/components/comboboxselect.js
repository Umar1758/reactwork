import * as React from "react";
import {
  useStyletron,
  ThemeProvider,
  createTheme,
  lightThemePrimitives,
} from "baseui";
import { Combobox } from "baseui/combobox";
import { SIZE } from "baseui/select";
const dropdowndata = [
  { label: "AliceBlue", id: "#F0F8FF" },
  { label: "AntiqueWhite", id: "#FAEBD7" },
  { label: "Aqua", id: "#00FFFF" },
  { label: "Aquamarine", id: "#7FFFD4" },
  { label: "Azure", id: "#F0FFFF" },
  { label: "Beige", id: "#F5F5DC" },
];
function Comboboxselect(props) {
  const [value, setValue] = React.useState("");
  const [css] = useStyletron();
  return (
    <ThemeProvider
      theme={createTheme(lightThemePrimitives, {
        colors: {
          comboboxListItemFocus: "#f8f8f8",
          comboboxListItemHover: "#f8f8f8",
        },
      })}
    >
      <Combobox
        value={value}
        onChange={(nextValue) => setValue(nextValue)}
        size={SIZE.compact}
        overrides={{
          Root: {
            style: ({ $theme }) => ({
              outline: "none",
              backgroundColor: "transparent",
              border: "0",
            }),
          },
          Input: {
            props: {
              overrides: {
                Root: {
                  style: ({ $theme }) => ({
                    outline: "none",
                    backgroundColor: "transparent",
                    borderWidth: "0",
                  }),
                },

                Input: {
                  style: ({ $theme }) => ({
                    width: "100%",
                    height: "40px",

                    backgroundColor: "#ffffff",
                    transition: "all ease  0.5s",
                    paddingLeft: "10px",
                    paddingRight: "10px",
                    paddingTop: "0",
                    paddingBottom: "0",
                    fontSize: "16px",
                    boxShadow: "inset 0px 1px 3px rgba(0,0,0,0.5)",
                  }),
                },
              },
            },
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
        }}
        options={dropdowndata}
        mapOptionToString={(option) => option.label}
      />
    </ThemeProvider>
  );
}

export default Comboboxselect;
