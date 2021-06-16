import * as React from "react";
import get from "lodash/get";
import "./variables.css";
import "./ngrid.css";
import { createDataSource, useDataSource } from "../hooks/useDataSource";

export function NGrid({ columns, source, sourceParams }) {
  const [state, setState] = React.useState();
  const dataSource = useDataSource(source, sourceParams);
  React.useEffect(() => {
    dataSource()
      .fetchData()
      .then((res) => {
        setState(res);
      });
  }, [dataSource]);

  return (
    <table role="grid" className="ngrid">
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col.title}>{col.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {state &&
          state.data.map((row, i) => (
            <tr key={i}>
              {columns.map((col, k) => (
                <td key={k}>{get(row, col?.field ?? "")}</td>
              ))}
            </tr>
          ))}
      </tbody>
    </table>
  );
}
