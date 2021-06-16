import * as React from "react";
import get from "lodash/get";
import { DEFAULT_PAGE_SIZE } from "../NGrid/constants";

export function useDataSource(source, config) {
  return React.useCallback(
    () => createDataSource(source, config),
    [source, config]
  );
}

function createDataSource(source, config) {
  //TODO factory
  return createGraphQLDataSource(config);
}

function createGraphQLDataSource(config) {
  return {
    fetchData(params = {}) {
      const { page = 0, pageSize = DEFAULT_PAGE_SIZE } = params;
      const variables = { first: (page + 1) * pageSize, last: pageSize };
      const { url, body: query, dataField, countField } = config;
      return fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ query, variables }),
      })
        .then((r) => r.json())
        .then((res) => ({
          data: get(res.data, dataField),
          totalCount: get(res.data, countField),
        }));
    },
  };
}
