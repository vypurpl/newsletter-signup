import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
import NewsletterForm from './NewsletterForm';

export default class Banner extends Component {

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <NewsletterForm/>
                    </Col>
                </Row>
            </Container>
        );
    }
}