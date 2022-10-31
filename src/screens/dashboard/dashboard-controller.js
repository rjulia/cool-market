/* eslint-disable no-param-reassign */
import React, { useEffect, useState } from 'react'
import _ from 'lodash'
import makeRequest from '../../helpers/make-request'
import DashboardView from './dashboard-view'

const DashboardController = () => {
  const [loading, setLoading] = useState(false)
  const [dataStocks, setDataStocks] = useState([])
  const [totlaInvest, setTotlaInvest] = useState(0)

  // catch with useEffect so the data will be contained
  const getdataStocks = async () => {
    setLoading(true)
    const headers = {
      'Content-Type': 'application/json',
    }

    // fetch the data with makerequest
    makeRequest({
      headers,
      endPoint: 'stocks',
      params: {
        populate: '*',
      },
    }).then((resp) => {
      setDataStocks(resp.data)
      setLoading(false)
    })
      .catch((error) => {
        console.error(error)
        setLoading(false)
      })
  }
  useEffect(() => {
    getdataStocks()
  }, [])

  useEffect(() => {
    const total = _.reduce(dataStocks.data, (result, value, key) => {
      result += value.attributes.price
      return result
    }, 0)
    setTotlaInvest(total)
  }, [dataStocks])

  const viewProps = {
    data: dataStocks,
    totlaInvest,
    loading,
  }
  console.log('🚀 ~ file: dashboard-controller.js ~ line 40 ~ DashboardController ~ dataStocks', dataStocks)
  return (
    // <DashboardView {...viewProps}/>
    <p>hello</p>
  )
}

export default DashboardController
