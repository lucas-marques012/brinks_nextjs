import {
  FlexibleWidthXYPlot,
  HorizontalGridLines,
  LineSeries,
  VerticalGridLines,
  XAxis,
  YAxis
} from 'react-vis';

import { Component } from 'react';
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
  getRandomData() {
    const randomYData = [...new Array(10)].map(() =>
      Math.round(Math.random() * 40)
    );
    return randomYData.map((val, idx) => {
      return { x: idx, y: val };
    });
  }

  render() {
    const firstData = this.getRandomData();
    const secondData = this.getRandomData();
    return (
      <div style={{ display: 'flex' }}>
        <FlexibleWidthXYPlot height={300}>
          <HorizontalGridLines />
          <VerticalGridLines />
          <XAxis title="Eixo X" />
          <YAxis title="Eixo Y" />
          <LineSeries
            className="first-series"
            color="#007bff"
            data={firstData}
          />
          <LineSeries
            className="second-series"
            color="#52c41a"
            data={secondData}
          />
        </FlexibleWidthXYPlot>
        <FlexibleWidthXYPlot yPadding={60} height={300}>
          <HorizontalGridLines />
          <VerticalGridLines />
          <XAxis title="Eixo X" />
          <YAxis title="Eixo Y" />
          <LineSeries
            className="first-series"
            color="#007bff"
            data={firstData}
          />
          <LineSeries
            className="second-series"
            color="#52c41a"
            data={secondData}
          />
        </FlexibleWidthXYPlot>
      </div>
    );
  }
}
