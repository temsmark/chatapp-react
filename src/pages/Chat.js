import React from 'react';
import {useParams} from "react-router";
import {Card,Button} from 'react-bootstrap'

const Chat = () => {
    let {username} = useParams();

    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>

                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>

                    <textarea placeholder="Enter" style="height:"/>

                </Card.Body>
            </Card>
        </div>
    );
}


export default Chat;
