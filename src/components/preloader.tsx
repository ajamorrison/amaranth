import * as React from "react";
import { Progress,  Segment } from "semantic-ui-react";
import Doc from "./doc";
import ListView from "./listview";
import OmniSearch from "./omniSearch";

export default class Preloader extends React.Component {

    public state = {
        activeItem: "editorials",
        visible: false,
    };
    public render() {

        const { visible } = this.state;

        return (
            <div style={{ height: "100vh", width: "100vw", position: "fixed"}}>
                <Segment style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    minWidth: 300,
                }}>
                    <Progress percent={50} attached="top" />
                    Hi, just getting everything sorted...
                </Segment>

            </div>
        );
    }
}
