import React, { FunctionComponent } from 'react';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';

import ProductsGridView from '../../components/ProductsGridView/ProductsGridView';

interface ProductsPageProps {}

const ProductsPage: FunctionComponent<ProductsPageProps> = () => {
  const [view, setView] = React.useState('grid');

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
      <div className="flex justify-end mt-2">
        <Link to="/products/create">
          <Fab
            color="primary"
            aria-label="add"
            sx={{
              position: 'fixed',
              bottom: 24,
              right: 24,
              backgroundColor: 'rgb(147, 197, 253)',
            }}
          >
            <AddIcon />
          </Fab>
        </Link>
      </div>
    </div>
  );
};

export default ProductsPage;
