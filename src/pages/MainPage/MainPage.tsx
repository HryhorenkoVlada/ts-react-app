import React, { FunctionComponent, useState, useEffect } from 'react';
import DataTable from '../../components/DataTable/DataTable';
import CircularLoader from '../../components/shared/CircularLoader/CircularLoader';
import PaginationBlock from '../../components/shared/Pagination/Pagination';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchPeople } from '../../redux/actions/people';
import { PeopleIndexDTO } from '../../types/proto/dto/people';

interface MainPageProps {}

const MainPage: FunctionComponent<MainPageProps> = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const params: PeopleIndexDTO = {
      page: currentPage,
    };
    dispatch(fetchPeople(params));
  }, [currentPage]);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };
  const { people, loading } = useAppSelector((state) => state.people);
  return (
    <div className="p-10">
      {loading ? (
        <CircularLoader />
      ) : (
        <DataTable data={people} page={currentPage} />
      )}
      <PaginationBlock
        page={currentPage}
        totalPages={9}
        handlePageChange={handlePageChange}
      />
    </div>
  );
};

export default MainPage;
