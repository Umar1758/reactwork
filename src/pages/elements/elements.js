import * as React from "react";
import {
  useStyletron,
  ThemeProvider,
  createTheme,
  lightThemePrimitives,
} from "baseui";
import InputFieldLabel from "../../components/inputfieldlabel";
import Textareaform from "../../components/textareaform";
import Roundfillbutton from "../../components/roundfillbutton";
import Tables from "../../components/tables";
import Topheader from "../../components/topheader";
import Indicators from "../../components/indicators";
import Navtabs from "../../components/navtabs";

import { Grid, Cell } from "baseui/layout-grid";
import { StyledLink } from "baseui/link";

function Elements() {
  const [value, setValue] = React.useState("");
  const next = "Next";
  const backtext = "Back";
  const [css] = useStyletron();
  const [activeKey, setActiveKey] = React.useState("0");
  return (
    <div className="AppHome">
      <Outer>
        <Grid>
          <Cell
            span={[3]}
            overrides={{
              Cell: {
                style: ({ $theme }) => ({
                  background: "#f8f8f8",
                }),
              },
            }}
          >
            <Inner>
              <nav
                className={css({
                  padding: "15px",
                })}
              >
                <ThemeProvider
                  theme={createTheme(lightThemePrimitives, {
                    colors: {
                      linkText: "#525252",
                      linkVisited: "#363636",
                      linkHover: "#363636",
                      linkActive: "#363636",
                    },
                  })}
                >
                  <StyledLink
                    href="#buttons"
                    className={css({
                      fontSize: "20px",
                      color: "#000",
                      lineHeight: "24px",
                      fontWeight: "500",
                      marginBottom: "16px",
                      textAlign: "left",
                      display: "block",
                    })}
                  >
                    Buttons
                  </StyledLink>
                  <StyledLink
                    href="#tabs"
                    className={css({
                      fontSize: "20px",
                      color: "#000",
                      lineHeight: "24px",
                      fontWeight: "500",
                      marginBottom: "16px",
                      textAlign: "left",
                      display: "block",
                    })}
                  >
                    Tabs
                  </StyledLink>
                  <StyledLink
                    href="#inputs"
                    className={css({
                      fontSize: "20px",
                      color: "#000",
                      lineHeight: "24px",
                      fontWeight: "500",
                      marginBottom: "16px",
                      textAlign: "left",
                      display: "block",
                    })}
                  >
                    Inputs
                  </StyledLink>
                  <StyledLink
                    href="#textarea"
                    className={css({
                      fontSize: "20px",
                      color: "#000",
                      lineHeight: "24px",
                      fontWeight: "500",
                      marginBottom: "16px",
                      textAlign: "left",
                      display: "block",
                    })}
                  >
                    Textarea
                  </StyledLink>
                  <StyledLink
                    href="#indicators"
                    className={css({
                      fontSize: "20px",
                      color: "#000",
                      lineHeight: "24px",
                      fontWeight: "500",
                      marginBottom: "16px",
                      textAlign: "left",
                      display: "block",
                    })}
                  >
                    Indicators
                  </StyledLink>
                  <StyledLink
                    href="#tables"
                    className={css({
                      fontSize: "20px",
                      color: "#000",
                      lineHeight: "24px",
                      fontWeight: "500",
                      marginBottom: "16px",
                      textAlign: "left",
                      display: "block",
                    })}
                  >
                    Tables
                  </StyledLink>
                  <StyledLink
                    href="#topheader"
                    className={css({
                      fontSize: "20px",
                      color: "#000",
                      lineHeight: "24px",
                      fontWeight: "500",
                      marginBottom: "16px",
                      textAlign: "left",
                      display: "block",
                    })}
                  >
                    Top Blue header
                  </StyledLink>
                </ThemeProvider>
              </nav>
            </Inner>
          </Cell>
          <Cell span={[9]}>
            <Inner>
              <section id="buttons">
                <h3
                  className={css({
                    fontSize: "20px",
                    color: "#000",
                    lineHeight: "24px",
                    fontWeight: "500",
                    marginBottom: "16px",
                    textAlign: "left",
                    marginBottom: "0",
                  })}
                >
                  Buttons Samples
                </h3>
                <div
                  className={css({
                    display: "flex",
                    flexWrap: "wrap",
                  })}
                >
                  <h2
                    className={css({
                      fontSize: "16px",
                      color: "#000",
                      lineHeight: "24px",
                      fontWeight: "500",
                      marginBottom: "16px",
                      textAlign: "left",
                      width: "100%",
                      marginBottom: "0",
                    })}
                  >
                    Wizard Buttons
                  </h2>
                  <Roundfillbutton
                    buttonColor={"#318500"}
                    buttonHoverColor={"#3ba500"}
                    textColor={"#fff"}
                    text={"Label"}
                    hasArrow={true}
                    borderRadius={"100px"}
                  ></Roundfillbutton>

                  <Roundfillbutton
                    buttonColor={"#318500"}
                    buttonHoverColor={"#3ba500"}
                    textColor={"#fff"}
                    text={"Save"}
                    hasArrow={false}
                    borderRadius={"100px"}
                  ></Roundfillbutton>
                  <Roundfillbutton
                    buttonColor={"#ffffff"}
                    buttonHoverColor={"#f8f8f8"}
                    borderColor={"#3c3c3c"}
                    textColor={"#3c3c3c"}
                    text={"Save"}
                    hasArrow={false}
                    borderRadius={"100px"}
                  ></Roundfillbutton>
                  <Roundfillbutton
                    buttonColor={"#ffffff"}
                    buttonHoverColor={"#f8f8f8"}
                    borderColor={"#3c3c3c"}
                    textColor={"#3c3c3c"}
                    text={backtext}
                    hasArrow={false}
                    borderRadius={"100px"}
                  ></Roundfillbutton>
                </div>
                <div
                  className={css({
                    display: "flex",
                    flexWrap: "wrap",
                  })}
                >
                  <h2
                    className={css({
                      fontSize: "16px",
                      color: "#000",
                      lineHeight: "24px",
                      fontWeight: "500",
                      marginBottom: "16px",
                      textAlign: "left",
                      width: "100%",
                      marginBottom: "0",
                    })}
                  >
                    Popup Buttons
                  </h2>
                  <Roundfillbutton
                    buttonColor={"#ffffff"}
                    buttonHoverColor={"#ffffff"}
                    textColor={"#0565FF"}
                    borderColor={"#0565FF"}
                    text={next}
                    hasArrow={false}
                    borderRadius={"4px"}
                  ></Roundfillbutton>

                  <Roundfillbutton
                    buttonColor={"#ffffff"}
                    buttonHoverColor={"#ffffff"}
                    textColor={"#b00707 "}
                    borderColor={"#b00707"}
                    text={"Label"}
                    hasArrow={false}
                    borderRadius={"4px"}
                  ></Roundfillbutton>

                  <Roundfillbutton
                    buttonColor={"#ffffff"}
                    buttonHoverColor={"#ffffff"}
                    textColor={"#066501"}
                    borderColor={"#066501"}
                    text={"Label"}
                    hasArrow={false}
                    borderRadius={"4px"}
                  ></Roundfillbutton>
                  <Roundfillbutton
                    buttonColor={"#e71313"}
                    buttonHoverColor={"#b30f0f"}
                    borderColor={"#e71313"}
                    textColor={"#fff"}
                    text={"Label"}
                    hasArrow={false}
                    borderRadius={"4px"}
                  ></Roundfillbutton>
                </div>
              </section>

              <section id="tabs">
                <h3
                  className={css({
                    fontSize: "20px",
                    color: "#000",
                    lineHeight: "24px",
                    fontWeight: "500",
                    marginBottom: "16px",
                    textAlign: "left",
                  })}
                >
                  Tabs
                </h3>
                <Navtabs></Navtabs>
              </section>
              <section id="inputs">
                <h3
                  className={css({
                    fontSize: "20px",
                    color: "#000",
                    lineHeight: "24px",
                    fontWeight: "500",
                    marginBottom: "16px",
                    textAlign: "left",
                  })}
                >
                  Input
                </h3>
                <InputFieldLabel></InputFieldLabel>
              </section>
              <section id="textarea">
                <h3
                  className={css({
                    fontSize: "20px",
                    color: "#000",
                    lineHeight: "24px",
                    fontWeight: "500",
                    marginBottom: "16px",
                    textAlign: "left",
                  })}
                >
                  Textarea
                </h3>
                <Textareaform></Textareaform>
              </section>
              <section id="tables">
                <h3
                  className={css({
                    fontSize: "20px",
                    color: "#000",
                    lineHeight: "24px",
                    fontWeight: "500",
                    marginBottom: "16px",
                    textAlign: "left",
                  })}
                >
                  Indicators
                </h3>
                <Indicators
                  color={"#FF9500"}
                  border={"#FF9500"}
                  tooltiptext={"Affirmed"}
                ></Indicators>
                <br></br>
                <Indicators
                  color={"#fff"}
                  border={"#0AA401"}
                  tooltiptext={"Status"}
                ></Indicators>
                <br></br>

                <Indicators
                  color={"#3BA500"}
                  border={"#3BA500"}
                  tooltiptext={"Read"}
                ></Indicators>
                <br></br>

                <Indicators
                  color={"#F33939"}
                  border={"#F33939"}
                  tooltiptext={"UnRead"}
                ></Indicators>
                <br></br>
              </section>
              <section id="tables">
                <h3
                  className={css({
                    fontSize: "20px",
                    color: "#000",
                    lineHeight: "24px",
                    fontWeight: "500",
                    marginBottom: "16px",
                    textAlign: "left",
                  })}
                >
                  Tables
                </h3>
                <Tables></Tables>
              </section>
              <section id="topheader">
                <h3
                  className={css({
                    fontSize: "20px",
                    color: "#000",
                    lineHeight: "24px",
                    fontWeight: "500",
                    marginBottom: "16px",
                    textAlign: "left",
                  })}
                >
                  Top header
                </h3>
                <Topheader label={"Manage"}></Topheader>
              </section>
            </Inner>
          </Cell>
        </Grid>
      </Outer>

      <div
        className={css({
          background: "#fff",
          width: "1140px",
          maxWidth: "1140px",
          paddingLeft: "0",
          paddingRight: "0",
          paddingTop: "15px",
          paddingBottom: "60px",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "0",
          marginBottom: "0",
        })}
      ></div>
      <div className="container">
        <h3></h3>

        <div className="buttons-wrapper"></div>
        <div className="topbar-wrapper"></div>

        <h3>Forms Samples</h3>
        <div className="topbar-wrapper">
          <InputFieldLabel></InputFieldLabel>
        </div>
      </div>
    </div>
  );
}
const Outer = ({ children }) => {
  const [css, theme] = useStyletron();
  return <div className={css({})}>{children}</div>;
};
const Inner = ({ children }) => {
  const [css, theme] = useStyletron();
  return <div className={css({})}>{children}</div>;
};

export default Elements;
