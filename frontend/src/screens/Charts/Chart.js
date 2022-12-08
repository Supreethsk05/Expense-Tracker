import React, {useEffect, useState} from 'react'
import Chart from "react-apexcharts";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { listtransactions } from '../../actions/transactionsAction';

const Charts = () => {
  const dispatch=useDispatch()
    
  const transactionsList=useSelector(state=>state.transactionsList)
  const {loading,transactions,error}=transactionsList
  //const {loading , notes , error} =transactionsList
  useEffect(() => {
    
  dispatch(listtransactions())
   
    
  }, [dispatch])
    const [data, setData]= useState({
          
        series: [44, 55, 13, 43, 22],
        options: {
          chart: {
            width: 380,
            type: 'pie',
          },
          labels: [transactions?.map((transaction=>transaction.id))],
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },
      
      
      })


    

  return (
    <div>
        <Chart options={data?.options} series={data?.series} type="pie" width={380} />
        
        </div>
        
  )
}

export default Charts