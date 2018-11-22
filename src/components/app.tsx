import * as React from "react";
import { Button, Header, Icon, Input, Menu, Segment, Sidebar } from "semantic-ui-react";
import Doc from "./doc";
import ListView from "./listview";

export default class App extends React.Component {

    public state = {
        visible: true,
    };

    public closeServer() {
        // TODO: Impliment handling for killing server process remotely.
    }
    public toggleSidebar = () => this.setState({ visible: !this.state.visible });

    public searchRequest(value: string) {
        // TODO: send AJAX request to server for a list of documents
        // Trigger a re-render on the client side or do it in the server
        // again?
    }

    public render() {

        const { visible } = this.state;

        return (
            <div>
                <Button.Group style={{padding: 10}}>
                    <Button basic onClick={this.toggleSidebar} icon>
                        <Icon name="sidebar" />
                    </Button>
                </Button.Group>

                <Sidebar.Pushable as={Segment}>
                    <Sidebar
                        as={Menu}
                        animation="push"
                        icon="labeled"
                        vertical
                        visible={visible}
                        width="wide"
                        style={{padding: 5}}
                    >
                        <Header as="h3">Amaranthus</Header>
                        <Input fluid icon="search" placeholder="Search..." />
                    </Sidebar>

                    <Sidebar.Pusher>
                        <Segment basic>
                            <Header as="h3">Application Content</Header>
                            <ListView>


                            </ListView>
                        </Segment>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </div>
        );
    }
}
