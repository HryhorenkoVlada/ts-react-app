import React from 'react';
import { Link } from 'react-router-dom';
import { IPerson } from '../../types/interfaces/person';

interface DataTableProps<T> {
  data: T[];
  page: number;
  columns: {
    title: string;
    value: keyof T;
  }[];
}

const DataTable = <T,>({
  data,
  page,
  columns,
}: DataTableProps<IPerson>): JSX.Element => {
  return (
    <table className="shadow-md rounded overflow-hidden w-full">
      <thead>
        <tr className="bg-blue-300">
          <th className="p-2">№</th>
          {columns?.map((col) => (
            <th key={col.title} className="p-2">
              {col.title}
            </th>
          ))}
          <th className="p-2">Details</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((item, i) => (
          <tr key={i} className="border-b last:border-b-0">
            <td className="p-2 border-r">{10 * (page - 1) + (i + 1)}</td>
            {columns?.map((col) => (
              <td key={col.title} className="p-2 border-r">
                {item[`${col.value}`]}
              </td>
            ))}
            <td className="p-2">
              <Link to={`/${i + 1}`}>Read more</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
