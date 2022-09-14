import React, { FunctionComponent } from 'react'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'

interface PaginationBlockProps {
  page: number
  totalPages: number
  handlePageChange: (event: React.ChangeEvent<unknown>, value: number) => void
}

const PaginationBlock: FunctionComponent<PaginationBlockProps> = ({
  page,
  totalPages,
  handlePageChange,
}) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
      <Stack spacing={2}>
        <Pagination
          count={totalPages}
          page={page}
          onChange={handlePageChange}
        />
      </Stack>
    </Box>
  )
}

export default PaginationBlock
