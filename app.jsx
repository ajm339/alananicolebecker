var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

App = React.createClass({
	getInitialState () {
    return {
      windowHeight: window.innerHeight
    };
  },
  handleResize (e) {
    this.setState({windowHeight: window.innerHeight});
  },
  componentWillMount () {
    window.addEventListener('resize', this.handleResize);
  },
  componentWillUnmount () {
    window.removeEventListener('resize', this.handleResize);
  },
  componentDidMount () {
  	ReactDOM.render(<StoryPart1 />, document.getElementById("content") );
  },
	render() {
		return (
			<div id="background" style={{minHeight:"" + (this.state.windowHeight) }}>
				<div id="content"></div>
			</div>
		);
	}
});

Login = React.createClass({
	handleSubmit (e) {
		e.preventDefault();
		const answer = ReactDOM.findDOMNode(this.refs.loginAnswer).value.trim().toLowerCase();
		if ( answer.indexOf("stella") == -1 ) {
			alert("Are you kidding me? Really?...");
			ReactDOM.findDOMNode(this.refs.loginAnswer).value = "";
		} else {
			ReactDOM.unmountComponentAtNode( document.getElementById("content") );
			ReactDOM.render(<StoryPart1 />, document.getElementById("content") );
		}
	},
	render(){
		return (
			<div className="row">
				<div className="col-xs-12 col-sm-6 col-sm-offset-3">
					<div className="transparent-background">
						<h1 className="text-center">Hello Alana</h1>
						<form onSubmit={this.handleSubmit}>
							<h3 className="text-center">Where did we go on our first date?</h3>
							<div className="spacing">
								<input className="block-center" type="text" placeholder="Answer here" ref="loginAnswer" />
							</div>
							<div className="spacing">
								<button className="btn purple block-center" type="submit">Submit</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
});

StoryPart1 = React.createClass({
	handleClick () {
		alert('click');
	},
	render(){
		return (
			<div className="row">
				<div className="col-xs-12 col-sm-6 col-sm-offset-3">
					<div className="transparent-background">
						<h3 className="text-center">1 year and 4 days ago, you received these text from me...</h3>

						<div className="spacing">
							<a href="#text1Modal"><img src="/images/text1.png" alt="first text" className="block-center max-width-80" /></a>
						</div>
						<div className="spacing">
							<a href="#text2Modal"><img src="/images/text2.png" alt="first text" className="block-center max-width-80" /></a>
						</div>

						<h3 className="text-center">...yet, a mere 4 days later, you (for some odd reason) agreed to go on a date with me.</h3>
						<div className="spacing">
							<button className="btn purple block-center" onClick={this.handleClick}>Next</button>
						</div>
					</div>
				</div>



				<div id="text1Modal" className="modalDialog">
					<div>
						<a href="#close" title="Close" className="close">X</a>
						<img src="/images/text1.png" alt="first text" className="block-center max-width-100" />
					</div>
				</div>

				<div id="text2Modal" className="modalDialog">
					<div>
						<a href="#close" title="Close" className="close">X</a>
						<img src="/images/text2.png" alt="first text" className="block-center max-width-100" />
					</div>
				</div>

			</div>
		);
	}
});

