import React, { Component } from 'react';

export class Contacts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            values: {
                host: "smtp.ukr.net",
                port: 25,
                from: "",
                to: "dmitryboltivets@gmail.com",
                subject: "This mail from",
                message: "",
                username: "guestmessage@ukr.net"
            }
        };
    }

    submitForm = async e => {
        e.preventDefault();
        console.log(JSON.stringify(this.state.values))
        await fetch("https://bostonaqua.pythonanywhere.com/api/sendmail", {
            method: "POST",
            body: JSON.stringify(this.state.values),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                return response.json();
            })
            .then(e => {
                console.log(e);
            })
            .catch(error => error)
    }
    handleInputChange = e =>
        this.setState({
            values: { ...this.state.values, [e.target.name]: e.target.value }
        });

    render() {

        return (
            <div className='contacts_comp'>
                <div className='contacts'>
                    <div className='contacts_content_box'>
                        <p>Email: dmitryboltivets@gmail.com</p>
                        <p><a href='https://www.linkedin.com/in/dmitry-boltivets-4bb512192' target='blank'>LinkedIn: https://www.linkedin.com</a></p>
                        <p>Telegram: @annoying_silence</p>
                    </div>
                </div>
                <div className='form_container'>
                    <form onSubmit={this.submitForm}>
                        <input
                            type='email'
                            name='from'
                            placeholder='Write your email'
                            className="form_mail"
                            required
                            value={this.state.values.mail}
                            onChange={this.handleInputChange}
                        />
                        <textarea
                            placeholder='Write your message'
                            name='message'
                            className='form_message'
                            required
                            value={this.state.values.message}
                            onChange={this.handleInputChange}
                        /> <br />
                        <div className='form_button_overlay'>
                            <button type='submit' className='form_button'>Send</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}