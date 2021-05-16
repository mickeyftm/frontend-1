import React from 'react'
import { useHistory } from 'react-router-dom'
import { Visible } from 'react-grid-system'

import { useTheme, IconChart, IconGraph, LinkBase } from '@aragon/ui'
import SidebarTitle from './SidebarTitle'

const hash = process.env.REACT_APP_VERSION || '0x00'

export default function SideBar() {
  const theme = useTheme()
  const history = useHistory()

  return (
    <div
      style={{
        backgroundColor: theme.surface,
        height: '100%',
        width: '100%',
        borderRight: '1px solid',
        borderColor: theme.border,
      }}
    >
      <div style={{ paddingTop: '5%' }}>
        <SidebarTitle
          title="Dashboard"
          icon={<IconChart />}
          onClick={() => {
            history.push('/dashboard')
          }}
          isSelected={false}
        />
        <SidebarTitle
          title="Pools"
          icon={<IconGraph />}
          onClick={() => {
            history.push('/pools')
          }}
          isSelected={false}
        />
      </div>
      <Visible xl lg xxl md>
        <div
          style={{
            color: theme.contentSecondary,
            padding: '10px',
            position: 'fixed',
            bottom: '0px',
          }}
        >
          Commit Hash{' '}
          <LinkBase external href={`https://github.com/antoncoding/hodl-frontend/commit/${hash}`}>
            {' '}
            {hash}{' '}
          </LinkBase>
        </div>
      </Visible>
    </div>
  )
}
