import * as React from "react";
import { Card, Icon } from "semantic-ui-react";

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
            <Card>
                <Card.Content>
                    <Card.Header>Matthew</Card.Header>
                    <Card.Meta>
                        <span className="date">Joined in 2015</span>
                    </Card.Meta>
                    <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Icon name="user" />
                        22 Friends
                    </a>
                </Card.Content>
            </Card>
        );
    }
}
