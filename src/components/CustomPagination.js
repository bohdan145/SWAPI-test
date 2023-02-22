import React, { memo } from 'react'
import { CPagination, CPaginationItem } from '@coreui/react'
import PropTypes from 'prop-types'

const CustomPagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from(Array(totalPages).keys())
  return (
    <CPagination pages={pages} align="center">
      {pages.map((page) => (
        <CPaginationItem
          key={page}
          active={currentPage === page}
          onClick={() => onPageChange(page)}
          style={{ cursor: 'pointer' }}
        >
          {page + 1}
        </CPaginationItem>
      ))}
    </CPagination>
  )
}

export default memo(CustomPagination)

CustomPagination.propTypes = {
  currentPage: PropTypes.number,
  totalPages: PropTypes.number,
  onPageChange: PropTypes.func,
}
