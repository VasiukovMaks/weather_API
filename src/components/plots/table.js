import React from 'react';
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

export function CreateTable({content}) {

    return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={content}
          margin={{
            top: 15,
            right: 5,
            left: 5,
            bottom: 0,
          }}
        >
          
          <XAxis dataKey="Time" stroke="#999999"/>
          <Tooltip />
          <Area type="monotone" dataKey="Temperature" stroke="#f19900" fill="#ffe0b5" label={{position: "top", fill: "#999999"}}/>
        </AreaChart>
      </ResponsiveContainer>
    );
  };