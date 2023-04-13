import { ApiTwoTone, BellOutlined, BookOutlined, DatabaseTwoTone, EditTwoTone, EllipsisOutlined, FallOutlined, FileZipTwoTone, MessageOutlined, PhoneOutlined, PrinterTwoTone, RestTwoTone, RiseOutlined, SaveTwoTone } from '@ant-design/icons';
import {
  Avatar,
  Card,
  Col,
  DatePicker,
  Dropdown,
  List,
  Menu,
  Message,
  Progress,
  Row,
  Timeline
} from 'antd';
import {
  DiscreteColorLegend,
  FlexibleWidthXYPlot,
  HorizontalGridLines,
  VerticalBarSeries,
  VerticalGridLines,
  XAxis,
  YAxis
} from 'react-vis';

import NoSSR from 'react-no-ssr';
import PostCard from './shared/PostCard';
import StatCard from './shared/StatCard';

import styled from 'styled-components';
import { theme } from './styles/GlobalStyles';

//const { DatePicker } = DatePicker;

const axes = Array.from(Array(13).keys());

const generate = () => {
  let arr = [];
  axes.map(x => {
    const y = Math.floor(Math.random() * 10) + 1;
    arr.push({ x, y });
  });
  return arr;
};

const series = [
  {
    title: 'Ociosos',
    data: generate()
  },
  {
    title: 'Em operação',
    data: generate()
  }
];

const Legend = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0;
  .rv-discrete-color-legend {
    display: inline-block;
    width: auto !important;
  }
  .rv-discrete-color-legend-item {
    padding-top: 0;
    padding-bottom: 0;
  }
