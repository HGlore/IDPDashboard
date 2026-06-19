import React, { useState } from 'react'
import MonitoringHeader from './components/header/MonitoringHeader'
import BillerListView from './components/body/BillerListView'
import { useEffect } from 'react'
import * as entriesAPI from "./../../api/entriesAPI"

const Monitoring = ({ date }) => {
  const [filteredStatus, setFilteredStatus] = useState(5);
  const [prodStatusList, setProdStatusList] = useState([]);

  useEffect(() => {
    fetchProductionStatus();

  }, [date, filteredStatus]);

  const fetchProductionStatus = async () => {
    try {
      const userProdList = await entriesAPI.getUserProdStatus(filteredStatus, date);
      setProdStatusList(userProdList);

    } catch (error) {
      console.warn("Error fetching production status: ", error);
    }
  }

  return (
    <div className='min-h-full shadow-[0_0_15px_rgba(0,0,0,0.4)] rounded-sm flex flex-col p-1 bg-linear-to-br'>
      <div className='flex'>
        <MonitoringHeader setFilteredStatus={setFilteredStatus} />
      </div>

      <div className='flex-1 overflow-y-auto'>
        <BillerListView filteredStatus={filteredStatus} prodList={prodStatusList} updateListHandle={fetchProductionStatus} />
      </div>
    </div>
  )
}

export default Monitoring

