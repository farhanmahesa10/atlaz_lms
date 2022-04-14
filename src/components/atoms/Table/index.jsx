import React, { useEffect } from "react";
import { useTable, useSortBy, useGlobalFilter } from "react-table";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import ArrowDropUpOutlinedIcon from "@mui/icons-material/ArrowDropUpOutlined";
import styled from "styled-components";

const Table = ({ columns, data, filter }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy
  );

  const firstPageRows = rows.slice(0, 20);

  useEffect(() => {
    setGlobalFilter(filter);
  }, [filter]);

  return (
    <Styles>
      <table {...getTableProps()} className="w-full">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                // Add the sorting props to control sorting. For this example
                // we can add them into the header props
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  <div className="d-flex align-items-center">
                    {column.render("Header")}
                    {/* Add a sort direction indicator */}

                    {!column.disableSortBy && (
                      <span className="d-flex flex-column ml-16">
                        <ArrowDropUpOutlinedIcon
                          className={`fs-16  ${
                            column.isSorted
                              ? !column.isSortedDesc
                                ? "text-neutral-500"
                                : "text-neutral-200"
                              : "text-neutral-200"
                          }`}
                          style={{ marginBottom: "-6px" }}
                        />
                        <ArrowDropDownOutlinedIcon
                          className={`fs-16  ${
                            column.isSorted
                              ? column.isSortedDesc
                                ? "text-neutral-500"
                                : "text-neutral-200"
                              : "text-neutral-200"
                          }
                          }`}
                        />
                      </span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {firstPageRows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="font-sm">
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </Styles>
  );
};
const Styles = styled.div`
  table {
    border-spacing: 0;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 10px;
      border-bottom: 1px solid #e1e9f3;

      :last-child {
        border-right: 0;
      }
    }
  }
`;
export default Table;
