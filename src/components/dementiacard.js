import * as React from "react";
import { useStyletron } from "baseui";
import { StatefulPopover, PLACEMENT, TRIGGER_TYPE } from "baseui/popover";
import { Paragraph3 } from "baseui/typography";

function Dementiacard(props) {
  const [css, theme] = useStyletron();
  return (
    <div className={css(styles.cardDC)}>
      <div className={css({ position: "relative" })}>
        <div className={css(styles.logoDC)}>
          <img src={props.logosrc} className={css({})} />
        </div>
        <div className={css({ position: "relative" })}>
          <figure className={css(styles.imageFigure)}>
            {props.imgSrc != "" ? (
              <img src={props.imgSrc} className={css(styles.imageDC)} />
            ) : (
              <span className={css(styles.nameInitials)}>
                {props.nameInitials}
              </span>
            )}
          </figure>
          <StatefulPopover
            content={
              <Paragraph3 margin="0" padding="scale500">
                {props.tooltipbrain}
              </Paragraph3>
            }
            accessibilityType={"tooltip"}
            showArrow
            triggerType={TRIGGER_TYPE.hover}
            placement={PLACEMENT.bottom}
            overrides={{
              Root: {
                style: ({ $theme }) => ({
                  outline: "0",
                  border: "0",
                }),
              },
              Arrow: {
                style: ({ $theme }) => ({
                  backgroundColor: "#fff2bd",
                }),
              },
              Body: {
                style: ({ $theme }) => ({
                  outline: "0",
                  padding: "0",
                  backgroundColor: "transparent",
                }),
              },
              Inner: {
                style: ({ $theme }) => ({
                  backgroundColor: "#fff2bd",
                }),
              },
            }}
          >
            <div className={css(styles.brainProgress)}>
              <img src={props.brainProgress} />
            </div>
          </StatefulPopover>
        </div>
      </div>
      <h3 className={css(styles.titleDC)}>{props.title}</h3>
      <p className={css(styles.dateDC)}>Due: {props.date}</p>
    </div>
  );
}
const styles = {
  cardDC: {
    boxShadow: "1px 1px 2px rgba(0,0,0,0.36)",
    borderRadius: "8px",
    background: "#f2f2f2",
    paddingBottom: "10px",
    paddingTop: "5px",
    paddingLeft: "5px",
    paddingRight: "5px",
    position: "relative",
  },
  logoDC: {
    position: "absolute",
    top: "5px",
    left: "5px",
    zIndex: "0",
  },
  imageFigure: {
    marginBottom: "0",
    marginTop: "0",
    paddingTop: "30px",
  },
  imageDC: {
    height: "87px",
    width: "87px",
    borderRadius: "50%",
    objectFit: "cover",
    objectPosition: "center",
    marginBottom: "0",
  },
  dateDC: {
    fontSize: "14px",
    color: "#3b3a3a",
    lineHeight: "18px",
    fontWeight: "400",
    textAlign: "center",
    marginTop: "0",
    marginBottom: "0",
  },
  titleDC: {
    fontSize: "16px",
    color: "#222222",
    lineHeight: "16px",
    fontWeight: "400",
    textAlign: "center",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: "2",
    WebkitBoxOrient: "vertical",
    minHeight: "40px",
    marginTop: "5px",
    marginBottom: "0",
  },
  brainProgress: {
    position: "absolute",
    top: "25px",
    right: "25px",
    cursor: "pointer",
  },
  nameInitials: {
    color: "#838383",
    fontSize: "30px",
    fontWeight: "400",
    textAlign: "center",
    width: "89px",
    height: "89px",
    lineHeight: "89px",
    background: "#d8d8d8",
    display: "inline-block",
    borderRadius: "50%",
    marginBottom: "2px",
  },
};

export default Dementiacard;
