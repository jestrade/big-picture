import React, { Component } from 'react';
import {create} from './../services/firebase'

class Contact extends Component {
	constructor(){
		super();
		this.state = {
			name: '',
			email:'',
			message: ''
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}
	
	handleChange(evt){
		this.setState({
			[evt.target.name]:evt.target.value
		})
	}
	handleSubmit(evt){
		evt.preventDefault()
		let message = {
			name:this.state.name,
			email:this.state.email,
			message:this.state.message
		}
		create(message)
		this.setState({
			name: '',
			email:'',
			message: ''
		})
		
	}
	
  render() {
    return (      

		<section class="five">
			<div class="container">
				<h2>Say Hello.</h2>
				<p>Lorem ipsum dolor sit amet et sapien sed elementum egestas dolore condimentum.</p>
				
				<form onSubmit={this.handleSubmit}>
					<div class="form-group">
						<input 
							onChange = {this.handleChange}
							class="form-control" 
							type="text" 
							name="name" 
							placeholder="Name" />
					</div>
					<div class="form-group">
						<input 
							onChange = {this.handleChange}
							class="form-control" 
							type="email" 
							name="email" 
							placeholder="Email" />
					</div>
					<div  class="form-group">
						<textarea 
							onChange= {this.handleChange}
							class="form-control" 
							name="message" 
							placeholder="Message" 
							rows="6">
						</textarea>
					</div>
					<div class="form-group">
						<button 
							class="btn btn-primary btn-block" 
							type="submit">Send Message</button>
					</div>
				</form>
			</div>
		</section>

    );
  }
}

export default Contact;
