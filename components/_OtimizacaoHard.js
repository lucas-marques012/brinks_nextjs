import { Card, Divider } from 'antd';

import { Component } from 'react';
import Drag from '../demos/antd/upload/drag';
import ValidateOther from '../demos/antd/form/validate-other';
import Formatter from '../demos/antd/input-number/formatter';



class Demo extends Component {
    render() {
        return (
            <Card bodyStyle={{ padding: 0 }} id="components-input-demo">

                <Divider orientation="left">
                    <small>Upload de arquivos para atualizar tabelas da base de dados</small>
                </Divider>
                <div className="p-0">
                    <Drag />
                </div>

                <Divider orientation="left">
                    <small>Fatores de penalização</small>
                </Divider>
                <div className="p-0">
                    <Formatter />
                </div>

                <Divider orientation="left">
                    <small>Painel de controle da otimização</small>
                </Divider>
                <div className="p-0">
                    <ValidateOther />
                </div>


            </Card>
        );
  }
}

export default Demo;
