import { Component } from 'react';
import SearchableDiscreteColorLegend from 'react-vis/dist/legends/searchable-discrete-color-legend';
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
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { title: 'Demanda', color: '#3a3' },
        { title: 'Recursos', color: '#fc0' },
        { title: 'Horas-extras', color: '#337' },
        { title: 'Horas-ociosas', color: '#f93' },
        { title: 'Demanda não atendida', color: '#337' },

      ],
      searchText: ''
    };
  }

  _clickHandler = item => {
    const { items } = this.state;
    item.disabled = !item.disabled;
    this.setState({ items });
  };

  _searchChangeHandler = searchText => {
    this.setState({ searchText });
  };

  render() {
    const { items, searchText } = this.state;
    return (
      <SearchableDiscreteColorLegend
        onSearchChange={this._searchChangeHandler}
        searchText={searchText}
        onItemClick={this._clickHandler}
        items={items}
      />
    );
  }
}
