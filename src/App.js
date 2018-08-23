import React, { Component } from 'react';
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <main>
	  
		<header>
			<h1>Big Picture</h1>
			<nav>
				<ul>
					<li><a href="#intro">Intro</a></li>
					<li><a href="#one">What I Do</a></li>
					<li><a href="#two">Who I Am</a></li>
					<li><a href="#work">My Work</a></li>
					<li><a href="#contact">Contact</a></li>
				</ul>
			</nav>
		</header>

		<section class="one">
			<div class="container">
				<h2>Hey.</h2>
				<p>Welcome to <strong>Big Picture</strong> a responsive site template designed
				by <a href="#">HTML5</a>, built on <a href="#">Builder</a>,
				and released for free under the <a href="#">Creative Commons Attribution license</a>.</p>
			</div>	
		</section>

		<section class="two">
			<div class="container">
				<h2>What I Do</h2>
				<p>Lorem ipsum dolor sit amet et sapien sed elementum egestas dolore condimentum.
				Fusce blandit ultrices sapien, in accumsan orci rhoncus eu. Sed sodales venenatis arcu,
				id varius justo euismod in. Curabitur egestas consectetur magna.</p>
			</div>
			<a href="#two">Next</a>
		</section>

		<section class="three">
			<div class="container">
				<h2>Who I Am</h2>
				<p>Lorem ipsum dolor sit amet et sapien sed elementum egestas dolore condimentum.
				Fusce blandit ultrices sapien, in accumsan orci rhoncus eu. Sed sodales venenatis arcu,
				id varius justo euismod in. Curabitur egestas consectetur magna.</p>
			</div>
			<a href="#work">Next</a>
		</section>

		<section class="four">
			<div class="container">
				<h2>My Work</h2>
				<p>Lorem ipsum dolor sit amet et sapien sed elementum egestas dolore condimentum.
				Fusce blandit ultrices sapien, in accumsan orci rhoncus eu. Sed sodales venenatis
				arcu, id varius justo euismod in. Curabitur egestas consectetur magna vitae.</p>
			

				<ul>
					<li>
						<a href="https://dummyimage.com/400x282/000000/fff"><img src="https://dummyimage.com/400x282/000000/fff" title="The Anonymous Red" alt="" /></a>
					</li>
					<li>
						<a href="https://dummyimage.com/400x282/000000/fff"><img src="https://dummyimage.com/400x282/000000/fff" title="Airchitecture II" alt="" /></a>
					</li>
					<li>
						<a href="https://dummyimage.com/400x282/000000/fff"><img src="https://dummyimage.com/400x282/000000/fff" title="Air Lounge" alt="" /></a>
					</li>
					<li>
						<a href="https://dummyimage.com/400x282/000000/fff"><img src="https://dummyimage.com/400x282/000000/fff" title="Carry on" alt="" /></a>
					</li>
					<li>
						<a href="https://dummyimage.com/400x282/000000/fff"><img src="https://dummyimage.com/400x282/000000/fff" title="The sparkling shell" alt="" /></a>
					</li>
					<li>
						<a href="https://dummyimage.com/400x282/000000/fff"><img src="https://dummyimage.com/400x282/000000/fff" title="Bent IX" alt="" /></a>
					</li>
					<li>
						<a href="https://dummyimage.com/400x282/000000/fff"><img src="https://dummyimage.com/400x282/000000/fff" title="Bent IX" alt="" /></a>
					</li>
				</ul>

			</div>
		</section>

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
	  </main>
    );
  }
}

export default App;
