/* eslint no-console:0 no-alert:0 */
import React from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'



export default class Mailchimp extends React.Component {

    state = {
        name: null,
        email: null,
    }

    _handleChange = e => {
        console.log({
            [`${e.target.name}`]: e.target.value,
        })
        this.setState({
            [`${e.target.name}`]: e.target.value,
        })
    }

    _handleSubmit = e => {
        e.preventDefault()

        console.log('submit', this.state)

        addToMailchimp(this.state.email, this.state)
            .then(({ msg, result }) => {
                console.log('msg', `${result}: ${msg}`)

                if (result !== 'success') {
                    throw msg
                }
                alert(msg)
            })
            .catch(err => {
                console.log('err', err)
                alert(err)
            })
    }

    render() {

        const { children } = this.props;
        return (

                <form onSubmit={this._handleSubmit}>


                    <div className="flex flex-row justify-center sm:justify-start sm:ml-10 pb-6 sm:py-12 sm:w-1/3">

                        <div className="">
                            <input className="bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-gray-200 focus:ring-blue-200 focus:border-blue-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                type="email" onChange={this._handleChange} id="email" name="email" placeholder="E-mail" aria-label="email"/>
                        </div>
                        <div className="">
                            <button className="ml-4 text-white bg-secondary-default border-0 py-2 px-3 focus:outline-none hover:bg-secondary-lighter rounded"
                                type="submit">Suscribirse</button>
                        </div>

                </div>

                </form>

        )
    }
}
