import React from 'react'
import Card from './Card'
import { useSearchParams } from 'react-router-dom'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJs, ArcElement, Tooltip, Legend } from 'chart.js'
import { PieChart } from 'react-minimal-pie-chart'
ChartJs.register(ArcElement, Tooltip, Legend)

function Dashboard() {
  const [searchParams, setParams] = useSearchParams()
  console.log(Object.fromEntries([...searchParams]))
  return (
    <>
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
        <a
          href="#"
          class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i class="fas fa-download fa-sm text-white-50"></i> Generate Report
        </a>
      </div>

      <div class="row">
        <Card title="Currently Joining" value="900" color="primary" />
        <Card title="Total Student" value="3000" color="info" />
        <Card title="Total Teachers" value="2000" color="warning" />
        <Card title="Online student" value="4700" color="success" />
      </div>

      <div className="row">
        <div className="col-lg-4">
          <Doughnut
            data={{
              labels: ['Red', 'Blue', 'Yellow'],
              datasets: [
                {
                  label: 'My First Dataset',
                  data: [300, 50, 100],
                  backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)',
                  ],
                  hoverOffset: 4,
                },
              ],
            }}
          />
        </div>
      </div>
    </>
  )
}

export default Dashboard