`;

const menu = (
  <Menu>
    <Menu.Item>
      <Row type="flex" align="middle">
        <FileZipTwoTone style={{ fontSize: '16px' }} />
        <span className="mx-3">Arquivar</span>
      </Row>
    </Menu.Item>
    <Menu.Item>
      <Row type="flex" align="middle">
        <EditTwoTone style={{ fontSize: '16px' }} />
        <span className="mx-3">Editar Entradas</span>
      </Row>
    </Menu.Item>
    <Menu.Item>
      <Row type="flex" align="middle">
        <RestTwoTone style={{ fontSize: '16px' }} />
        <span className="mx-3">Excluir Simulação</span>
      </Row>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item>
      <Row type="flex" align="middle">
        <SaveTwoTone style={{ fontSize: '16px' }} />
        <span className="mx-3">Salvar Como</span>
      </Row>
    </Menu.Item>
    <Menu.Item>
      <Row type="flex" align="middle">
        <PrinterTwoTone style={{ fontSize: '16px' }} />
        <span className="mx-3">Baixar</span>
      </Row>
    </Menu.Item>
  </Menu>
);

const data = [
  {
    title: 'Redução de horas extras',
    subtitle: (
      <span>
        <span className="mr-1">15%</span>
        <FallOutlined style={{ fontSize: '20px' }} className="text-error" />
      </span>
    )
  },
  {
    title: 'Redução do custo',
    subtitle: (
      <span>
        <span className="mr-1">R$3200.89</span>
        <FallOutlined style={{ fontSize: '20px' }} className="text-error" />
      </span>
    )
  },
  {
    title: 'Aumento da capacidade p/ novas demandas',
    subtitle: (
      <span>
        <span className="mr-1">24%</span>
        <RiseOutlined style={{ fontSize: '20px' }} className="text-success" />
      </span>
    )
  }
];

const TimelinePeriod = ({ content }) => (
  <small
    className="text-muted"
    css={`
      display: block;
    `}
  >
    {content}
  </small>
);

const Overview = () => {
  return (
    <div>
      <Row gutter={16}>
        <Col xs={24} sm={12} md={6}>
          <StatCard
            type="fill"
            title="Missões Confirmadas D+1"
            value={27}
            icon={<BookOutlined style={{ fontSize: '20px'}} />}
            color={theme.primaryColor}
            clickHandler={() => Message.info('Clique do Botão')}
          />
        </Col>
        <Col xs={24} sm={12} md={6}>
          <StatCard
            type="fill"
            title="Missões a receber até 18h"
            value={7}
            icon={<PhoneOutlined style={{ fontSize: '20px'}}  />}
            color={theme.darkColor}
            clickHandler={() => Message.info('Clique do Botão')}
          />
        </Col>
        <Col xs={24} sm={12} md={6}>
          <StatCard
            type="fill"
            title="Ocorrências Previstas"
            value={15}
            icon={<BellOutlined style={{ fontSize: '20px'}} />}
            color={theme.warningColor}
            clickHandler={() => Message.info('Clique do Botão')}
          />
        </Col>
        <Col xs={24} sm={12} md={6}>
          <StatCard
            type="fill"
            title="Volume de Horas Extras"
            value={41 + " horas"}
            icon={<MessageOutlined style={{ fontSize: '20px'}} />}
            color={theme.errorColor}
            clickHandler={() => Message.info('Clique do Botão')}
          />
        </Col>
      </Row>

      <Card
        title="Planejamento D+1"
        extra={
          <Dropdown overlay={menu}>
            <EllipsisOutlined style={{ fontSize: '20px' }} />
          </Dropdown>
        }
        bodyStyle={{ padding: '1rem' }}
        className="mb-4"
      >
        <NoSSR>
          <Legend>
            <DiscreteColorLegend width={180} height={20} items={series} />
            <DatePicker placeholder="Selecione o dia" />
          </Legend>
          <FlexibleWidthXYPlot xType="ordinal" height={340} xDistance={100}>
            <VerticalGridLines style={{ strokeWidth: 0.5 }} />
            <HorizontalGridLines style={{ strokeWidth: 0.5 }} />
            <XAxis style={{ strokeWidth: 0.5 }} />
            <YAxis style={{ strokeWidth: 0.5 }} />
            <VerticalBarSeries color="#007bff" data={series[0].data} />
            <VerticalBarSeries
              color="rgb(211, 232, 255)"
              data={series[1].data}
            />
          </FlexibleWidthXYPlot>
        </NoSSR>
      </Card>

      <Row gutter={16}>
        <Col sm={24} md={8} className="mb-4">
          <Card bodyStyle={{ padding: 0 }}>
            <Row
              type="flex"
              align="middle"
              justify="center"
              gutter={16}
              className="py-4"
            >
              <Progress
                type="dashboard"
                percent={35 + " Missões"}
                width={181}
                format={percent => (
                  <span className="text-center">
                    <div
                      css={`
                        display: block;
                        color: #007bff;
                        margin: auto;
                      `}
                    >
                      <ApiTwoTone style={{ fontSize: '20px'}} />
                    </div>
                    <div
                      className="h5 mb-0"
                      css={`
                        display: block;
                      `}
                    >
                      {percent}
                    </div>
                    <div className="h6">
                      <small>17% ociosidade</small>
                    </div>
                  </span>
                )}
              />
            </Row>

            <List
              itemLayout="horizontal"
              dataSource={data}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    title={
                      <a
                        href="/"
                        className="px-4"
                        css={`
                          display: flex;
                        `}
                      >
                        {item.title}
                        <span className="mr-auto" />
                        <small>{item.subtitle}</small>
                      </a>
                    }
                  />
                </List.Item>
              )}
            />
          </Card>
        </Col>
        <Col sm={24} md={8} className="mb-4">
          <Card
            title="Histórico de eventos"
            extra={
              <Dropdown overlay={menu}>
                <EllipsisOutlined style={{ fontSize: '20px' }} />
              </Dropdown>
            }
          >
            <Timeline reverse pending="Novo evento pendente..." className="mt-2">
              <Timeline.Item>
                <div className="text-truncate">
                  <TimelinePeriod content="12.15" />
                  <span>15 novas missões incluídas para D+1</span>
                </div>
              </Timeline.Item>
              <Timeline.Item>
                <div className="text-truncate">
                  <TimelinePeriod content="13.20" />
                  <span>5 novas missões incluídas para D+3</span>
                </div>
              </Timeline.Item>
              <Timeline.Item
                dot={
                  <DatabaseTwoTone style={{ fontSize: '16px' }} />
                }
              >
                <div className="text-truncate">
                  <TimelinePeriod content="13.55" />
                  <span>Atualização de recursos realizada com sucesso!</span>
                </div>
              </Timeline.Item>
              <Timeline.Item>
                <div className="text-truncate">
                  <TimelinePeriod content="14.40" />
                  <span>5 novas missões incluídas para D+1</span>
                </div>
              </Timeline.Item>
            </Timeline>
          </Card>
        </Col>
        <Col sm={24} md={8} className="mb-4">
          <Card
            title="Atualizações de Colaboradores"
            extra={
              <Dropdown overlay={menu}>
                <EllipsisOutlined style={{ fontSize: '20px' }} />
              </Dropdown>
            }
          >
            <Timeline
              reverse pending={<div className="ml-4">Activities pending...</div>}
              className="mt-2"
            >
              <Timeline.Item
                dot={<Avatar size={24} src="/images/face1.jpg" />}
              >
                <div className="ml-4 text-truncate">
                  <TimelinePeriod content="9.45" />
                  <span>
                    <a>José Cuervero</a> iniciou a jornada com 32 min de atraso
                  </span>
                </div>
              </Timeline.Item>
              <Timeline.Item
                dot={<Avatar size={24} src="/images/face2.jpg" />}
              >
                <div className="ml-4 text-truncate">
                  <TimelinePeriod content="11.20" />
                  <span>
                    <a>Paula Benar</a> foi substituida na missão ID 1792
                  </span>
                </div>
              </Timeline.Item>
              <Timeline.Item
                dot={<Avatar size={24} src="/images/face3.jpg" />}
              >
                <div className="ml-4 text-truncate">
                  <TimelinePeriod content="13.00" />
                  <span>
                    <a>Pedro Lemes</a> não inciou sua jornada e foi substituído por <a>Paula Benar</a>
                  </span>
                </div>
              </Timeline.Item>
              <Timeline.Item
                dot={<Avatar size={24} src="/images/face4.jpg" />}
              >
                <div className="ml-4 text-truncate">
                  <TimelinePeriod content="15.00" />
                  <span>
                    <a>Tiago Belmont</a> foi escalado para a missão ID 1792 - fora do plano
                  </span>
                </div>
              </Timeline.Item>
            </Timeline>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Overview;
