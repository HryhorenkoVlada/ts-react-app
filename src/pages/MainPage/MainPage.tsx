import React, { FunctionComponent, useState } from 'react';
import DataTable from '../../components/DataTable/DataTable';
import PaginationBlock from '../../components/shared/Pagination/Pagination';

import { IPerson } from '../../types/interfaces/person';

interface MainPageProps {}

const MainPage: FunctionComponent<MainPageProps> = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  const data: IPerson[] = [
    { name: 'John', birth_year: '1999', gender: 'male' },
    { name: 'John', birth_year: '1999', gender: 'male' },
    { name: 'John', birth_year: '1999', gender: 'male' },
    { name: 'John', birth_year: '1999', gender: 'male' },
  ];
  return (
    <div className="p-10">
      <DataTable data={data} page={currentPage} />
      <PaginationBlock
        page={currentPage}
        totalPages={9}
        handlePageChange={handlePageChange}
      />
    </div>
  );
};

export default MainPage;
