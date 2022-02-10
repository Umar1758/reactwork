import * as React from "react";
import { useStyletron } from "baseui";
import { RadioGroup, Radio, ALIGN } from "baseui/radio";

function Radiobutton(props) {
  const [css, theme] = useStyletron();
  const [value, setValue] = React.useState("1");
  return (
    <div className="">
      <RadioGroup
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
        name="number"
        align={ALIGN.horizontal}
        overrides={{
          Root: {
            style: ({ $theme }) => ({
              marginTop: "0",
              marginBottom: "0",
              marginLeft: "0",
              marginRight: "10px",
              paddingTop: "5px",
              paddingBottom: "5px",
              paddingLeft: "10px",
              paddingRight: "10px",
              border: "solid 1px #8a8a8a",
              backgroundColor: "#e0e0e0",
            }),
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
          RadioMarkInner: {
            style: ({ $theme }) => ({
              background: "red",
            }),
          },
          RadioMarkOuter: {
            style: ({ $theme }) => ({}),
          },
        }}
      >
        {props.radioOptions.length
          ? props.radioOptions.map((r, i) => <Radio value={i + 1}>{r}</Radio>)
          : null}

        {/* <Radio value="1">No</Radio>
        <Radio value="2">No</Radio> */}

        {/* {radioArr?radioArr.map(r=><radion value={r}>r</radion>):null} */}
      </RadioGroup>
    </div>
  );
}

export default Radiobutton;
