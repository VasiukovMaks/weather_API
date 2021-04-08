import { Tabs } from "antd";
import { CreateTable } from "./table";
import { CreateBarChart } from "./bar";
import "./stylePlots.css";
import {getDataPlot} from "../../utils/locals";
import {WindCard} from "../card/card"

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
};

export function TabsPlot({content}) {
  let data;
  if (content) {
    data = getDataPlot(content)
  };

  return( 
  <Tabs className="styleTabs" defaultActiveKey="1" onChange={callback}>
    <TabPane tab="Temperature" key="1">
      <CreateTable className="styleTabsContent" content={data && data}/>
    </TabPane>
    <TabPane tab="Humidity" key="2">
      <CreateBarChart className="styleTabsContent" content={data && data}/>
    </TabPane>
    <TabPane tab="Wind" key="3">
    <WindCard content={data && data}/>
    </TabPane>
  </Tabs>
)};