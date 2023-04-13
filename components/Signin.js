import { Button, Checkbox, Form, Input, Message, Row } from 'antd';
import { EyeTwoTone, MailTwoTone, PlaySquareTwoTone } from '@ant-design/icons';

import Link from 'next/link';
import Router from 'next/router';
import styled from 'styled-components';
import { useAppState } from './shared/AppProvider';

const FormItem = Form.Item;

const Content = styled.div`
  max-width: 400px;
  z-index: 2;
  min-width: 300px;
`;

const Signin = ({ form }) => {
  const [state] = useAppState();
  return (<Row
    type="flex"
    align="middle"
    justify="center"
    className="px-3 bg-white mh-page"
    style={{ minHeight: '100vh' }}
  >
    <Content>
      <div className="text-center mb-5">
        <Link href="/signin">
          <a className="brand">
            <img src="/images/favicon3.png" alt="Your Favicon" style={{ width: '350px', height: '62px' }} />
          </a>
        </Link>
        <h5 className="mb-0 mt-3">Entrar</h5>

        <p className="text-muted">Inicie sua jornada na otimização Brinks BTG</p>
      </div>

      <Form
        layout="vertical"
        onSubmit={e => {
          e.preventDefault();
          form.validateFields((err, values) => {
            if (!err) {
              Message.success(
                'Login concluído. Levando você para seu dashboard!'
              ).then(() => Router.push('/'));
            }
          });
        }}
      >
        <FormItem label="Email" name="email" rules={[
              {
                type: 'email',
                message: 'O e-mail inserido não é válido!'
              },
              {
                required: true,
                message: 'Por gentileza inclua seu e-mail!'
              }
            ]}>
          <Input
            prefix={
              <MailTwoTone style={{fontSize: '16px'}} />
            }
            type="email"
            placeholder="Email"
          />
        </FormItem>

        <FormItem label="Senha" name="password" rules={[{ required: true, message: 'Por gentileza inclua seu e-mail!' }]}>
          <Input
            prefix={
              <EyeTwoTone style={{fontSize: '16px'}} />
            }
            type="password"
            placeholder="Senha"
          />
        </FormItem>

        <FormItem name="remember" valuePropName="checked" initialValue={true}>
          <Checkbox>Mantenha-me conectado</Checkbox>
          <Link href="/forgot">
            <a className={`${state.direction === 'rtl' ? 'text-xs-left' : 'text-xs-right'}`}>
              <small>Esqueceu a senha?</small>
            </a>
          </Link>
          <Button type="primary" htmlType="submit" block className="mt-3">
            Entrar
          </Button>
        </FormItem>

        <div className="text-center">
          <small className="text-muted">
            <span>Ainda não tem uma conta?</span>{' '}
            <Link href="/signup">
              <a>&nbsp;Crie uma agora!</a>
            </Link>
          </small>
        </div>
      </Form>
    </Content>
  </Row>
);
          }

export default Signin;
