import React from 'react';
import { Layout, Tabs } from 'antd';
import Laptop from './Laptop';
import IPhone from './Iphone';
import Camera from './Camera';
import './Dashboard.css'; 

const { Header, Content, Footer } = Layout;
const { TabPane } = Tabs;

const Dashboard = () => {
  return (
    <Layout>
      <Header>
        <h1>Tabs</h1>
      </Header>
      
      <Content>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Laptop" key="1">
            <Laptop />
          </TabPane>
          <TabPane tab="IPhone" key="2">
            <IPhone />
          </TabPane>
          <TabPane tab="Camera" key="3">
            <Camera />
          </TabPane>
        </Tabs>
      </Content>
     
    </Layout>
  );
};

export default Dashboard;
