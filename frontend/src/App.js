import { BrowserRouter } from "react-router-dom";
import Routes from './routes/index';
import { ConfigProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';

function App () {
  return (
    <ConfigProvider locale={zh_CN}>
      <BrowserRouter>
        {/* 将routers中路由导出 */}
        <Routes />
      </BrowserRouter>
    </ConfigProvider>
 )
};

export default App;
