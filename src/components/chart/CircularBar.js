import {
  MinusOutlined,
  PlusOutlined,
  PlusCircleFilled,
  Plus,
  MinusCircleFilled,
} from "@ant-design/icons";
import "antd/dist/antd.css";

import { Button, Progress, Radio, Card } from "antd";
import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const CircularBar = () => {
  const [percent, setPercent] = useState([432, 90, 5]);
  const increase = () => {
    let newPercent = percent + 5;
    if (newPercent > 100) {
      newPercent = 100;
    }
    setPercent(newPercent);
  };
  const decline = () => {
    let newPercent = percent - 5;
    if (newPercent < 0) {
      newPercent = 0;
    }
    setPercent(newPercent);
  };
  const month = () => {
    setPercent([432, 90, 25]);
  };
  const week = () => {
    setPercent([88, 50, 15]);
  };
  const day = () => {
    setPercent([5, 3, 1]);
  };
  return (
    <>
      <h3 className="">Сравнение по времени </h3>
      <Radio.Group defaultValue="a" buttonStyle="solid">
        <Radio.Button onClick={month} value="a">
          Месяц
        </Radio.Button>
        <Radio.Button onClick={week} value="b">
          Неделя
        </Radio.Button>
        <Radio.Button onClick={day} value="c">
          День
        </Radio.Button>
      </Radio.Group>
      <br />
      <br />
      {/* <Progress type="circle" percent={percent} />
      <Button.Group>
        <Button onClick={decline} className={'minusicon'} icon={<MinusOutlined />} />
        <Button onClick={increase} className={'minusicon'} icon={<PlusCircleFilled />} />
      </Button.Group> */}
      <>
        <div className="fle">
          <div className="space">
            <span className="space">Новых клиентов </span>
            <NavLink to="/details">
              <Progress
                type="circle"
                percent={percent[0]}
                format={(number) => `${percent[0]}k`}
              />
            </NavLink>
          </div>
          <div className="space">
            <span className="space">Выполнение плана продаж </span>
            <NavLink to="/details">
              <Progress
                type="circle"
                percent={percent[1]}
                status={percent[1] < 20 ? "exception" : "none"}
              />
            </NavLink>
          </div>
          <div className="space">
            <span className="space">Откол </span>
            <NavLink to="/details">
              <Progress type="circle" percent={percent[2]} strokeColor="red" />
            </NavLink>
          </div>
        </div>
      </>
    </>
  );
};
export default CircularBar;
