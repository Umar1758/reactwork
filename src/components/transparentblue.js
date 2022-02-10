import * as React from "react";
import {useStyletron} from 'baseui';

import { Button , SHAPE } from "baseui/button";
function Transparentblue(props) {
    const [css,theme] = useStyletron();
  return (
    <div className="">
    <Button
    onClick={props.handleClick}    
      overrides={{
        BaseButton: {
          style: ({ $theme }) => ({
            outline: '0',
            backgroundColor: 'transparent',
            fontSize: '17px',
            fontWeight: '400',
            lineHeight: '38px',            
            borderRadius: '20px',
            borderStyle: 'solid',
            borderWidth: '1px',
            borderLeftColor: '#074978',
            borderRightColor: '#074978',
            bordertopColor: '#074978',
            borderBottomColor: '#074978',
            position: 'relative',
            paddingLeft: '20px',
            paddingRight: '20px',
            paddingTop: '0',
            paddingBottom: '0',
            display: 'inline-block',
            color: '#074978',
            transition: 'all ease 0.5s',
            width: '150px',
            textTransform: 'uppercase',
         
          })
        },  
      }}
      
    >
      {props.text}

      {/* <div className={css({
        color: '#fff',
        position: 'absolute',
        top: '1px',
        fontWeight: '400',
        right: '10px'
      })}

      >
        <svg width="9" height="14" viewBox="0 0 9 14" xmlns="http://www.w3.org/2000/svg" fill="#FFF"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.703 0L0 1.633 5.595 7 0 12.367 1.703 14 9 7 1.703 0z"></path></svg>
        </div> */}
    </Button>
    </div>
    
  );
}

export default Transparentblue;
