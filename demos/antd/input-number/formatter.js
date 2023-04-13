import { InputNumber, Form, Row, Col } from 'antd';

function onChange(value) {
  console.log('changed', value);
}

const Component = () => (
  <div>
    <Row gutter={[16, 16]} justify="center">
      <Col>
        <Form.Item label="Valor Hora Normal">
          <InputNumber
            defaultValue={40}
            formatter={value => `R$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            parser={value => value.replace(/\$\s?|(,*)/g, '')}
            onChange={onChange}
          />
        </Form.Item>
      </Col>
      <Col>
        <Form.Item label="Valor Hora Extra">
          <InputNumber
            defaultValue={80}
            formatter={value => `R$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            parser={value => value.replace(/\$\s?|(,*)/g, '')}
            onChange={onChange}
          />
        </Form.Item>
      </Col>
      <Col>
        <Form.Item label="Penalidade hora-extra">
          <InputNumber
            defaultValue={95}
            min={0}
            max={100}
            formatter={value => `${value}%`}
            parser={value => value.replace('%', '')}
            onChange={onChange}
          />
        </Form.Item>
      </Col>
      <Col>
        <Form.Item label="Penalidade ociosidade">
          <InputNumber
            defaultValue={10}
            min={0}
            max={100}
            formatter={value => `${value}%`}
            parser={value => value.replace('%', '')}
            onChange={onChange}
          />
        </Form.Item>
      </Col>
      <Col>
        <Form.Item label="Penalidade atendimento">
          <InputNumber
            defaultValue={100}
            min={0}
            max={100}
            formatter={value => `${value}%`}
            parser={value => value.replace('%', '')}
            onChange={onChange}
          />
        </Form.Item>
      </Col>
    </Row>
  </div>
);


export default Component;
