import { Card } from "antd";
import * as React from "react";

/** Displays the content of a single
 * document in the interface.
 */
export default class Doc extends React.Component<{
    name: string,
    type: string,
}, {
    reference: object,
}> {

    constructor(props: any) {
    super(props);
    }

    public render() {
        return (
            <Card
                title="Card title"
                style={{ width: 300 }}
            >
                <p>Lorem Ipsum sit dolar amet.</p>
            </Card>
        );
    }
}
