import React from 'react'
import { NavLink } from 'react-router-dom'
import { CContainer, CHeader, CHeaderDivider, CHeaderNav, CNavLink, CNavItem } from '@coreui/react'
import { AppBreadcrumb } from './index'

const AppHeader = () => {
  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        <CHeaderNav className="d-none d-md-flex me-auto">
          <CNavItem>
            <CNavLink to="/dashboard" component={NavLink}>
              Dashboard
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
      </CContainer>
      <CHeaderDivider />
      <CContainer fluid>
        <AppBreadcrumb />
      </CContainer>
    </CHeader>
  )
}

export default AppHeader
