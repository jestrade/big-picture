import React, { Component } from 'react';

class Contact extends Component {
	  	
	
	
  render() {
    return (      

		<section class="five">
			<div class="container">
				<h2>Say Hello.</h2>
				<p>Lorem ipsum dolor sit amet et sapien sed elementum egestas dolore condimentum.</p>
				
				<form method="post" action="#">
					<div class="form-group">
						<input class="form-control" type="text" name="name" placeholder="Name" />
					</div>
					<div class="form-group">
						<input class="form-control" type="email" name="email" placeholder="Email" /></div>
					<div  class="form-group">
						<textarea class="form-control" name="message" placeholder="Message" rows="6"></textarea></div>
					<div class="form-group">
						<button class="btn btn-primary btn-block" type="submit"  >Send Message</button>
					</div>
				</form>
			</div>
		</section>

    );
  }
}

export default Contact;
