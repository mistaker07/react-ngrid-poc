import get from "lodash/get";
import { peopleData } from "../api/data";
import "./variables.css";
import "./ngrid.css";

export function NGrid({ columns }) {
  const { people } = peopleData;
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
        {people.map((row, i) => (
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
