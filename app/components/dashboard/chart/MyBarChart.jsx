import "./chart.scss";
import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'New',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Sealed',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'unsealed',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
];

export default function MyBarChart({ title }) {
    return (
        <div className="chart shadow-sm">
            <div className="title">{title}</div>
            <ResponsiveContainer width="100%" height={220}>
                <BarChart
                    width={500} height={320}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
