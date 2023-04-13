//copia base de table/demo.js

import { Card, Divider } from 'antd';

import { Component } from 'react';
import Custom from '../table/custom-filter-panel';
import EditCell from '../table/edit-cell';
import EditRow from '../table/edit-row';
import Expand from '../table/expand';
import ExpandChildren from '../table/expand-children';
import FixedColumns from '../table/fixed-columns';
import FixedColumnsHeader from '../table/fixed-columns-header';
import FixedHeader from '../table/fixed-header';



class TableColaboradores extends Component {
    render() {
        return (
            <Card bodyStyle={{ padding: 0 }} id="components-button-demo">

                <Divider orientation="left">
                    <small>Painel de filtro personalizado</small>
                </Divider>
                <div className="p-4">
                    <Custom />
                </div>

                <Divider orientation="left">
                    <small>Editar célula</small>
                </Divider>
                <div className="p-4">
                    <EditCell />
                </div>

                <Divider orientation="left">
                    <small>Editar linha</small>
                </Divider>
                <div className="p-4">
                    <EditRow />
                </div>

                <Divider orientation="left">
                    <small>Expandir filhos</small>
                </Divider>
                <div className="p-4">
                    <ExpandChildren />
                </div>

                <Divider orientation="left">
                    <small>Expandir</small>
                </Divider>
                <div className="p-4">
                    <Expand />
                </div>

                <Divider orientation="left">
                    <small>Colunas fixas no cabeçalho</small>
                </Divider>
                <div className="p-4">
                    <FixedColumnsHeader />
                </div>

                <Divider orientation="left">
                    <small>Colunas fixas</small>
                </Divider>
                <div className="p-4">
                    <FixedColumns />
                </div>

                <Divider orientation="left">
                    <small>Cabeçalho fixo</small>
                </Divider>
                <div className="p-4">
                    <FixedHeader />
                </div>

            </Card>
        );
    }
}

export default TableColaboradores;
