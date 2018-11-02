import { Button, Icon, Input, Layout, Menu } from "antd";
import * as React from "react";
import {
    HashRouter,
    NavLink,
    Route,
} from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
const Search = Input.Search;

export default class App extends React.Component {
    public state = {
        collapsed: false,
    };

    public onCollapse = (collapsed: boolean) => {
        this.setState({ collapsed });
    }

    public searchRequest(value: string) {
        // TODO: send AJAX request to server for a list of documents
        // Trigger a re-render on the client side or do it in the server
        // again?
    }

    public render() {
        return (
                <Layout style={{ minHeight: "100vh" }}>
                    <Sider
                        collapsible
                        collapsed={this.state.collapsed}
                        onCollapse={this.onCollapse}
                        theme="light"
                    >
                        <Search
                            placeholder="input search text"
                            onSearch={this.searchRequest}
                            style={{ padding: 5, width: "100%" }}
                        />
                        <Menu theme="light" defaultSelectedKeys={["1"]} mode="inline">
                            <Menu.Item key="1">
                                <Icon type="pie-chart" />
                                <span>File</span>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Icon type="desktop" />
                                <span>Documents</span>
                            </Menu.Item>
                            <SubMenu
                                key="sub1"
                                title={<span><Icon type="user" /><span>User</span></span>}
                            >
                                <Menu.Item key="3">Tom</Menu.Item>
                                <Menu.Item key="4">Bill</Menu.Item>
                                <Menu.Item key="5">Alex</Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub2"
                                title={<span><Icon type="team" /><span>Team</span></span>}
                            >
                                <Menu.Item key="6">Team 1</Menu.Item>
                                <Menu.Item key="8">Team 2</Menu.Item>
                            </SubMenu>
                            <Menu.Item key="9">
                                <Icon type="file" />
                                <span>File</span>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Content style={{ margin: "0 16px" }}>
                        <p>Serialises a simple json object with name.</p>
                        </Content>
                    </Layout>
                </Layout>
        );
    }
}
