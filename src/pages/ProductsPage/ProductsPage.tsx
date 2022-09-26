import React, { FunctionComponent, useEffect } from 'react';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import { useAppDispatch } from '../../hooks/redux';
import { fetchProducts } from '../../redux/actions/products';
import ProductsGridView from '../../components/ProductsGridView/ProductsGridView';
import { useQueryClient } from '@tanstack/react-query';
import { useProducts } from '../../hooks/useProducts';

interface ProductsPageProps {}

const ProductsPage: FunctionComponent<ProductsPageProps> = () => {
  const [view, setView] = React.useState('grid');
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(fetchProducts());
  // }, []);

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    nextView: string
  ) => {
    setView(nextView);
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl text-center text-gray-800 font-bold mb-4">
        Products
      </h1>
      <div className="flex justify-end">
        <ToggleButtonGroup
          value={view}
          exclusive
          onChange={handleChange}
          sx={{ mb: 3 }}
        >
          <ToggleButton value="grid" aria-label="grid">
            <ViewModuleIcon />
          </ToggleButton>
          <ToggleButton value="list" aria-label="list">
            <ViewListIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </div>

      {view === 'grid' ? <ProductsGridView /> : <div>list</div>}
    </div>
  );
};

export default ProductsPage;
