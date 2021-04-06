import { Tabs } from "antd";
import { CreateTable } from "./table";
import "./stylePlots.css";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

export const TabsPlot = (weather) => (
  <Tabs className="styleTabs" defaultActiveKey="1" onChange={callback}>
    <TabPane tab="Temperature" key="1">
      <CreateTable className="styleTabsContent" content={weather && weather}/>
    </TabPane>
    <TabPane tab="Humidity" key="2">
      Content of Tab Pane 2
    </TabPane>
    <TabPane tab="Wind" key="3">
      Content of Tab Pane 3
    </TabPane>
  </Tabs>
);