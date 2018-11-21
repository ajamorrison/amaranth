import * as React from "react";
import { Button, Input } from "semantic-ui-react";
import Doc from "./doc";

export default class App extends React.Component {

    public state = {
        collapsed: false,
    };

    public handleClick() {
        // TODO: Impliment handling for killing server process remotely.
    }

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
            <div>
                <Input icon="search" placeholder="Search..." />
                <Button color="red" content="Close Server" icon="close" labelPosition="left" />
                <Doc name="hello" type="string"></Doc>
            </div>
        );
    }
}
