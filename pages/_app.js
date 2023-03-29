import Nav from "<negocio>/components/Nav";
import { Layout, Avatar, Typography, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "antd/dist/reset.css";
const {Title} = Typography
const { Header, Footer, Content } = Layout;
export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Header style={{ background: "#fff", display: 'flex', alignItems: 'center' }}>
        <Title level={5}>
          Negocio
        </Title>
        <Nav />
        
        <Button type="text">
          <UserOutlined />
        </Button>
      </Header>
      <Content>
        <Component {...pageProps} />
      </Content>
      <Footer>footer</Footer>
    </Layout>
  );
}
