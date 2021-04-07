import React from 'react';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

export function CreateBarChart({content}) {

    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={content}
          margin={{
            top: 10,
            right: 5,
            left: 5,
            bottom: 0,
          }}
        >
          <XAxis dataKey="Time" stroke="#999999"/>
          <Tooltip />
          <Bar dataKey="Humidity" fill="#75cbf0" label={{position: "top", fill: "#999999", content: "Time"}}/>
        </BarChart>
      </ResponsiveContainer>
    );
  };
