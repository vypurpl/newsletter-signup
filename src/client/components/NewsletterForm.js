import React, {Component} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';

export default class NewsletterForm extends Component {

    constructor(props) {
        super(props);

        this.handleSubscribe = this.handleSubscribe.bind(this);
    }

    handleSubscribe(event) {
        event.preventDefault();

        const data = new FormData(event.target);
        let jsonStr = {email: data.get('email')};

        if (data.get('confirm')) {
            fetch('/subscribe', {
                method: 'POST',
                body: JSON.stringify(jsonStr),
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                },
            })
            .then(response => {
                if (response.ok) {
                    response.json();
                } else {
                    console.log('error');
                }
            })
            .then(data => {
                console.log(data);
            })
            .catch(err => console.error(err));
        }
    }

    render() {
        return (
            <Form onSubmit={this.handleSubscribe}>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input required type="email" name="email" id="email" placeholder="fortytwo@meaningoflife.com" />
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" name="confirm" id="confirm"/>{' '}
                        I agree to terms and conditions
                    </Label>
                </FormGroup>
                <Button>Submit</Button>
            </Form>
        )
    }
}