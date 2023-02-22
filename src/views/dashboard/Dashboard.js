import React, { useState } from 'react'

import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CSpinner,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
} from '@coreui/react'

import { useQuery } from 'react-query'
import axios from 'axios'
import CustomPagination from 'src/components/CustomPagination'

const Dashboard = () => {
  const [page, setPage] = useState(0)
  const [selectedUser, setSelectedUser] = useState(null)
  const [visible, setVisible] = useState(false)
  const { isLoading, isError, data, isFetching } = useQuery(
    ['people', page + 1],
    async () => {
      const response = await axios.get(`https://swapi.dev/api/people/?page=${page + 1}`)
      return response.data
    },
    { keepPreviousData: true, staleTime: 5000 },
  )

  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'gender', label: 'Gender' },
    { key: 'birth_year', label: 'Birth Year' },
    { key: 'height', label: 'Height' },
    { key: 'mass', label: 'Mass' },
  ]

  const handleClick = (user) => {
    setVisible(true)
    setSelectedUser(user)
  }

  const handleClose = () => {
    setVisible(false)
  }

  if (isError) return null

  return (
    <>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Users</CCardHeader>
            {isLoading ? (
              <div
                style={{
                  aspectRatio: 21 / 9,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div className="text-center">
                  <CSpinner />
                  <h4 className="mt-2">Loading...</h4>
                </div>
              </div>
            ) : (
              <CCardBody>
                <div style={{ position: 'relative' }}>
                  <CTable
                    align="middle"
                    className="mb-4 border"
                    hover
                    striped
                    responsive
                    style={{ tableLayout: 'fixed' }}
                  >
                    <CTableHead color="light">
                      <CTableRow>
                        {columns.map((column) => (
                          <CTableHeaderCell key={column.key}>{column.label}</CTableHeaderCell>
                        ))}
                      </CTableRow>
                    </CTableHead>
                    <CTableBody>
                      {data.results.map((person) => (
                        <CTableRow key={person.url}>
                          <CTableDataCell>
                            <strong
                              style={{ cursor: 'pointer' }}
                              onClick={() => handleClick(person)}
                            >
                              {person.name}
                            </strong>
                          </CTableDataCell>
                          <CTableDataCell>{person.gender}</CTableDataCell>
                          <CTableDataCell>{person.birth_year}</CTableDataCell>
                          <CTableDataCell>{person.height}cm</CTableDataCell>
                          <CTableDataCell>{person.mass}</CTableDataCell>
                        </CTableRow>
                      ))}
                    </CTableBody>
                  </CTable>
                  {isFetching && (
                    <div
                      style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'rgba(255, 255, 255, .5)',
                        top: 0,
                        left: 0,
                      }}
                    >
                      <CSpinner />
                    </div>
                  )}
                </div>

                <CustomPagination
                  currentPage={page}
                  onPageChange={setPage}
                  totalPages={Math.ceil(data.count / 10)}
                />
              </CCardBody>
            )}
          </CCard>
        </CCol>
      </CRow>

      <CModal visible={visible} onClose={handleClose}>
        <CModalHeader onClose={handleClose}>
          <CModalTitle>{selectedUser?.name}</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>
            <strong>Name: </strong> {selectedUser?.name}
          </p>
          <p>
            <strong>Gender: </strong> {selectedUser?.gender}
          </p>
          <p>
            <strong>Birth Year: </strong> {selectedUser?.birth_year}
          </p>
          <p>
            <strong>Height: </strong> {selectedUser?.height}cm
          </p>
          <p>
            <strong>Weight: </strong> {selectedUser?.mass}kg
          </p>
          <p>
            <strong>Gender: </strong> {selectedUser?.gender}
          </p>
          <p>
            <strong>Eye color: </strong> {selectedUser?.eye_color}
          </p>
          <p>
            <strong>Skin color: </strong> {selectedUser?.skin_color}
          </p>
          <p>
            <strong>Hair color: </strong> {selectedUser?.hair_color}
          </p>
        </CModalBody>
      </CModal>
    </>
  )
}

export default Dashboard
