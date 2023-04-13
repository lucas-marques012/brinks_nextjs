import {
  Button,
  Checkbox,
  Col,
  Form,
  InputNumber,
  Radio,
  Rate,
  Row,
  Select,
  Slider,
  Switch,
  Upload,
} from 'antd';
import { InboxOutlined, UploadOutlined } from '@ant-design/icons';

const { Option } = Select;

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};

const normFile = e => {
  console.log('Atualizar Evento:', e);
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
};

const Demo = () => {
  const onFinish = values => {
    console.log('Valores recebidos: ', values);
  };

  return (
    <Form
      name="validate_other"
      {...formItemLayout}
      onFinish={onFinish}
      initialValues={{
        ['input-number']: 3,
        ['checkbox-group']: ['A', 'B'],
        rate: 3.5,
      }}
    >
      <Form.Item
        name="select"
        label="Horizonte de simulação"
        hasFeedback
        rules={[{ required: true, message: 'Selecione qual horizonte deseja!' }]}
      >
        <Select placeholder="Clique para selecionar">
          <Option value="1">Dia</Option>
          <Option value="7">Semana</Option>
          <Option value="30">Mês</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="select-multiple"
        label="Select[multiple]"
        rules={[{ required: true, message: 'Selecione as categorias de missão que deseja otimizar!', type: 'array' }]}
      >
        <Select mode="multiple" placeholder="Selecione as categorias de missão">
          <Option value="0">Completas</Option>
          <Option value="1">Retiradas</Option>
          <Option value="2">Entregas</Option>
        </Select>
      </Form.Item>

      <Row gutter={[5, 5]} justify="center">
        <Col span={12}>
          <Form.Item label="Tempo máximo de execução">
            <Form.Item name="input-number" noStyle>
              <InputNumber min={1} max={90} defaultValue={10} />
            </Form.Item>
            <span className="ant-form-text">minutos</span>
          </Form.Item>
        </Col>
        <Col span={10}>
          <Form.Item name="switch" label="Enviar logs por e-mail" valuePropName="checked">
            <Switch />
          </Form.Item>
        </Col>
      </Row>

          <Form.Item name="slider" label="Atendimento das missões">
            <Slider
              marks={{
                0: '75%',
                25: '80%',
                50: '85%',
                75: '90%',
                85: '95%',
                99: '99%',
              }}
            />
          </Form.Item>


      <Form.Item wrapperCol={{ span: 34, offset: 0 }}>
        <Button type="primary" htmlType="submit"
          style={{ width: '50%', minWidth: '340px', display: 'block', margin: '0 auto' }}
        >
          Executar simulação
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Demo;
