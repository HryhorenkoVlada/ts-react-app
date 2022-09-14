import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { IPerson } from '../../types/interfaces/person';
import CircularLoader from '../shared/CircularLoader/CircularLoader';

interface DataTableProps {
  data?: IPerson[];
  page: number;
}

interface Col {
  title: string;
  value: keyof IPerson;
}

const columns: Col[] = [
  { title: 'Name', value: 'name' },
  { title: 'Birth Year', value: 'birth_year' },
  { title: 'Gender', value: 'gender' },
];

const DataTable: FunctionComponent<DataTableProps> = ({ data, page }) => {
  return (
    <table className="shadow-md rounded overflow-hidden w-full">
      <thead>
        <tr className="bg-blue-300">
          <th className="p-2">№</th>
          {columns.map((col) => (
            <th key={col.value} className="p-2">
              {col.title}
            </th>
          ))}
          <th className="p-2">Details</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((person, i) => (
          <tr key={i} className="border-b last:border-b-0">
            <td className="p-2 border-r">{10 * (page - 1) + (i + 1)}</td>
            {columns.map((col) => (
              <td key={col.value} className="p-2 border-r">
                {person[`${col.value}`]}
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
