import React, { Component } from 'react';

class Footer extends Component {
	  	
	
	
  render() {
    return (
		<footer>
			<div class="container">
				<ul>
					<li>Follow us:</li>
					<li><a href="#"><span class="icon-twitter"></span></a></li>
					<li><a href="#"><span class="icon-facebook2"></span></a></li>
					<li><a href="#"><span class="icon-instagram"></span></a></li>
					<li><a href="#"><span class="icon-linkedin"></span></a></li>
				</ul>

				<ul>
					<li>&copy; Untitled</li><li>Design: <a href="#">HTML5</a></li>
				</ul>
			</div>

		</footer>
    );
  }
}

export default Footer;
