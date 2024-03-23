import { BrowserRouter } from "react-router-dom";
import Routes from './routes/index';

function App () {
  return (
      <BrowserRouter>
        {/* 将routers中路由导出 */}
        <Routes />
      </BrowserRouter>
 )
};

export default App;
