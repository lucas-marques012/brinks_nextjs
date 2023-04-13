import { Avatar } from 'antd';
import { MessageOutlined } from '@ant-design/icons';

export default [
  {
    title: 'Cognitivo atualizou a aba Gráficos',
    description: '1 dia atrás',
    avatar: (
      <Avatar
        size="large"
        style={{
          color: 'rgb(34, 245, 0)',
          backgroundColor: 'rgb(207, 253, 219)'
        }}
        icon={<MessageOutlined style={{ fontSize: '24px' }} />}
      >

      </Avatar>
    )
  },
  {
    title: 'Carlos realizou uma nova simulação',
    description: '3 horas atrás',
    avatar: <Avatar size="large" src="/images/face1.jpg" />
  },

  {
    title: 'Elaine solicitou ajuste no plano submetido',
    description: '0,5 horas atrás',
    avatar: (
      <Avatar
        size="large"
        style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}
      >
        D
      </Avatar>
    )
  }
];
