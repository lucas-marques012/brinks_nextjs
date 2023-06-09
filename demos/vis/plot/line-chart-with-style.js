// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

import {
  FlexibleWidthXYPlot,
  HorizontalGridLines,
  LineSeries,
  VerticalGridLines,
  XAxis,
  YAxis
} from 'react-vis';

import { curveCatmullRom } from 'd3-shape';

export default function Example(props) {
  return (
    <FlexibleWidthXYPlot height={300}>
      <HorizontalGridLines style={{ stroke: '#B7E9ED', strokeWidth: 0.5 }} />
      <VerticalGridLines style={{ stroke: '#B7E9ED', strokeWidth: 0.5 }} />
      <XAxis
        title="Eixo X"
        style={{
          strokeWidth: 0.5,
          line: { stroke: '#ADDDE1' },
          ticks: { stroke: '#ADDDE1' },
          text: { stroke: 'none', fill: '#6b6b76', fontWeight: 600 }
        }}
      />
      <YAxis title="Eixo Y" style={{ strokeWidth: 0.5 }} />
      <LineSeries
        className="first-series"
        color="#007bff"
        data={[
          { x: 1, y: 3 },
          { x: 2, y: 5 },
          { x: 3, y: 15 },
          { x: 4, y: 12 }
        ]}
        style={{
          strokeLinejoin: 'round',
          strokeWidth: 4
        }}
      />
      <LineSeries className="second-series" color="#52c41a" data={null} />
      <LineSeries
        className="third-series"
        color="#f5222d"
        curve={'curveMonotoneX'}
        data={[
          { x: 1, y: 10 },
          { x: 2, y: 4 },
          { x: 3, y: 2 },
          { x: 4, y: 15 }
        ]}
        strokeDasharray="7, 3"
      />
      <LineSeries
        className="fourth-series"
        color="#faad14"
        curve={curveCatmullRom.alpha(0.5)}
        data={[{ x: 1, y: 7 }, { x: 2, y: 11 }, { x: 3, y: 9 }, { x: 4, y: 2 }]}
      />
    </FlexibleWidthXYPlot>
  );
}
