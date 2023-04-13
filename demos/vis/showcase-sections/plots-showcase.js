import { Card, Row } from 'antd';

import PropTypes from 'prop-types';
import { mapSection } from '../showcase-components/showcase-utils';
import { showCase } from '../index';

const {
  AreaChart,
  AreaChartElevated,
  BarChart,
  BigBaseBarChart,
  ClusteredStackedVerticalBarChart,
  ContourSeriesExample,
  ComplexChart,
  CustomScales,
  CustomSVGExample,
  CustomSVGAllTheMarks,
  CustomSVGRootLevel,
  DifferenceChart,
  EmptyChart,
  FauxScatterplotChart,
  GridLinesChart,
  HeatmapChart,
  HexHeatmap,
  HexbinSizeExample,
  Histogram,
  LabeledHeatmap,
  LineChart,
  LineChartManyColors,
  LineChartWithStyle,
  LineChartCanvas,
  LineSeriesCanvasNearestXYExample,
  LineMarkChart,
  MixedStackedChart,
  StackedVerticalBarChart,
  StackedHorizontalBarChart,
  StackedHistogram,
  ScatterplotChart,
  ScatterplotCanvas,
  WhiskerChart,
  WidthHeightMarginChart
} = showCase;

const PLOTS = [
  {
    component: LineChart,
    componentName: 'Gráfico Linear',
    name: 'Gráfico Ilustrativo A',
    sourceLink:
      'https://github.com/uber/react-vis/blob/master/src/plot/series/line-series.js',
    docsLink:
      'http://uber.github.io/react-vis/documentation/series-reference/line-series'
  },
  {
    component: LineMarkChart,
    componentName: 'LineMarkChart',
    name: 'Gráfico Ilustrativo B',
    sourceLink:
      'https://github.com/uber/react-vis/blob/master/src/plot/series/line-mark-series.js',
    docsLink:
      'http://uber.github.io/react-vis/documentation/series-reference/line-mark-series'
  },
  {
    component: LineChartCanvas,
    componentName: 'LineChartCanvas',
    name: 'Gráfico Ilustrativo C'
  },


  {
    component: ScatterplotChart,
    componentName: 'ScatterplotChart',
    name: 'Gráfico Ilustrativo D',
    sourceLink:
      'https://github.com/uber/react-vis/blob/master/src/plot/series/mark-series.js',
    docsLink:
      'http://uber.github.io/react-vis/documentation/series-reference/mark-series'
  },

  {
    component: AreaChart,
    componentName: 'AreaChart',
    name: 'Gráfico Ilustrativo E',
    sourceLink:
      'https://github.com/uber/react-vis/blob/master/src/plot/series/area-series.js'
  },
  {
    component: AreaChartElevated,
    componentName: 'AreaChartElevated',
    name: 'Gráfico Ilustrativo F',
    sourceLink:
      'http://uber.github.io/react-vis/documentation/series-reference/area-series'
  },
  {
    component: BarChart,
    componentName: 'BarChart',
    name: 'Gráfico Ilustrativo G',
    sourceLink:
      'https://github.com/uber/react-vis/blob/master/src/plot/series/bar-series.js',
    docsLink:
      'http://uber.github.io/react-vis/documentation/series-reference/bar-series'
  },
  
];

const BASIC_COMPONENTS = [
  {
    name: 'Custom Size and Margin',
    component: WidthHeightMarginChart,
    componentName: 'WidthHeightMarginChart'
  },
  {
    name: 'Custom scales',
    component: CustomScales,
    componentName: 'CustomScales'
  },
  {
    name: 'Custom GridLines',
    component: GridLinesChart,
    componentName: 'GridLinesChart'
  },
  {
    name: 'Circular Gridlines',
    component: FauxScatterplotChart,
    componentName: 'FauxScatterplotChart',
    sourceLink:
      'https://github.com/uber/react-vis/blob/master/src/plot/circular-grid-lines.js',
    docsLink:
      'http://uber.github.io/react-vis/documentation/api-reference/grids'
  }
];

function PlotsShowcase(props) {
  const { forExample } = props;
  return (
    <article id="plots">
      {!forExample && (
        <Card className="mb-4" title="Gráfico Ilustrativo - Duas Curvas">
          <ComplexChart />
        </Card>
      )}

      <Row type="flex" align="top" gutter={16}>
        {PLOTS.map(mapSection)}
      </Row>

      <Row type="flex" align="top" gutter={16}>
        {BASIC_COMPONENTS.map(mapSection)}
      </Row>
    </article>
  );
}

PlotsShowcase.propTypes = {
  forExample: PropTypes.bool
};

export default PlotsShowcase;
