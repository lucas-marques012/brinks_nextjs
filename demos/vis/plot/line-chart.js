import {
  FlexibleWidthXYPlot,
  HorizontalGridLines,
  LineSeries,
  LineSeriesCanvas,
  VerticalGridLines,
  XAxis,
  YAxis
} from 'react-vis';

import { Component } from 'react';
import { curveCatmullRom } from 'd3-shape';
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



export default class Example extends Component {
  state = {
    useCanvas: false
  };
  render() {
    const { useCanvas } = this.state;
    const Line = useCanvas ? LineSeriesCanvas : LineSeries;

    return (
      <FlexibleWidthXYPlot height={300}>
        <HorizontalGridLines style={{ strokeWidth: 0.5 }} />
        <VerticalGridLines style={{ strokeWidth: 0.5 }} />
        <XAxis title="Eixo X" position="start" style={{ strokeWidth: 0.5 }} />
        <YAxis title="Eixo Y" style={{ strokeWidth: 0.5 }} />
        <Line
          className="first-series"
          color="#007bff"
          data={[
            { x: 1, y: 3 },
            { x: 2, y: 5 },
            { x: 3, y: 15 },
            { x: 4, y: 12 }
          ]}
        />
        <Line className="second-series" color="#52c41a" data={null} />
        <Line
          className="third-series"
          color="#f5222d"
          curve={'curveMonotoneX'}
          data={[
            { x: 1, y: 10 },
            { x: 2, y: 4 },
            { x: 3, y: 2 },
            { x: 4, y: 15 }
          ]}
          strokeDasharray={useCanvas ? [7, 3] : '7, 3'}
        />
        <Line
          className="fourth-series"
          color="#faad14"
          curve={curveCatmullRom.alpha(0.5)}
          style={{
            // note that this can not be translated to the canvas version
            strokeDasharray: '2 2'
          }}
          data={[
            { x: 1, y: 7 },
            { x: 2, y: 11 },
            { x: 3, y: 9 },
            { x: 4, y: 2 }
          ]}
        />
      </FlexibleWidthXYPlot>
    );
  }
}
