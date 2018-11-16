import { Button, Icon, Input, Layout, Menu } from "antd";
import * as React from "react";
import {
    HashRouter,
    NavLink,
    Route,
} from "react-router-dom";
import Doc from "./doc";

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
                                title={<span><Icon type="stock"/><span>Data</span></span>}
                            >
                                <Menu.Item key="6"><Icon type="pie-chart" />Pie Chart</Menu.Item>
                                <Menu.Item key="7"><Icon type="bar-chart" />Bar Chart</Menu.Item>
                                <Menu.Item key="8"><Icon type="dot-chart" />Scatterplot</Menu.Item>
                                <Menu.Item key="9"><Icon type="line-chart" />Line Chart</Menu.Item>
                                <Menu.Item key="10"><Icon type="radar-chart" />Radar Chart</Menu.Item>
                            </SubMenu>
                            <Menu.Item key="11">
                                <Icon type="setting" />
                                <span>Options</span>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Content style={{ margin: "16px" }}>
                            <Doc name="hello" type="hello">

                            </Doc>
                        </Content>
                    </Layout>
                </Layout>
        );
    }
}
