import { Row } from 'antd';
import { mapSection } from '../showcase-components/showcase-utils';
import { showCase } from '../index';

const {
  AxisOn0,
  AxisWithTurnedLabels,
  CustomAxes,
  CustomAxisChart,
  CustomAxesOrientation,
  CustomAxisTickFormat,
  CustomAxisTickElement,
  DecorativeAxisCrissCross,
  DynamicComplexEdgeHints,
  DynamicCrosshair,
  DynamicCrosshairScatterplot,
  DynamicHints,
  DynamicProgrammaticRightEdgeHints,
  DynamicSimpleEdgeHints,
  DynamicSimpleTopEdgeHints,
  PaddedAxis,
  ParallelCoordinatesExample,
  StaticCrosshair,
  StaticHints
} = showCase;

/* eslint-disable max-len */
const AXES = [
  {
    name: 'Eixo em 0',
    component: AxisOn0,
    componentName: 'AxisOn0'
  },
  {
    name: 'Orientação de Eixos Personalizados',
    component: CustomAxesOrientation,
    componentName: 'CustomAxesOrientation'
  },
  {
    name: 'Eixo Personalizado',
    component: CustomAxisChart,
    componentName: 'CustomAxisChart'
  },
  {
    name: 'Formato de marcação de eixo personalizado',
    component: CustomAxisTickFormat
  },
  {
    name: 'Elemento de rótulo de marcação de eixo personalizado',
    component: CustomAxisTickElement
  },

  {
    name: 'Rótulos de eixo girados',
    component: AxisWithTurnedLabels,
    componentName: 'AxisWithTurnedLabels'
  },
  {
    name: 'Eixo Não Acolchoado vs Eixo Acolchoado',
    component: PaddedAxis,
    componentName: 'PaddedAxis'
  }
];

const TOOLTIPS = [
  {
    name: 'Dicas Estáticas',
    component: StaticHints,
    componentName: 'StaticHints'
  },
  {
    name: 'Dicas Dinâmicas',
    comment: 'Mova o mouse sobre o ponto para ver a dica.',
    component: DynamicHints,
    componentName: 'DynamicHints'
  },
  {
    name: 'Dicas de Borda Simples Dinâmicas',
    comment:
      'Passe o mouse sobre o ponto. A dica aparece em diferentes bordas. A margem esquerda permite que o primeiro ponto seja mostrado sem quebra.',
    component: DynamicSimpleEdgeHints,
    componentName: 'DynamicSimpleEdgeHints'
  },
  {
    name: 'Dicas de Borda Superior Simples Dinâmicas',
    comment:
      'Passe o mouse sobre o ponto. horizontalAlign=ALIGN.AUTO, verticalAlign=ALIGN.TOP_EDGE  A dica é fixada na borda superior, o poste se move ao longo da borda, a caixa de dica à direita do poste para os 2 primeiros pontos de dados e à esquerda caso contrário.',
    component: DynamicSimpleTopEdgeHints,
    componentName: 'DynamicSimpleTopEdgeHints'
  },
  {
    name: 'Dicas de Borda Direita Programáticas Dinâmicas',
    comment:
      'Passe o mouse sobre o ponto. O método getAlignStyle retorna um objeto de estilo com as propriedades CSS right e top definidas (fixadas na borda direita e na posição y)',
    component: DynamicProgrammaticRightEdgeHints,
    componentName: 'DynamicProgrammaticRightEdgeHints'
  },
  {
    name: 'Dicas de Borda Complexas Dinâmicas',
    comment:
      'Passe o mouse sobre o ponto. A dica usa flex, CSS para mostrar a dica e poste do ponto até a borda externa do gráfico (CSS para valores de margem).',
    component: DynamicComplexEdgeHints,
    componentName: 'DynamicComplexEdgeHints'
  },
  {
    name: 'Mira Estática',
    component: StaticCrosshair,
    componentName: 'StaticCrosshair'
  },
  {
    name: 'Mira Dinâmica',
    comment: 'Mova o mouse sobre o gráfico para ver o ponto.',
    component: DynamicCrosshair,
    componentName: 'DynamicCrosshair'
  },
  {
    name: 'Mira Dinâmica Scatterplot',
    comment: 'Mova o mouse sobre o gráfico para ver o ponto.',
    component: DynamicCrosshairScatterplot,
    componentName: 'DynamicCrosshairScatterplot'
  }
];
/* eslint-enable max-len */
const DECORATIVE_AXES = [
  {
    name: 'Eixos Diagonais',
    component: DecorativeAxisCrissCross,
    componentName: 'DecorativeAxisCrissCross'
  },
  {
    name: 'Coordenadas Paralelas',
    component: ParallelCoordinatesExample,
    componentName: 'ParallelCoordinatesExample'
  }
];

function AxesShowcase(props) {
  return (
    <article id="axes">
      <Row type="flex" align="top" gutter={16}>
        {AXES.map(mapSection)}

        {TOOLTIPS.map(mapSection)}

        {DECORATIVE_AXES.map(mapSection)}
      </Row>
    </article>
  );
}

export default AxesShowcase;
