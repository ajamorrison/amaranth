import { Button } from "antd";
import * as React from "react";

export default class App extends React.Component {

    constructor(props: any) {
        super(props);
    }

    public render() {

        return (
            <div>
                <Button id="button" type="primary">Placeholder</Button>
            </div>);
    }
}
