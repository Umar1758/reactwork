import * as React from "react";
import {
  useStyletron,
  ThemeProvider,
  createTheme,
  lightThemePrimitives,
} from "baseui";
import { Input } from "baseui/input";
import Roundfillbutton from "../components/roundfillbutton";
import Icons from "../components/icons";
function Topheader(props) {
  const [css] = useStyletron();
  const [value, setValue] = React.useState("");
  return (
    <div className="">
      <div
        className={css({
          background: "#0053b3",
          paddingLeft: "25px",
          paddingRight: "25px",
          paddingTop: "15px",
          paddingBottom: "10px",
          borderRadius: "16px 16px 0 0",
          marginBottom: "8px",
          position: "relative",
        })}
      >
        <h2
          className={css({
            textAlign: "center",
            color: "#ffffff",
            padding: "0",
            fontSize: "24px",
            fontWeight: "500",
            marginLeft: "0",
            marginRight: "0",
            marginTop: "0",
            marginBottom: "10px",
            lineHeight: "24px",
          })}
        >
          {props.label}
        </h2>
        {props.isSearch ? (
          <div
            className={css({
              width: "50%",
              margin: "0 auto 7px",
              overflow: "visible",
              position: "relative",
              display: "flex",
            })}
          >
            <ThemeProvider
              theme={createTheme(lightThemePrimitives, {
                colors: {
                  inputBorder: "#fff",
                  inputFill: "#ffffff",
                  inputFillError: "#9B0303",
                  inputFillActive: "#ffff",
                  inputBorderError: "#9B0303",
                },
              })}
            >
              <span
                className={css({
                  position: "absolute",
                  left: "13px",
                  top: "50%",
                  color: "#000",
                  fontSize: "22px",
                  marginTop: "-11px",
                })}
              >
                <Icons
                  iconname={"search"}
                  colorcode={"#000"}
                  tooltipopup={""}
                ></Icons>
              </span>
              <Input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder={props.placeholder}
                clearOnEscape
                overrides={{
                  Root: {
                    style: ({ $theme }) => ({
                      outline: "none",
                      backgroundColor: "#fff",
                      border: "0",
                      borderTopLeftRadius: "4px",
                      borderBottomLeftRadius: "4px",
                      paddingLeft: "40px",
                    }),
                  },
                  Input: {
                    style: ({ $theme }) => ({
                      width: "100%",
                      height: "38px",
                      backgroundColor: "#ffffff",
                      transition: "all ease  0.5s",
                      paddingLeft: "8px",
                      paddingRight: "8px",
                      paddingTop: "0",
                      paddingBottom: "0",
                      fontSize: "15px",
                      fontWeight: "400",
                      color: "#363636",
                    }),
                  },
                  InputContainer: {
                    style: ({ $theme }) => ({
                      outline: "none",
                      backgroundColor: "transparent",
                      border: "solid 1px #fff",
                      background: "#ffffff",
                      borderRadius: "4px",
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
              <div
                className={css({
                  opacity: "1",
                })}
              >
                <Roundfillbutton
                  buttonColor={"#3BA500"}
                  buttonHoverColor={"#318500"}
                  textColor={"#fff"}
                  borderColor={"#3BA500"}
                  text={"Search"}
                  hasArrow={false}
                  borderRadius={"4px"}
                  minwidth={"120px"}
                ></Roundfillbutton>
              </div>
            </ThemeProvider>
          </div>
        ) : null}
        <span
          className={css({
            display: "inline-block",
            background: "#f2f2f2",
            width: "100%",
            height: "10px",
            position: "absolute",
            left: "0",
            right: "0",
            bottom: "-5px",
            borderRadius: "10px",
          })}
        ></span>
      </div>
    </div>
  );
}

export default Topheader;
