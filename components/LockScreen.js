import { Avatar, Button, Form, Input, Row } from 'antd';

import { EyeTwoTone } from '@ant-design/icons';
import Link from 'next/link';
import styled from 'styled-components';

const FormItem = Form.Item;

const Content = styled.div`
  max-width: 400px;
  z-index: 2;
  min-width: 300px;
`;

const LockScreen = ({ form }) => (
  <Row
    type="flex"
    align="middle"
    justify="center"
    className="px-3 bg-white"
    style={{ minHeight: '100vh' }}
  >
    <Content>
      <div className="text-center mb-4">
        <Avatar src="/images/avatar.jpg" size={80} />
        <h6 className="mt-3">Lucas Marqueano</h6>
      </div>

      <Form layout="vertical">
        <FormItem name="password" rules={[{ required: true, message: 'Por gentileza inclua sua senha atual!' }]}>
          <Input
            prefix={
              <EyeTwoTone style={{fontSize: '16px'}} />
            }
            type="password"
            placeholder="Senha Atual"
          />
        </FormItem>

        <FormItem>
          <Button type="primary" htmlType="submit" block>
            Seguir para alteração
          </Button>
        </FormItem>

        <div className="text-center">
          <small className="text-muted text-center">
            <span>Alterar senha de outra conta?</span>
            <Link href="/signin">
              <a> Entrar como administrador!</a>
            </Link>
          </small>
        </div>
      </Form>
    </Content>
  </Row>
);

export default LockScreen;
