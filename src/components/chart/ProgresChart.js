import React from 'react';
import { Progress } from 'antd';
import { red, green } from '@ant-design/colors';


const ProgressChart = () => (
      <>
        <span className="bnb2">Потерь пакетов Chanel 1   </span> <span className="space" > </span> <br /><Progress percent={50} steps={3} />
        <br />
        <span className="bnb2">Потерь пакетов  Chanel 2 </span> <span className="space" > </span>
        <br />

        <Progress percent={30} steps={5} />
        <br />
        <span className="bnb2">Потерь пакетов Chanel 3  </span> <span className="space" > </span><br />
        <Progress percent={100} steps={5} size="small" strokeColor={green[6]} />
        <br />
        <span className="bnb2">Потерь пакетов Chanel 4  </span> <span className="space" > </span><br />
        <Progress percent={60} steps={5} strokeColor={[green[6], green[6], red[5]]} />
      </>
    );
export default ProgressChart;