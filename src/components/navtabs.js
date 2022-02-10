import * as React from "react";
import {
  useStyletron,
  ThemeProvider,
  createTheme,
  lightThemePrimitives,
} from "baseui";
import { Tabs, Tab } from "baseui/tabs";

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
        onChange={({ activeKey }) => {
          setActiveKey(activeKey);
        }}
        activeKey={activeKey}
        overrides={{
          Root: {
            style: ({ $theme }) => ({
              outline: "0",
              // backgroundColor: $theme.colors.warning200,
            }),
          },
          Tab: {
            style: ({ $theme }) => ({
              height: "100%",
              background:
                "linear-gradient(rgb(255, 255, 255) 84.14%, rgb(225, 225, 225) 99.78%)",
              paddingBottom: "16px",
              paddingTop: "16px",
              paddingLeft: "20px",
              paddingRight: "20px",
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
              borderBottom: "solid 1px #bdbdbd",
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
        <Tab title="Tab Link 1">Cosntent 1</Tab>
        <Tab title="Tab Link 2">Content 2</Tab>
        <Tab title="Tab Link 3">Content 3</Tab>
      </Tabs>
    </ThemeProvider>
  );
}

export default Navtabs;
