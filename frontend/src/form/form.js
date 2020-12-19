import React from 'react'
import axios from 'axios'
import './form.css'
import Button from 'react-bootstrap/Button'

const defaultURL = "https://youtu.be/dQw4w9WgXcQ"

class Form extends React.Component {
    constructor(){
        super()
        this.state = {
            url: '', 
            result: '', 
            isLoading: false
        }
    }

    componentDidMount() {
        this.setState({});
    }

    handleChange = event => {
        this.setState({
            url: event.target.value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({
            isLoading: true
        })
        const {url} = this.state
        const URL = {url}
        axios.post(`http://localhost:4000/download`, URL)
            .then((response) => {
                console.log(response.data)
                this.setState({
                    result: response.data,
                    isLoading: false
                })
            }).catch(err => {console.log(err)})
    }

    render() {
        return (
            <div className="form">
                <header className = "form-header">
                    <label className = "form-form">
                        <input type="url" placeholder = {defaultURL} onChange={this.handleChange}></input>
                    </label>
                    <Button variant="primary" disabled={this.state.isLoading} as="input" onClick={!this.state.isLoading ? this.handleSubmit: null} type="submit" value="Submit" />{' '}
                    <p style={{color: 'black', position: 'absolute', bottom: 10, fontSize: 10}} >
                        {this.state.result}
                    </p>
                </header>
            </div>
        )
    }
}

export default Form