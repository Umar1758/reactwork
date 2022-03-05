import * as React from "react";
import {
  useStyletron,
  ThemeProvider,
  createTheme,
  lightThemePrimitives,
} from "baseui";
import InputFieldLabel from "../../components/inputfieldlabel";
import CircularProgress from "../../components/circular-progress";
import Comboboxselect from "../../components/comboboxselect";
import Radiobutton from "../../components/radiobutton";
import Selectdropdown from "../../components/selectdropdown";
import Textareaform from "../../components/textareaform";
import Roundfillbutton from "../../components/roundfillbutton";
import Tables from "../../components/tables";
import Topheader from "../../components/topheader";
import Indicators from "../../components/indicators";
import Impactbars from "../../components/impactbars";
import Engagementchart from "../../components/engagementchart";
import Icons from "../../components/icons";
import Navtabs from "../../components/navtabs";
import { Grid, Cell } from "baseui/layout-grid";
import { StyledLink } from "baseui/link";
import Dementiacard from "../../components/dementiacard";
import image01 from "../../images/brain01.svg";
import {
  HeadingXXLarge,
  HeadingXLarge,
  HeadingLarge,
  HeadingMedium,
  HeadingSmall,
  HeadingXSmall,
} from "baseui/typography";

function Elements() {
  const [value, setValue] = React.useState("");
  const next = "Next";
  const backtext = "Back";
  const [css] = useStyletron();
  const [activeKey, setActiveKey] = React.useState("0");
  const heading1 = "Engagement Measures Due";
  const heading2 = "Ability Assessment Due";
  const heading3 = "Overall engagement overview";

  return (
    <div className="AppHome">
      <Outer>
        <Grid>
          <Cell
            span={[2]}
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
                    href="#dementiacenter"
                    className={css({
                      fontSize: "20px",
                      color: "#000",
                      lineHeight: "24px",
                      fontWeight: "500",
                      marginBottom: "16px",
                      textAlign: "left",
                      display: "block",
                      // "@media screen and (max-width: 880px)": {
                      //   backgroundColor: "#276EF1",
                      //   color: "#fff",
                      // },
                    })}
                  >
                    Dementia Center
                  </StyledLink>
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
                    href="#select"
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
                    Select Dropdown
                  </StyledLink>
                  <StyledLink
                    href="#combobox"
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
                    Combobox
                  </StyledLink>
                  <StyledLink
                    href="#radiobutton"
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
                    Radio Button
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
                    href="#icon"
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
                    Icons
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
          <Cell span={[10]}>
            <Inner>
              <section id="dementiacenter">
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
                  Dementia Center Design
                </h3>
                <CircularProgress></CircularProgress>
                {/* <Comboboxselect></Comboboxselect> */}

                {/* <Radiobutton radioOptions={["yes", "no"]}></Radiobutton> */}

                <Topheader
                  label={"Dementia Center Dashboard"}
                  isSearch={true}
                  placeholder={"Type keyword to find Service User"}
                ></Topheader>
                <div className="dashboardwidget">
                  <div
                    className={css({
                      paddingBottom: "15px",
                    })}
                  >
                    <HeadingXSmall margin="0" color={"#363636"}>
                      {heading1}
                    </HeadingXSmall>
                  </div>
                  <div
                    className={css({
                      display: "flex",
                      flexWrap: "nowrap",
                      marginBottom: "25px",
                    })}
                  >
                    <div
                      className={css({
                        maxWidth: "20%",
                        flex: "20%",
                        paddingLeft: "0",
                        paddingRight: "10px",
                      })}
                    >
                      <Dementiacard
                        imgSrc={"/images/person.svg"}
                        logosrc={"/images/icon01.svg"}
                        brainProgress={image01}
                        title={"Vyrkyre Vrangoth"}
                        date={"sep 21'21 "}
                        tooltipbrain={"Tooltip Text"}
                      ></Dementiacard>
                    </div>
                    <div
                      className={css({
                        maxWidth: "20%",
                        flex: "20%",
                        paddingLeft: "10px",
                        paddingRight: "10px",
                      })}
                    >
                      <Dementiacard
                        imgSrc={"/images/person.svg"}
                        logosrc={"/images/icon02.svg"}
                        brainProgress={"/images/brain02.svg"}
                        title={"Vyrkyre Vrangoth"}
                        date={"sep 21'21 "}
                        tooltipbrain={"Tooltip Text"}
                      ></Dementiacard>
                    </div>
                    <div
                      className={css({
                        maxWidth: "20%",
                        flex: "20%",
                        paddingLeft: "10px",
                        paddingRight: "10px",
                      })}
                    >
                      <Dementiacard
                        imgSrc={"/images/person.svg"}
                        logosrc={"/images/icon01.svg"}
                        brainProgress={"/images/brain01.svg"}
                        title={"Vyrkyre Vrangoth"}
                        date={"sep 21'21 "}
                        tooltipbrain={"Tooltip Text"}
                      ></Dementiacard>
                    </div>
                    <div
                      className={css({
                        maxWidth: "20%",
                        flex: "20%",
                        paddingLeft: "10px",
                        paddingRight: "10px",
                      })}
                    >
                      <Dementiacard
                        imgSrc={"/images/person.svg"}
                        logosrc={"/images/icon02.svg"}
                        brainProgress={"/images/brain02.svg"}
                        title={"Vyrkyre Vrangoth"}
                        date={"sep 21'21 "}
                        tooltipbrain={"Tooltip Text"}
                      ></Dementiacard>
                    </div>
                    <div
                      className={css({
                        maxWidth: "20%",
                        flex: "20%",
                        paddingLeft: "10px",
                        paddingRight: "0",
                      })}
                    >
                      <Dementiacard
                        imgSrc={"/images/person.svg"}
                        logosrc={"/images/icon02.svg"}
                        brainProgress={"/images/brain03.svg"}
                        title={"Vyrkyre Vrangoth"}
                        date={"sep 21'21 "}
                        tooltipbrain={"Tooltip Text"}
                      ></Dementiacard>
                    </div>
                  </div>
                  <div
                    className={css({
                      textAlign: "center",
                    })}
                  >
                    <Roundfillbutton
                      buttonColor={"#ffffff"}
                      buttonHoverColor={"#ffffff"}
                      borderColor={"#b0b0b0"}
                      textColor={"#363636"}
                      borderHoverColor={"#525252"}
                      textHoverColor={"#363636"}
                      text={"View All"}
                      hasArrow={false}
                      borderRadius={"100px"}
                      minwidth={"130px"}
                    ></Roundfillbutton>
                  </div>
                </div>
                <div className="dashboardwidget">
                  <div
                    className={css({
                      paddingBottom: "15px",
                    })}
                  >
                    <HeadingXSmall margin="0" color={"#363636"}>
                      {heading2}
                    </HeadingXSmall>
                  </div>
                  <div
                    className={css({
                      display: "flex",
                      flexWrap: "nowrap",
                      marginBottom: "25px",
                    })}
                  >
                    <div
                      className={css({
                        maxWidth: "20%",
                        flex: "20%",
                        paddingLeft: "0",
                        paddingRight: "10px",
                      })}
                    >
                      <Dementiacard
                        imgSrc={"/images/person.svg"}
                        logosrc={"/images/e-letter.svg"}
                        brainProgress={""}
                        title={"Urevhur Masrawyn"}
                        date={"sep 21'21 "}
                      ></Dementiacard>
                    </div>
                    <div
                      className={css({
                        maxWidth: "20%",
                        flex: "20%",
                        paddingLeft: "10px",
                        paddingRight: "10px",
                      })}
                    >
                      <Dementiacard
                        imgSrc={"/images/person.svg"}
                        logosrc={"/images/r-letter.svg"}
                        brainProgress={""}
                        title={"Urevhur Masrawyn"}
                        date={"sep 21'21 "}
                      ></Dementiacard>
                    </div>
                    <div
                      className={css({
                        maxWidth: "20%",
                        flex: "20%",
                        paddingLeft: "10px",
                        paddingRight: "10px",
                      })}
                    >
                      <Dementiacard
                        imgSrc={"/images/person.svg"}
                        logosrc={"/images/r-letter.svg"}
                        brainProgress={""}
                        title={"Vyrkyre Vrangoth"}
                        date={"sep 21'21 "}
                      ></Dementiacard>
                    </div>
                    <div
                      className={css({
                        maxWidth: "20%",
                        flex: "20%",
                        paddingLeft: "10px",
                        paddingRight: "10px",
                      })}
                    >
                      <Dementiacard
                        imgSrc={"/images/person.svg"}
                        logosrc={"/images/r-letter.svg"}
                        brainProgress={""}
                        title={"Ydhefaris Naraloth Glenn glenn"}
                        date={"sep 21'21 "}
                      ></Dementiacard>
                    </div>
                    <div
                      className={css({
                        maxWidth: "20%",
                        flex: "20%",
                        paddingLeft: "10px",
                        paddingRight: "0",
                      })}
                    >
                      <Dementiacard
                        imgSrc={"/images/person.svg"}
                        logosrc={"/images/e-letter.svg"}
                        brainProgress={""}
                        title={"Ydhefaris Naraloth Glenn glenn"}
                        date={"sep 21'21 "}
                      ></Dementiacard>
                    </div>
                  </div>
                  <div
                    className={css({
                      textAlign: "center",
                    })}
                  >
                    <Roundfillbutton
                      buttonColor={"#ffffff"}
                      buttonHoverColor={"#ffffff"}
                      borderColor={"#B0B0B0"}
                      textColor={"#363636"}
                      borderHoverColor={"#525252"}
                      textHoverColor={"#363636"}
                      text={"View all"}
                      hasArrow={false}
                      borderRadius={"100px"}
                      minwidth={"130px"}
                    ></Roundfillbutton>
                  </div>
                </div>
                <div className="dashboardwidget">
                  <div
                    className={css({
                      paddingBottom: "15px",
                    })}
                  >
                    <HeadingXSmall margin="0" color={"#363636"}>
                      {heading3}
                    </HeadingXSmall>
                  </div>
                  <div>
                    <Outer>
                      <Grid
                        // padding="0"
                        overrides={{
                          Grid: {
                            style: ({ $theme }) => ({
                              paddingLeft: "0 !important",
                              paddingRight: "0 !important",
                            }),
                          },
                        }}
                      >
                        <Cell
                          span={[8]}
                          overrides={{
                            Cell: {
                              style: ({ $theme }) => ({}),
                            },
                          }}
                        >
                          <Inner>
                            <Engagementchart></Engagementchart>
                          </Inner>
                        </Cell>
                        <Cell span={[4]}>
                          <Inner>sidebar</Inner>
                        </Cell>
                      </Grid>
                    </Outer>
                  </div>
                </div>
              </section>
              <section id="buttons">
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
                    })}
                  >
                    Wizard Buttons
                  </h2>
                  <div
                    className={css({
                      marginRight: "10px",
                    })}
                  >
                    {" "}
                    <Roundfillbutton
                      buttonColor={"#318500"}
                      buttonHoverColor={"#3ba500"}
                      textColor={"#fff"}
                      borderHoverColor={"#3ba500"}
                      textHoverColor={"#fff"}
                      text={"Label"}
                      hasArrow={true}
                      borderRadius={"100px"}
                      minwidth={"150px"}
                    ></Roundfillbutton>
                  </div>

                  <div
                    className={css({
                      marginRight: "10px",
                    })}
                  >
                    <Roundfillbutton
                      buttonColor={"#318500"}
                      buttonHoverColor={"#3ba500"}
                      textColor={"#fff"}
                      borderColor={"#318500"}
                      borderHoverColor={"#3ba500"}
                      textHoverColor={"#fff"}
                      text={"Save"}
                      hasArrow={false}
                      borderRadius={"100px"}
                      minwidth={"150px"}
                    ></Roundfillbutton>
                  </div>

                  <div
                    className={css({
                      marginRight: "10px",
                    })}
                  >
                    <Roundfillbutton
                      buttonColor={"#ffffff"}
                      buttonHoverColor={"#f8f8f8"}
                      borderColor={"#3c3c3c"}
                      textColor={"#3c3c3c"}
                      borderHoverColor={"#3C3C3C"}
                      textHoverColor={"#3c3c3c"}
                      text={"Save"}
                      hasArrow={false}
                      borderRadius={"100px"}
                      minwidth={"150px"}
                    ></Roundfillbutton>
                  </div>

                  <div
                    className={css({
                      marginRight: "10px",
                    })}
                  >
                    <Roundfillbutton
                      buttonColor={"#ffffff"}
                      buttonHoverColor={"#f8f8f8"}
                      borderColor={"#3c3c3c"}
                      textColor={"#3c3c3c"}
                      text={backtext}
                      hasArrow={false}
                      borderRadius={"100px"}
                      minwidth={"150px"}
                    ></Roundfillbutton>
                  </div>
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
                    })}
                  >
                    Popup Buttons
                  </h2>
                  <div
                    className={css({
                      marginRight: "10px",
                    })}
                  >
                    <Roundfillbutton
                      buttonColor={"#ffffff"}
                      buttonHoverColor={"#ffffff"}
                      textColor={"#0565FF"}
                      borderColor={"#0565FF"}
                      text={"sdafsadfasdf"}
                      borderHoverColor={"#0053B3"}
                      textHoverColor={"#0053B3"}
                      hasArrow={false}
                      borderRadius={"4px"}
                      minwidth={"150px"}
                    ></Roundfillbutton>
                  </div>
                  <div
                    className={css({
                      marginRight: "10px",
                    })}
                  >
                    <Roundfillbutton
                      buttonColor={"#ffffff"}
                      buttonHoverColor={"#ffffff"}
                      textColor={"#b00707 "}
                      borderColor={"#b00707"}
                      borderHoverColor={"#B30F0F"}
                      textHoverColor={"#B30F0F"}
                      text={"Label"}
                      hasArrow={false}
                      borderRadius={"4px"}
                      minwidth={"150px"}
                    ></Roundfillbutton>
                  </div>
                  <div
                    className={css({
                      marginRight: "10px",
                    })}
                  >
                    <Roundfillbutton
                      buttonColor={"#ffffff"}
                      buttonHoverColor={"#ffffff"}
                      textColor={"#066501"}
                      borderColor={"#066501"}
                      borderHoverColor={"#066501"}
                      textHoverColor={"#066501"}
                      text={"Label"}
                      hasArrow={false}
                      borderRadius={"4px"}
                      minwidth={"150px"}
                    ></Roundfillbutton>
                  </div>
                  <div
                    className={css({
                      marginRight: "10px",
                    })}
                  >
                    <Roundfillbutton
                      buttonColor={"#e71313"}
                      buttonHoverColor={"#b30f0f"}
                      borderColor={"#e71313"}
                      textColor={"#fff"}
                      borderHoverColor={"#B30F0F "}
                      textHoverColor={"#fff"}
                      text={"Label"}
                      hasArrow={false}
                      borderRadius={"4px"}
                      minwidth={"150px"}
                    ></Roundfillbutton>
                  </div>
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
              <section id="select">
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
                  Select Dropdown
                </h3>
                <Selectdropdown></Selectdropdown>
              </section>
              <section id="combobox">
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
                  Combobox
                </h3>
                <Comboboxselect></Comboboxselect>
              </section>
              <section id="radiobutton">
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
                  Radio Button
                </h3>
                <Radiobutton></Radiobutton>
              </section>
              <section id="indicators">
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
                <div
                  className={css({
                    display: "flex",
                  })}
                >
                  <div
                    className={css({
                      marginRight: "15px",
                      display: "flex",
                      flexDirection: "column",
                    })}
                  >
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
                  </div>
                  <div
                    className={css({
                      marginRight: "15px",
                      display: "flex",
                      flexDirection: "column",
                    })}
                  >
                    <Impactbars
                      impact={""}
                      border={"#FF9500"}
                      tooltiptext={"Medium Business Impact"}
                    ></Impactbars>
                    <br></br>
                    <Impactbars
                      color={"#fff"}
                      border={"#0AA401"}
                      tooltiptext={"Low Business Impact"}
                    ></Impactbars>
                    <br></br>

                    <Impactbars
                      color={"#3BA500"}
                      border={"#3BA500"}
                      tooltiptext={"High Business Impact"}
                    ></Impactbars>
                    <br></br>

                    <Impactbars
                      color={"#F33939"}
                      border={"#F33939"}
                      tooltiptext={"High Business Impact"}
                    ></Impactbars>
                    <br></br>
                  </div>
                </div>
              </section>
              <section id="icons">
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
                  Icons
                </h3>
                <div
                  className={css({
                    display: "flex",
                  })}
                >
                  <div
                    className={css({
                      marginRight: "15px",
                      display: "flex",
                      flexDirection: "column",
                    })}
                  >
                    <Icons
                      iconname={"compliance-tools"}
                      colorcode={"#ff9500"}
                      tooltipopup={"Partially Compliant"}
                    ></Icons>
                    <br></br>
                    <Icons
                      iconname={"compliance-tools"}
                      colorcode={"#f33939"}
                      tooltipopup={"Not Compliant"}
                    ></Icons>
                    <br></br>
                    <Icons
                      iconname={"compliance-tools"}
                      colorcode={"#3ba500"}
                      tooltipopup={"Compliant"}
                    ></Icons>
                    <br></br>
                  </div>
                  <div
                    className={css({
                      marginRight: "15px",
                      display: "flex",
                      flexDirection: "column",
                    })}
                  >
                    <Icons
                      iconname={"risk-assessments"}
                      colorcode={"#ff9500"}
                      tooltipopup={"Medium Risk"}
                    ></Icons>
                    <br></br>
                    <Icons
                      iconname={"risk-assessments"}
                      colorcode={"#f33939"}
                      tooltipopup={"High Risk"}
                    ></Icons>
                    <br></br>
                    <Icons
                      iconname={"risk-assessments"}
                      colorcode={"#3ba500"}
                      tooltipopup={"Low Risk"}
                    ></Icons>
                    <br></br>
                  </div>
                </div>
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
