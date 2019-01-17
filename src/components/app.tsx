import * as React from "react";
import { Button, Header, Icon, Input, Menu, Search, Segment, Sidebar } from "semantic-ui-react";
import AppState from "../server/appState";
import Doc from "./doc";
import ListView from "./listview";
import OmniSearch from "./omniSearch";
import Preloader from "./preloader";

export default class App extends React.Component<
    {
        appState: AppState;
    },
    {
        activeItem: string,
        visible: boolean,
    }> {

    public omni: Input;

    public state = {
        activeItem: "editorials",
        visible: false,
    };

    public closeServer() {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "/?close=true");

        xhr.send(null);

        xhr.onreadystatechange = () => {
            const DONE = 4; // readyState 4 means the request is done.
            const OK = 200; // status 200 is a successful return.
            if (xhr.readyState === DONE) {
                if (xhr.status === OK) {
                    // tslint:disable-next-line:no-console
                    document.getElementById("close-server").innerHTML = "Server Closed";
                } else {
                    // tslint:disable-next-line:no-console
                    console.log("Error: " + xhr.status); // An error occurred during the request.
                }
            }
        };
    }
    public toggleSidebar = () => this.setState({ visible: !this.state.visible });
    public handleMenuClick = (e: React.SyntheticEvent, { name }: any) => this.setState({ activeItem: name });

    public render() {

        const { visible } = this.state;

        return (
            <div>
                <Preloader></Preloader>
                <Menu secondary size="mini">
                    <Menu.Item>
                        <Button basic onClick={this.toggleSidebar} icon labelPosition="right">
                            <Icon name="database" />
                            Configure Dataserver
                        </Button>

                    </Menu.Item>
                    <Menu.Item
                        name="editorials"
                        active={this.state.activeItem === "editorials"}
                        onClick={this.handleMenuClick}>
                        Editorials
                            </Menu.Item>

                    <Menu.Item
                        name="reviews"
                        active={this.state.activeItem === "reviews"}
                        onClick={this.handleMenuClick}>

                        Reviews
                    </Menu.Item>
                    <Menu.Menu position="right">
                        <Menu.Item>
                            <Button id="close-server" size="mini" color={"red"} onClick={this.closeServer}>
                                Close Server
                            </Button>

                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
                <Sidebar.Pushable as={Segment}>
                    <Sidebar
                        as={Menu}
                        animation="push"
                        icon="labeled"
                        vertical
                        width="wide"
                        visible={visible}
                    >
                    </Sidebar>

                    <Sidebar.Pusher style={{ padding: 5, minHeight: "90vh" }}>
                        <h1>Content</h1>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </div>
        );
    }
}
