import React, { useState, useMemo } from "react";
import {
  useStyletron,
  ThemeProvider,
  createTheme,
  lightThemePrimitives,
} from "baseui";
import { StyledLink as Link } from "baseui/link";
import { TableBuilder, TableBuilderColumn } from "baseui/table-semantic";
import Indicators from "../components/indicators";
import AvatarComponent from "../components/avatar.component";
import NameLabelComponent from "../components/name-label.component";
import Icons from "../components/icons";
function Tables(props) {
  const [sortColumn, setSortColumn] = useState("bar");
  const [sortAsc, setSortAsc] = useState(true);
  const [css] = useStyletron();
  const [data] = useState([
    {
      foo: 10,
      bar: "banana",
      url: "https://example.com/b",
      opt1: "123",
      opt2: "123",
      color: "#0aa401",
      border: "#0aa401",
      tooltiptext: "Read",
      iconname: "compliance-tools",
      colorcode: "#f33939",
      tooltipopup: "Not Compliant",
      iconrisk: "risk-assessments",
      riskcode: "#FF9500",
      risktooltip: "Medium Risk",
    },
    // {
    //   foo: 1,
    //   bar: "carrot",
    //   url: "https://example.com/c",
    //   opt1: "123",
    //   opt2: "123",
    //   color: "#ff9500",
    //   border: "#ff9500",
    //   tooltiptext: "UnRead",
    //   iconname: "compliance-tools",
    //   colorcode: "#3ba500",
    //   tooltipopup: "Compliant",
    //   iconrisk: "risk-assessments",
    //   riskcode: "#FF9500",
    //   risktooltip: "Medium Risk",
    // },
    // {
    //   foo: 2,
    //   bar: "apple",
    //   url: "https://example.com/a",
    //   opt1: "123",
    //   opt2: "123",
    //   color: "#f33939",
    //   border: "#f33939",
    //   tooltiptext: "Affirmed",
    //   iconname: "compliance-tools",
    //   colorcode: "#ff9500",
    //   tooltipopup: "Partially Compliant",
    //   iconrisk: "risk-assessments",
    //   riskcode: "#3BA500",
    //   risktooltip: "Low Risk",
    // },
    // {
    //   foo: 144,
    //   bar: "apple",
    //   url: "https://example.com/a",
    //   opt1: "123",
    //   opt2: "123",
    //   color: "#fff",
    //   border: "#0aa401",
    //   tooltiptext: "Affirmed",
    //   iconname: "compliance-tools",
    //   colorcode: "#f33939",
    //   tooltipopup: "Not Compliant",
    //   iconrisk: "risk-assessments",
    //   riskcode: "#F33939",
    //   risktooltip: "High Risk",
    // },
  ]);

  const sortedData = useMemo(() => {
    return data.slice().sort((a, b) => {
      const left = sortAsc ? a : b;
      const right = sortAsc ? b : a;
      const leftValue = String(left[sortColumn]);
      const rightValue = String(right[sortColumn]);

      return leftValue.localeCompare(rightValue, "en", {
        numeric: true,
        sensitivity: "base",
      });
    });
  }, [sortColumn, sortAsc, data]);

  function handleSort(id) {
    if (id === sortColumn) {
      setSortAsc((asc) => !asc);
    } else {
      setSortColumn(id);
      setSortAsc(true);
    }
  }
  return (
    <ThemeProvider
      theme={createTheme(lightThemePrimitives, {
        colors: { tableStripedBackground: "#F7F7F7" },
      })}
    >
      <TableBuilder
        data={sortedData}
        sortColumn={sortColumn}
        sortOrder={sortAsc ? "ASC" : "DESC"}
        onSort={handleSort}
        overrides={{
          TableBodyCell: {
            style: ({ $theme }) => ({
              fontSize: "14px",
              color: "#525252",
              fontWeight: "400",
            }),
          },
        }}
      >
        <TableBuilderColumn id="impact" header="Impact" sortable>
          {(row) => (
            // <Indicators
            //   color={row.color}
            //   border={row.border}
            //   tooltiptext={row.tooltiptext}
            // ></Indicators>
            <>
              <AvatarComponent
                name={"Homer Simpson"}
                imageSrc={""}
                size={"80px"}
              ></AvatarComponent>
              <NameLabelComponent
                namelabel={"Homer Simpson"}
                isLink={true}
              ></NameLabelComponent>
            </>
          )}
        </TableBuilderColumn>
        <TableBuilderColumn id="actions" header="Actions" sortable>
          {(row) => (
            <Icons
              iconname={row.iconname}
              colorcode={row.colorcode}
              tooltipopup={row.tooltipopup}
            ></Icons>
          )}
        </TableBuilderColumn>

        <TableBuilderColumn id="risk" header="Risk" sortable>
          {(row) => (
            <Icons
              iconname={row.iconrisk}
              colorcode={row.riskcode}
              tooltipopup={row.risktooltip}
            ></Icons>
          )}
        </TableBuilderColumn>

        <TableBuilderColumn id="bar" header="Produce" sortable>
          {(row) => (
            <Link
              href={row.url}
              className={css({
                color: "#0053B3",
                textDecoration: "none",
              })}
            >
              {row.bar}
            </Link>
          )}
        </TableBuilderColumn>
        <TableBuilderColumn id="foo" header="Quantity" sortable>
          {(row) => row.foo}
        </TableBuilderColumn>
        <TableBuilderColumn id="opt1" header="Opt 1" sortable>
          {(row) => row.opt1}
        </TableBuilderColumn>
        <TableBuilderColumn id="opt2" header="Opt 2" sortable>
          {(row) => row.opt2}
        </TableBuilderColumn>
      </TableBuilder>
    </ThemeProvider>
  );
}

export default Tables;
