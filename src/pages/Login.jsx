import React, { Component } from "react";
import { Link } from "react-router-dom";
import { signin,signInWithGoogle,signInWithGitHub } from "../helpers/auth";

export default class Login extends Component {
	constructor(props) {
        super(props);
        this.state = {
            error: null,
            email: '',
            password: '',
        };

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.googleSignIn = this.googleSignIn.bind(this);
		this.githubSignIn = this.githubSignIn.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

	async handleSubmit(event) {
		event.preventDefault();
		this.setState({ error: ''});
		try {
			await signin(this.state.email, this.state.password);
		} catch (error) {
			this.setState({ error: error.message });
		}
	}

	async googleSignIn() {
		try {
			await signInWithGoogle();
		} catch (error) {
			this.setState({ error: error.message });
		}
	}

	async githubSignIn() {
    	try {
      		await signInWithGitHub();
    	} catch (error) {
      		this.setState({ error: error.message });
    	}
  	}


	render() {
		return (
			<div className="container">
				<form
				className="mt-5 py-5 px-5"
				autoComplete="off"
				onSubmit={this.handleSubmit}>
					<h1>Bienvenido a la <Link className="title ml-2" to = "/">App</Link> </h1>
					<p className="lead">Por favor ingrese sus credenciales.</p>
					<div className="form-group">
						<input
						className="form-control"
						placeholder="Email"
						name="email"
						type="email"
						onChange={this.handleChange}
						value={this.state.email}></input>
					</div>
					<div className="form-group">
					<input
						className="form-control"
						placeholder="Password"
						name="password"
						type="password"
						onChange={this.handleChange}
						value={this.state.password}></input>
					</div>
                    <div className="form-group">
                        {this.state.error ? <p>{this.state.error}</p> : null}
                        <button className="btn btn-dark px-5" type="submit">Ingresar</button>
                    </div>
					<br/>
					<p>Tambien puede ingresar con alguno de estos servicios</p>
          			<button className="btn mr-3 text-black" onClick={this.googleSignIn}>
            			Ingresar con Google
          			</button>
					<button className="btn mr-3 text-black" type="button" onClick={this.githubSignIn}>
						Ingresar con GitHub
          			</button>
					<hr />
				</form>
			</div>
		);
	}
}