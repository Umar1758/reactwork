import * as React from "react";
import {
  useStyletron,
  ThemeProvider,
  createTheme,
  lightThemePrimitives,
} from "baseui";
import { Select } from "baseui/select";
import ChevronDown from "baseui/icon/chevron-down";
import { SIZE } from "baseui/select";
const activitydata = [
  { label: "Activity1", id: "1" },
  { label: "Activity2", id: "#2" },
  { label: "Activity3", id: "#3" },
  { label: "Activity3", id: "#4" },
  { label: "Activity6", id: "#6" },
  { label: "Activity5", id: "#5" },
];
const placeholder1 = "Show all activities";
function Selectoption(props) {
  const [value, setValue] = React.useState("");
  const [css] = useStyletron();
  return (
    <ThemeProvider
      theme={createTheme(lightThemePrimitives, {
        colors: {
          borderFocus: "#717171",
          inputBorder: "#979797",
          inputFill: "#f7f7f7",
          inputFillError: "#9B0303",
          inputFillActive: "#fffffff",
          inputBorderError: "#9B0303",
          inputFillActive: "#fff",
        },
      })}
    >
      <Select
        options={activitydata}
        clearable={false}
        deleteRemoves={false}
        searchable={false}
        value={value}
        placeholder={placeholder1}
        onChange={(params) => setValue(params.value)}
        overrides={{
          ControlContainer: {
            style: ({ $theme }) => ({
              // backgroundColor: "#fff",
              borderWidth: "1px !important",
              borderStyle: "solid",
              borderTopLeftRadius: "2px",
              borderTopRightRadius: "2px",
              borderBottomRightRadius: "2px",
              borderBottomLeftRadius: "2px",
              boxShadow: "inset 1px 1px 3px rgba(0,0,0,0.5)",
              minWidth: "170px",
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
              paddingTop: "5px",
              paddingBottom: "3px",
            }),
          },
          IconsContainer: {
            style: ({ $theme }) => ({
              paddingRight: "8px",
            }),
          },
          SingleValue: {
            style: ({ $theme }) => ({
              color: "#3d3d3d",
              fontSize: "14px",
              fontWeight: "400",
            }),
          },
          Placeholder: {
            style: ({ $theme }) => ({
              color: "#3d3d3d",
              fontSize: "14px",
              fontWeight: "400",
            }),
          },
          SelectArrow: () => <i className="icon-down" />,
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

export default Selectoption;
