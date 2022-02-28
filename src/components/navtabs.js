import * as React from "react";
import {
  useStyletron,
  ThemeProvider,
  createTheme,
  lightThemePrimitives,
} from "baseui";
import { Tabs, Tab } from "baseui/tabs";
import Icons from "../components/icons";
function Navtabs(props) {
  const [css] = useStyletron();
  const [activeKey, setActiveKey] = React.useState("0");
  return (
    <ThemeProvider
      theme={createTheme(lightThemePrimitives, {
        colors: {
          tabBarFill: "#fff",
          tabColor: "#f8f8f8",
        },
      })}
    >
      <Tabs
        activeKey={activeKey}
        onChange={({ activeKey }) => {
          setActiveKey(activeKey);
        }}
        activeKey={activeKey}
        overrides={{
          Root: {
            style: ({ $theme, $active }) => ({
              outline: "0",
              // backgroundColor: $theme.colors.warning200,
            }),
          },
          Tab: {
            style: ({ $theme, $active }) => ({
              height: "100%",
              background: !$active
                ? "linear-gradient(rgb(255, 255, 255) 84.14%, rgb(225, 225, 225) 99.78%)"
                : "#fff",
              paddingBottom: "9px",
              paddingTop: "9px",
              paddingLeft: "12px",
              paddingRight: "12px",
              borderRadius: "9px 9px 0 0",
              textAlign: "left",
              fontSize: "20px",
              fontWeight: "400",
              color: "#363636",
              marginLeft: "0",
              marginRight: "12px",
              borderTop: "solid 1px #bdbdbd",
              borderRight: "1px solid #bdbdbd",
              borderLeft: "1px solid #bdbdbd",
              borderBottom: !$active
                ? "solid 1px #bdbdbd"
                : "solid 1px transparent",
              fontWeight: !$active ? "400" : "500",
            }),
          },
          TabBar: {
            style: ({ $theme }) => ({
              // outline: `${$theme.colors.warning200} solid`,
              backgroundColor: "transparent",
              paddingLeft: "0",
              paddingRight: "0",
              zIndex: "1",
            }),
          },
          TabContent: {
            style: ({ $theme }) => ({
              background: "#fff",
              borderRadius: "0 9px 9px 9px",
              border: "solid 1px #bdbdbd",
              top: "-1px",
              position: "relative",
              padding: "15px",
            }),
          },
        }}
      >
        <Tab
          title={
            <div>
              <span
                className={css({
                  color: "#ff6565",
                  borderColor: "#ff6565",
                  borderRadius: "23px",
                  minWidth: "32px",
                  maxHeight: "42px",
                  border: "2px solid",
                  background: "#fff",
                  fontSize: "22px",
                  fontWeight: "500",
                  textAlign: "center",
                  lineHeight: "43px",
                  paddingLeft: "5px",
                  paddingRight: "5px",
                  paddingTop: "0",
                  paddingBottom: "0",
                  margin: "0",
                  position: "static",
                  display: "inline-block",
                  verticalAlign: "middle",
                })}
              >
                1234
              </span>
              <span
                className={css({
                  paddingLeft: "15px",
                  verticalAlign: "middle",
                  display: "inline-block",
                })}
              >
                Total Overdue
              </span>
            </div>
          }
        >
          Cosntent 1
        </Tab>
        <Tab
          title={
            <div>
              <span
                className={css({
                  color: "#0870E7",
                  borderColor: "#0870E7",
                  borderRadius: "23px",
                  minWidth: "32px",
                  maxHeight: "42px",
                  border: "2px solid",
                  background: "#fff",
                  fontSize: "22px",
                  fontWeight: "500",
                  textAlign: "center",
                  lineHeight: "43px",
                  paddingLeft: "5px",
                  paddingRight: "5px",
                  paddingTop: "0",
                  paddingBottom: "0",
                  margin: "0",
                  position: "static",
                  display: "inline-block",
                  verticalAlign: "middle",
                })}
              >
                12
              </span>
              <span
                className={css({
                  paddingLeft: "15px",
                  verticalAlign: "middle",
                  display: "inline-block",
                })}
              >
                Total Due
              </span>
            </div>
          }
        >
          Content 2
        </Tab>
        <Tab
          title={
            <div>
              <span
                className={css({
                  color: "#3BA500",
                  borderColor: "#3BA500",
                  borderRadius: "23px",
                  minWidth: "32px",
                  maxHeight: "42px",
                  border: "2px solid",
                  background: "#fff",
                  fontSize: "22px",
                  fontWeight: "500",
                  textAlign: "center",
                  lineHeight: "43px",
                  paddingLeft: "5px",
                  paddingRight: "5px",
                  paddingTop: "0",
                  paddingBottom: "0",
                  margin: "0",
                  position: "static",
                  display: "inline-block",
                  verticalAlign: "middle",
                })}
              >
                12
              </span>
              <span
                className={css({
                  paddingLeft: "15px",
                  verticalAlign: "middle",
                  display: "inline-block",
                })}
              >
                Total Completed
              </span>
            </div>
          }
        >
          Content 3
        </Tab>
      </Tabs>
    </ThemeProvider>
  );
}

export default Navtabs;
