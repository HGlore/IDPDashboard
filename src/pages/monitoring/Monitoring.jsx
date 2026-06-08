import React from 'react'
import MonitoringHeader from './components/header/MonitoringHeader'
import BillerListView from './components/BillerListView'

const Monitoring = ({ date }) => {
  return (
    <div className='min-h-full shadow-[0_0_15px_rgba(0,0,0,0.4)] rounded-sm flex flex-col p-1 bg-linear-to-br'>
      <div className='flex'>
        <MonitoringHeader />
      </div>
      <div>
        <BillerListView />
      </div>
    </div>
  )
}

export default Monitoring

