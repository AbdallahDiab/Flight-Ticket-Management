import { FC, ReactNode } from "react";
import { useLocation } from "react-router-dom";
import "../../App.scss";
import { Layout, Navbar } from "@components";
const AppLayout: FC<{ children: ReactNode }> = ({ children }) => {
  const { Header, Content } = Layout;
  const routesWithoutLayout = ["/login", "/register"];
  const location = useLocation();
  const showLayout = !routesWithoutLayout.includes(location.pathname);

  if (showLayout) {
    return (
      <>
        <Layout className="layout">
          <Header className="header">
            <Navbar />
          </Header>
          <Content className="content">{children}</Content>
        </Layout>
      </>
    );
  }
  return children;
};

export default AppLayout;
