import React from "react";
import styles from "./Table.module.scss";

interface Column<T> {
  header: string;
  accessor: keyof T;
}

interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
  onRowClick?: (row: T) => void;
}

const Table = <T extends Record<string, any>>({
  columns,
  data,
  onRowClick,
}: TableProps<T>) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col.header}>{col.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr
            key={index}
            onClick={onRowClick ? () => onRowClick(row) : undefined}
            className={onRowClick ? styles.clickableRow : undefined}
          >
            {columns.map((col) => (
              <td key={col.accessor.toString()}>{row[col.accessor]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
