import React, { Component } from 'react';
import './Home.css';
import Image from '../Image/Image';
import Random from '../Random/Random';
import Input from '../Input/Input';

export class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			img: '',
			breed: '',
			breedlist: [],
			match: '',
			found: false,
		};
	}

	componentDidMount() {
		if (this.props.homedisp.display === true) {
			const home = document.querySelectorAll('#home');
			home[0].setAttribute('class', 'home');
		}

		fetch('https://dog.ceo/api/breeds/image/random/1')
			.then((res) => res.json())
			.then((data) => {
				let str = data.message[0].split('/')[4];
				this.setState({ img: data.message, breed: str });
			});

		fetch('https://dog.ceo/api/breeds/list')
			.then((res) => res.json())
			.then((data) => {
				data.message.map((item) => {
					let breeditem = this.state.breedlist.concat(item);
					this.setState({ breedlist: breeditem });
				});
			});
	}

	onButtonClick = () => {
		console.log('Button Clicked');
		fetch('https://dog.ceo/api/breeds/image/random/1')
			.then((res) => res.json())
			.then((data) => {
				console.log(data.message);
				let str = data.message[0].split('/')[4];
				this.setState({ img: data.message, breed: str });
				document.querySelector('#error').innerHTML = '';
			});
	};

	onSubmit = (e) => {
		e.preventDefault();
		let breed = document.querySelector('#breed-input').value.toLowerCase();
		if (breed !== '') {
			var flag = false;
			this.state.breedlist.map((item) => {
				if (item.match(breed) !== null && flag === false) {
					let matcharr = item;
					flag = true;

					this.setState({ match: matcharr }, () => {
						console.log(this.state.match);
						fetch(`https://dog.ceo/api/breed/${this.state.match}/images/random`)
							.then((res) => res.json())
							.then((data) => {
								let str = data.message[0].split('/')[4];
								this.setState({ img: data.message, breed: str });
								document.querySelector('#error').innerHTML = '';
							});
					});
				}
			});
		}
		if (flag === false) {
			document.querySelector('#error').innerHTML = 'Result not found';
		}
	};

	render() {
		return (
			<div id="home" className="home-none">
				<Input onSubmit={this.onSubmit} />
				<div className="error-div">
					<p id="error"></p>
				</div>
				<div className="image-compo">
					<p>{this.state.breed || this.state.match}</p>
					{this.state.img && <Image img={this.state.img} />}
					<Random onButtonClick={this.onButtonClick} />
				</div>
			</div>
		);
	}
}

export default Home;
