import * as React from "react";
import { FormControl } from "baseui/form-control";
import { Input } from "baseui/input";
function Forms() {
  const [value, setValue] = React.useState("Default Value");
  return (
    <div className="">

<FormControl
      label={() => "First Name"}
      caption={() => "caption"}
    >
     <Input
      value={value}
      onChange={e => setValue(e.target.value)}
      placeholder="Controlled Input"
      clearOnEscape
    />
    </FormControl>


  
    </div>
    
  );
}

export default Forms;
