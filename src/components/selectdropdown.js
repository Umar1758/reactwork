import * as React from "react";
import {
  useStyletron,
  ThemeProvider,
  createTheme,
  lightThemePrimitives,
} from "baseui";
import { Select } from "baseui/select";
import { SIZE } from "baseui/select";
const dropdowndata = [
  { label: "AliceBlue", id: "#F0F8FF" },
  { label: "AntiqueWhite", id: "#FAEBD7" },
  { label: "Aqua", id: "#00FFFF" },
  { label: "Aquamarine", id: "#7FFFD4" },
  { label: "Azure", id: "#F0FFFF" },
  { label: "Beige", id: "#F5F5DC" },
];
function Selectdropdown(props) {
  const [value, setValue] = React.useState("");
  const [css] = useStyletron();
  return (
    <ThemeProvider
      theme={createTheme(lightThemePrimitives, {
        colors: {
          borderFocus: "#717171",
          inputBorder: "#717171",
          inputFill: "#ffffff",
          inputFillError: "#9B0303",
          inputFillActive: "#fffffff",
          inputBorderError: "#9B0303",
          inputFillActive: "#fff",
        },
      })}
    >
      <Select
        options={dropdowndata}
        clearable={false}
        deleteRemoves={false}
        searchable={false}
        value={value}
        placeholder="Select color"
        onChange={(params) => setValue(params.value)}
        overrides={{
          ControlContainer: {
            style: ({ $theme }) => ({
              backgroundColor: "#fff",
              borderWidth: "1px !important",
              borderStyle: "solid",
              borderTopLeftRadius: "4px",
              borderTopRightRadius: "4px",
              borderBottomRightRadius: "4px",
              borderBottomLeftRadius: "4px",
              boxShadow: "inset 0px 1px 3px rgba(0,0,0,0.5)",
            }),
          },
          Root: {
            style: ({ $theme }) => ({
              outline: "none",
              backgroundColor: "transparent",
              border: "0",
            }),
          },

          InputContainer: {
            style: ({ $theme }) => ({}),
          },
          Input: {
            style: ({ $theme }) => ({}),
          },
          ValueContainer: {
            style: ({ $theme }) => ({
              paddingTop: "7px",
              paddingBottom: "7px",
            }),
          },
          SelectArrow: {
            props: {
              //     overrides: {
              //       // Svg: {
              //       //   // style: ({ $theme }) => ({
              //       //   //   outline: `${$theme.colors.warning200} solid`,
              //       //   //   backgroundColor: $theme.colors.warning200,
              //       //   // }),
              //       // },
              //     },
            },
          },
        }}
      />

      {/*       
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
      /> */}
    </ThemeProvider>
  );
}

export default Selectdropdown;
