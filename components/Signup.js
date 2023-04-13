import { Button, Form, Input, Message, Row, Tooltip } from 'antd';
import { EyeTwoTone, MailTwoTone, PlaySquareTwoTone, QuestionCircleTwoTone, SkinTwoTone } from '@ant-design/icons';


import Link from 'next/link';
import Router from 'next/router';
import styled from 'styled-components';

const FormItem = Form.Item;

const Content = styled.div`
  max-width: 400px;
  z-index: 2;
  min-width: 300px;
`;

const Signup = ({ form }) => (
  <Row
    type="flex"
    align="middle"
    justify="center"
    className="px-3 bg-white"
    style={{ minHeight: '100vh' }}
  >
    <Content>
      <div className="text-center mb-5">
        <Link href="/signup">
          <a className="brand">
            <img src="/images/favicon3.png" alt="Your Favicon" style={{ width: '350px', height: '62px' }} />
          </a>
        </Link>
        <h5 className="mb-0 mt-3">Cadastrar</h5>

        <p className="text-muted">Crie uma conta para um novo usuário</p>
      </div>

      <Form
        layout="vertical"
        onSubmit={e => {
          e.preventDefault();
          form.validateFields((err, values) => {
            if (!err) {
              Message.success('Conta criada com sucesso, verifique seu e-mail para próximas instruções!').then(
                () => Router.push('/signin')
              );
            }
          });
        }}
      >
        <FormItem
          label={
            <span>
              Nome&nbsp;
              <Tooltip title="Como você prefere ser chamado?">
                <QuestionCircleTwoTone style={{fontSize: '16px'}} />
              </Tooltip>
            </span>
          }
          name="Nome"
          rules={[
            {
              required: true,
              message: 'Por favor insira seu nome!',
              whitespace: true
            }
          ]}
        >
          <Input
            prefix={
              <SkinTwoTone style={{fontSize: '16px'}} />
            }
            placeholder="Nome"
          />
        </FormItem>

        <FormItem label="Email" name="email" rules={[
              {
                type: 'email',
                message: 'O e-mail informado não é válido!'
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

        <FormItem label="Senha" name="password" rules={[{ required: true, message: 'Por gentileza inclua sua senha!' }]}>
          <Input
            prefix={
              <EyeTwoTone style={{fontSize: '16px'}} />
            }
            type="password"
            placeholder="Senha"
          />
        </FormItem>

        <FormItem label="Confirme a senha" name="confirm" rules={[
              {
                required: true,
                message: 'Por gentileza confirme sua senha!'
              },
              {
                validator: (rule, value, callback) => {
                  if (value && value !== form.getFieldValue('password')) {
                    callback("As senhas informadas não coincidem!");
                  } else {
                    callback();
                  }
                }
              }
            ]}>
          <Input
            prefix={
              <EyeTwoTone style={{fontSize: '16px'}} />
            }
            type="password"
            placeholder="Confirme a senha"
          />
        </FormItem>

        <FormItem>
          <Button type="primary" htmlType="submit" block>
            Criar
          </Button>
        </FormItem>

        <div className="text-center">
          <small className="text-muted">
            <span>Já tem uma conta??</span>{' '}
            <Link href="/signin">
              <a>&nbsp;Entre agora!</a>
            </Link>
          </small>
        </div>
      </Form>
    </Content>
  </Row>
);

export default Signup;
