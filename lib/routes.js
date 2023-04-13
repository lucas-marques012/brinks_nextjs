import { AlertTwoTone, CompassTwoTone, CrownTwoTone, DiffTwoTone, EditTwoTone, FireTwoTone, FolderTwoTone, HomeTwoTone, LayoutTwoTone, PictureTwoTone, PieChartTwoTone, QuestionCircleTwoTone, ShoppingTwoTone, SwitcherTwoTone, UnlockTwoTone, WarningTwoTone, DatabaseTwoTone } from '@ant-design/icons';

export default [
  {
    path: "/",
    name: "Início",
    icon: <HomeTwoTone style={{ fontSize: '16px' }} />
  },

  {
    name: "Otimizadores",
    icon: <ShoppingTwoTone style={{ fontSize: '16px' }} />,
    children: [
      {
        path: "/apps/_otimizacaohard",
        name: "Otimização"
      },
      {
        path: "/apps/_reotimizacao",
        name: "Re-otimização"
      }
    ]
  },

  {
    name: "Análises",
    icon: <PieChartTwoTone style={{ fontSize: '16px' }} />,
    children: [
      {
        path: "/charts/plots",
        name: "Plano vs Execução"
      },
      {
        path: "/charts/axes",
        name: "Comparações MoM"
      },
      {
        path: "/charts/legends",
        name: "Nível de Serviço"
      }
    ]
  },

  {
    name: "Base de Dados",
    icon: <DatabaseTwoTone style={{ fontSize: '16px' }} />,
    children: [
      {
        path: "/data-display/_colaboradores",
        name: "Colaboradores"
      },
      {
        path: "/data-display/badge",
        name: "Veículos"
      },
      {
        path: "/data-display/collapse",
        name: "Missões"
      },
      {
        path: "/data-display/carousel",
        name: "Ponto"
      },
      {
        path: "/data-display/card",
        name: "Duração Média"
      }
    ]
  },
  
  {
    path: "/maps/markers",
    name: "Mapas",
    icon: <CompassTwoTone style={{ fontSize: '16px' }} />,
    badge: {
      value: "Novo"
    }

  },

  {
    path: "https://www.cognitivo.ai/",
    name: "F.A.Q.",
    icon: <QuestionCircleTwoTone style={{ fontSize: '16px' }} />
  },

  {
    name: "Autenticação",
    icon: <UnlockTwoTone style={{ fontSize: '16px' }} />,
    children: [
      {
        path: "/signin",
        name: "Alterar usuário"
      },
      {
        path: "/lockscreen",
        name: "Alterar senha"
      },
      {
        path: "/signup",
        name: "Sair"
      }

    ]
  }
];
