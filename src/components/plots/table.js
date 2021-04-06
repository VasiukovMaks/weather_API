import React from 'react';
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import {getDataPlot} from "../../utils/locals"

export function CreateTable({content}) {
    let data;
    if (content.content) data = getDataPlot(content);
    

    return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 5,
            left: 5,
            bottom: 0,
          }}
        >
          
          <XAxis dataKey="Time" stroke="#999999"/>
          <Tooltip />
          <Area type="monotone" dataKey="Temperature" stroke="#f19900" fill="#ffe0b5" label={{position: "top", fill: "#999999"}} fillOpacity={0.3}/>
        </AreaChart>
      </ResponsiveContainer>
    );
  };