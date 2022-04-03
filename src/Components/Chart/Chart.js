import React from 'react';
import './Chart.css';
import { Area, AreaChart, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
const Chart = () => {
    const data =
        [
            {
                "month": "Mar",
                "investment": 100000,
                "sell": 241,
                "revenue": 10401
            },
            {
                "month": "Apr",
                "investment": 200000,
                "sell": 423,
                "revenue": 210200
            },
            {
                "month": "May",
                "investment": 500000,
                "sell": 726,
                "revenue": 470199
            },
            {
                "month": "Jun",
                "investment": 500000,
                "sell": 529,
                "revenue": 404050
            },
            {
                "month": "Jul",
                "investment": 600000,
                "sell": 601,
                "revenue": 509000
            },
            {
                "month": "Aug",
                "investment": 700000,
                "sell": 670,
                "revenue": 610000
            }
        ]
    return (
        <div className='chart'>

            <div>
                <h1>MONTH BILL</h1>
                <LineChart width={500} height={300} data={data}>
                    <Line type="monotone" dataKey={'sell'}></Line>
                    <XAxis dataKey={'month'}></XAxis>
                    <Tooltip></Tooltip>
                    <YAxis></YAxis>
                </LineChart>
            </div>

            <div>
                <h1>Investment vs revenue</h1>
                <AreaChart width={500} height={300} data={data}>
                    <Area type="monotone" dataKey={'investment'} color={'green'}></Area>
                    <Area type="monotone" dataKey={'revenue'}></Area>
                    <XAxis dataKey={'month'}></XAxis>
                    <Tooltip></Tooltip>
                    <YAxis></YAxis>
                </AreaChart>
            </div>

        </div>
    );
};

export default Chart;