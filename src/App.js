import "./App.css";
import { NGrid } from "./NGrid/NGrid";
import { graphQLSource } from "./api/data";

function App() {
  return (
    <NGrid columns={columns} source="graphql" sourceParams={graphQLSource} />
  );
}

const columns = [
  // {
  // title: "Selezione",
  // formatter: "rowSelection",
  // titleFormatter: "rowSelection",
  // frozen: true
  // },
  { title: "Nome", field: "name" },
  { title: "Anno di nascita", field: "birthYear" },
  { title: "Specie", field: "species.name" },
  { title: "Pianeta specie", field: "species.homeworld.name" },
  { title: "Pianeta", field: "homeworld.name" },
  { title: "Genere", field: "gender" },
  { title: "Peso", field: "mass" },
  { title: "Colore occhi", field: "eyeColor" },
];

export default App;
