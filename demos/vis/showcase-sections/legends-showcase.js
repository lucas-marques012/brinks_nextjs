import { Row } from 'antd';
import { fullMapSection } from '../showcase-components/showcase-utils';
import { showCase } from '../index';

const {
  ContinuousColorLegendExample,
  ContinuousSizeLegendExample,
  HorizontalDiscreteColorLegendExample,
  HorizontalDiscreteCustomPalette,
  SearchableDiscreteColorLegendExample,
  VerticalDiscreteColorLegendExample
} = showCase;
/* eslint-disable max-len */
const DISCRETE_LEGENDS = [
  {
    name: 'Legenda vertical',
    component: VerticalDiscreteColorLegendExample,
    componentName: 'VerticalDiscreteColorLegendExample'
  },
  {
    name: 'Legenda horizontal com estilos de traço',
    component: HorizontalDiscreteColorLegendExample,
    componentName: 'HorizontalDiscreteColorLegendExample'
  },
  {
    name: 'Paleta personalizada com interação de foco',
    component: HorizontalDiscreteCustomPalette,
    componentName: 'HorizontalDiscreteCustomPalette'
  },
  {
    name: 'Legenda de cores discreta com busca',
    component: SearchableDiscreteColorLegendExample,
    componentName: 'SearchableDiscreteColorLegendExample'
  }
];
/* eslint-enable max-len */

const CONTINOUS_COLOR_LEGEND = [
  {
    name: 'Legenda padrão',
    component: ContinuousColorLegendExample,
    componentName: 'ContinuousColorLegendExample'
  }
];

const CONTINOUS_SIZE_LEGEND = [
  {
    name: 'Legenda padrão',
    component: ContinuousSizeLegendExample,
    componentName: 'ContinuousSizeLegendExample'
  }
];

function LegendsExample(props) {
  return (
    <article id="legends">
      <Row type="flex" align="top" gutter={16}>
        {DISCRETE_LEGENDS.map(fullMapSection)}

        {CONTINOUS_COLOR_LEGEND.map(fullMapSection)}

        {CONTINOUS_SIZE_LEGEND.map(fullMapSection)}
      </Row>
    </article>
  );
}

export default LegendsExample;
