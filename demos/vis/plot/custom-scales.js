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

export default function Example(props) {
  return (
    <FlexibleWidthXYPlot xType="linear" height={300}>
      <HorizontalGridLines style={{ strokeWidth: 0.5 }} />
      <VerticalGridLines style={{ strokeWidth: 0.5 }} />
      <XAxis title="Eixo X" style={{ strokeWidth: 0.5 }} />
      <YAxis title="Eixo Y" style={{ strokeWidth: 0.5 }} />
      <LineSeries
        color="#007bff"
        data={[
          { x: 1, y: 3 },
          { x: 2, y: 5 },
          { x: 3, y: 15 },
          { x: 4, y: 12 }
        ]}
      />
      <LineSeries color="#f5222d" data={null} />
      <LineSeries
        color="#52c41a"
        data={[
          { x: 1, y: 10 },
          { x: 2, y: 4 },
          { x: 4, y: 2 },
          { x: 5, y: 15 }
        ]}
      />
    </FlexibleWidthXYPlot>
  );
}
