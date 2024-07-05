

import ReactApexChart from "react-apexcharts";
import { Row, Col, Typography } from "antd";
import eChart from "./configs/eChart";

function EChart() {
  const { Title, Paragraph } = Typography;

  const items = [
    {
      Title: "3,6K",
      user: "Пользователей",
    },
    {
      Title: "2m",
      user: "Кликов",
    },
    {
      Title: "772",
      user: "Переходов",
    },
    {
      Title: "82",
      user: "Авторизовано",
    },
  ];

  return (
    <>
      <div id="chart">
        <ReactApexChart
          className="bar-chart"
          options={eChart.options}
          series={eChart.series}
          type="bar"
          height={220}
        />
      </div>
      <div className="chart-vistior">
        <Title level={5}>Пользователей</Title>
        <Paragraph className="lastweek">
          за неделю <span className="bnb2">+30%</span>
        </Paragraph>
        <Paragraph className="lastweek">Отображаются тестовые данные</Paragraph>
        <Row gutter>
          {items.map((v, index) => (
            <Col xs={6} xl={6} sm={6} md={6} key={index}>
              <div className="chart-visitor-count">
                <Title level={4}>{v.Title}</Title>
                <span>{v.user}</span>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}

export default EChart;
