import { Button, Icon, Input, Table } from 'antd';

import { Component } from 'react';
const data = [
  {
    key: '1',
    name: 'Jose Marconato',
    type: 'CHG',
    status: 'Disponível'
  },
  {
    key: '2',
    name: 'Carlos Albuquerque',
    type: 'VMOT',
    status: 'Disponível'
  },
  {
    key: '3',
    name: 'Ricardo Ferreira',
    type: 'VCF1',
    status: 'Indisponível'
  },
  {
    key: '4',
    name: 'Marco Simoes',
    type: 'VCF_2',
    status: 'Disponível'
  }
];

class App extends Component {
  state = {
    searchText: ''
  };

  handleSearch = (selectedKeys, confirm) => () => {
    confirm();
    this.setState({ searchText: selectedKeys[0] });
  };

  handleReset = clearFilters => () => {
    clearFilters();
    this.setState({ searchText: '' });
  };

  render() {
    const columns = [
      {
        title: 'Nome',
        dataIndex: 'name',
        key: 'name',
        filterDropdown: ({
          setSelectedKeys,
          selectedKeys,
          confirm,
          clearFilters
        }) => (
          <div className="custom-filter-dropdown">
            <Input
              ref={ele => (this.searchInput = ele)}
              placeholder="Procurar nome"
              value={selectedKeys[0]}
              onChange={e =>
                setSelectedKeys(e.target.value ? [e.target.value] : [])
              }
              onPressEnter={this.handleSearch(selectedKeys, confirm)}
            />
            <Button
              type="primary"
              onClick={this.handleSearch(selectedKeys, confirm)}
            >
              Buscar
            </Button>
            <Button onClick={this.handleReset(clearFilters)}>Reset</Button>
          </div>
        ),
        filterIcon: filtered => (
          <Icon
            type="smile-o"
            style={{ color: filtered ? '#108ee9' : '#aaa' }}
          />
        ),
        onFilter: (value, record) =>
          record.name.toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: visible => {
          if (visible) {
            setTimeout(() => {
              this.searchInput.focus();
            });
          }
        },
        render: text => {
          const { searchText } = this.state;
          return searchText ? (
            <span>
              {text
                .split(new RegExp(`(?<=${searchText})|(?=${searchText})`, 'i'))
                .map(
                  (fragment, i) =>
                    fragment.toLowerCase() === searchText.toLowerCase() ? (
                      <span key={i} className="highlight">
                        {fragment}
                      </span>
                    ) : (
                      fragment
                    ) // eslint-disable-line
                )}
            </span>
          ) : (
            text
          );
        }
      },
      {
        title: 'Categoria',
        dataIndex: 'type',
        key: 'type'
      },
      {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        filters: [
          {
            text: 'Disponível',
            value: 'Disponível'
          },
          {
            text: 'Indisponível',
            value: 'Indisponível'
          }
        ],
        onFilter: (value, record) => record.address.indexOf(value) === 0
      }
    ];
    return <Table columns={columns} dataSource={data} />;
  }
}

export default App;
