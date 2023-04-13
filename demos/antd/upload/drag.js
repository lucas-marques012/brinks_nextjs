import { Upload, Icon, message } from 'antd';

const Dragger = Upload.Dragger;

const props = {
  name: 'file',
  multiple: true,
  action: '//jsonplaceholder.typicode.com/posts/',
  onChange(info) {
    const status = info.file.status;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} upload realizado com sucesso!`);
    } else if (status === 'error') {
      message.error(`${info.file.name} upload falhou!`);
    }
  }
};

const Component = () => (
  <Dragger {...props}>
    <p className="ant-upload-drag-icon">
      <Icon type="inbox" />
    </p>
    <p className="ant-upload-text">Clique aqui ou arraste um arquivo para realizar o upload!</p>
    <p className="ant-upload-hint">
      Pertimido upload de um ou mais arquivos, seguindo templates em Excel que podem ser baixados no painel de configurações.
    </p>
  </Dragger>
);
export default Component;
