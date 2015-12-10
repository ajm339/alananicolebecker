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
  	ReactDOM.render(<Login />, document.getElementById("content") );
  	var audio = new Audio('/music/from-eden.mp3');
  	audio.play();
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
				<ReactCSSTransitionGroup transitionName="transition" transitionAppear={true} transitionEnterTimeout={500} transitionLeaveTimeout={500} transitionAppearTimeout={1500} >
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
				</ReactCSSTransitionGroup>
			</div>
		);
	}
});

StoryPart1 = React.createClass({
	_handleBack () {
		ReactDOM.unmountComponentAtNode( document.getElementById("content") );
		ReactDOM.render(<Login />, document.getElementById("content") );
	},
	_handleNext () {
		ReactDOM.unmountComponentAtNode( document.getElementById("content") );
		ReactDOM.render(<StoryPart2 />, document.getElementById("content") );
	},
	render(){
		return (
			<div className="row">
				<ReactCSSTransitionGroup transitionName="transition" transitionAppear={true} transitionEnterTimeout={500} transitionLeaveTimeout={500} transitionAppearTimeout={1500} >
					<div className="col-xs-12 col-sm-6 col-sm-offset-3">
						<div className="transparent-background">
							<h3 className="text-center">1 year and 4 days ago, you received these text from me...</h3>

							<div className="spacing">
								<a href="#text1Modal"><img src="/images/text1.png" alt="first text" className="block-center max-width-80" /></a>
							</div>
							<div className="spacing">
								<a href="#text2Modal"><img src="/images/text2.png" alt="second text" className="block-center max-width-80" /></a>
							</div>

							<h3 className="text-center">...yet, a mere 4 days later, you (for some odd reason) agreed to go on a date with me.</h3>

							<div className="row">
								<div className="col-xs-6">
									<button className="btn purple float-right" onClick={this._handleBack}>Back</button>
								</div>
								<div className="col-xs-6">
									<button className="btn purple float-left" onClick={this._handleNext}>Next</button>
								</div>
							</div>

						</div>
					</div>
				</ReactCSSTransitionGroup>



				<div id="text1Modal" className="modalDialog">
					<div>
						<a href="#close" title="Close" className="close">X</a>
						<img src="/images/text1.png" alt="first text" className="block-center max-width-100" />
					</div>
				</div>

				<div id="text2Modal" className="modalDialog">
					<div>
						<a href="#close" title="Close" className="close">X</a>
						<img src="/images/text2.png" alt="second text" className="block-center max-width-100" />
					</div>
				</div>
			</div>
		);
	}
});

StoryPart2 = React.createClass({
	_handleBack () {
		ReactDOM.unmountComponentAtNode( document.getElementById("content") );
		ReactDOM.render(<StoryPart1 />, document.getElementById("content") );
	},
	_handleNext () {
		ReactDOM.unmountComponentAtNode( document.getElementById("content") );
		ReactDOM.render(<StoryPart3 />, document.getElementById("content") );
	},
	render(){
		return (
			<div className="row">
				<ReactCSSTransitionGroup transitionName="transition" transitionAppear={true} transitionEnterTimeout={500} transitionLeaveTimeout={500} transitionAppearTimeout={1500} >
					<div className="col-xs-12 col-sm-6 col-sm-offset-3">
						<div className="transparent-background">
							<h3 className="text-center">Little did I know, just how much my life was going to change that day,</h3>

							<div className="spacing">
								<img src="/images/alana-dog-maine.jpg" alt="Alana Maine Dog" className="block-center max-width-80" id="alanaDogMaineThumbnail" />
							</div>

							<h3 className="text-center">because I had no idea, that I was going to fall in love with the sweetest, most beautiful girl in the world...</h3>
							<div className="row">
								<div className="col-xs-6">
									<button className="btn purple float-right" onClick={this._handleBack}>Back</button>
								</div>
								<div className="col-xs-6">
									<button className="btn purple float-left" onClick={this._handleNext}>Next</button>
								</div>
							</div>
						</div>
					</div>
				</ReactCSSTransitionGroup>
			</div>
		);
	}
});

StoryPart3 = React.createClass({
	_handleBack () {
		ReactDOM.unmountComponentAtNode( document.getElementById("content") );
		ReactDOM.render(<StoryPart2 />, document.getElementById("content") );
	},
	_handleNext () {
		ReactDOM.unmountComponentAtNode( document.getElementById("content") );
		ReactDOM.render(<StoryPart4 />, document.getElementById("content") );
	},
	render(){
		return (
			<div className="row">
				<ReactCSSTransitionGroup transitionName="transition" transitionAppear={true} transitionEnterTimeout={500} transitionLeaveTimeout={500} transitionAppearTimeout={1500} >
					<div className="col-xs-12 col-sm-6 col-sm-offset-3">
						<div className="transparent-background">
							<h3 className="text-center">We've been all over the country together.</h3>
							<h3 className="text-center"><i>From Ithaca</i></h3>

							<div className="spacing">
								<img src="/images/ithaca-hiking.jpg" alt="Alana Alex Hiking" className="block-center max-width-80" id="alanaDogMaineThumbnail" />
							</div>

							<div className="row">
								<div className="col-xs-6">
									<button className="btn purple float-right" onClick={this._handleBack}>Back</button>
								</div>
								<div className="col-xs-6">
									<button className="btn purple float-left" onClick={this._handleNext}>Next</button>
								</div>
							</div>
						</div>
					</div>
				</ReactCSSTransitionGroup>
			</div>
		);
	}
});


StoryPart4 = React.createClass({
	_handleBack () {
		ReactDOM.unmountComponentAtNode( document.getElementById("content") );
		ReactDOM.render(<StoryPart3 />, document.getElementById("content") );
	},
	_handleNext () {
		ReactDOM.unmountComponentAtNode( document.getElementById("content") );
		ReactDOM.render(<StoryPart5 />, document.getElementById("content") );
	},
	render(){
		return (
			<div className="row">
				<ReactCSSTransitionGroup transitionName="transition" transitionAppear={true} transitionEnterTimeout={500} transitionLeaveTimeout={500} transitionAppearTimeout={1500} >
					<div className="col-xs-12 col-sm-6 col-sm-offset-3">
						<div className="transparent-background">
							<h3 className="text-center"><i>To New York City</i></h3>

							<div className="spacing">
								<img src="/images/alana-met.jpg" alt="Alana New York Museum" className="block-center max-width-80" id="alanaDogMaineThumbnail" />
							</div>

							<div className="row">
								<div className="col-xs-6">
									<button className="btn purple float-right" onClick={this._handleBack}>Back</button>
								</div>
								<div className="col-xs-6">
									<button className="btn purple float-left" onClick={this._handleNext}>Next</button>
								</div>
							</div>
						</div>
					</div>
				</ReactCSSTransitionGroup>
			</div>
		);
	}
});

StoryPart5 = React.createClass({
	_handleBack () {
		ReactDOM.unmountComponentAtNode( document.getElementById("content") );
		ReactDOM.render(<StoryPart4 />, document.getElementById("content") );
	},
	_handleNext () {
		ReactDOM.unmountComponentAtNode( document.getElementById("content") );
		ReactDOM.render(<StoryPart6 />, document.getElementById("content") );
	},
	render(){
		return (
			<div className="row">
				<ReactCSSTransitionGroup transitionName="transition" transitionAppear={true} transitionEnterTimeout={500} transitionLeaveTimeout={500} transitionAppearTimeout={1500} >
					<div className="col-xs-12 col-sm-6 col-sm-offset-3">
						<div className="transparent-background">
							<h3 className="text-center"><i>Up to Maine</i></h3>

							<div className="spacing">
								<img src="/images/maine-bar.jpg" alt="Alana Alex Main bar" className="block-center max-width-80" id="alanaDogMaineThumbnail" />
							</div>

							<div className="row">
								<div className="col-xs-6">
									<button className="btn purple float-right" onClick={this._handleBack}>Back</button>
								</div>
								<div className="col-xs-6">
									<button className="btn purple float-left" onClick={this._handleNext}>Next</button>
								</div>
							</div>
						</div>
					</div>
				</ReactCSSTransitionGroup>
			</div>
		);
	}
});

StoryPart6 = React.createClass({
	_handleBack () {
		ReactDOM.unmountComponentAtNode( document.getElementById("content") );
		ReactDOM.render(<StoryPart5 />, document.getElementById("content") );
	},
	_handleNext () {
		ReactDOM.unmountComponentAtNode( document.getElementById("content") );
		ReactDOM.render(<StoryPart6_5 />, document.getElementById("content") );
	},
	render(){
		return (
			<div className="row">
				<ReactCSSTransitionGroup transitionName="transition" transitionAppear={true} transitionEnterTimeout={500} transitionLeaveTimeout={500} transitionAppearTimeout={1500} >
					<div className="col-xs-12 col-sm-6 col-sm-offset-3">
						<div className="transparent-background">
							<h3 className="text-center"><i>Then back down to Pennsylvania</i></h3>

							<div className="spacing">
								<img src="/images/alana-alex-philadelphia.jpg" alt="Alana Alex Philly" className="block-center max-width-80" id="alanaDogMaineThumbnail" />
							</div>

							<div className="row">
								<div className="col-xs-6">
									<button className="btn purple float-right" onClick={this._handleBack}>Back</button>
								</div>
								<div className="col-xs-6">
									<button className="btn purple float-left" onClick={this._handleNext}>Next</button>
								</div>
							</div>
						</div>
					</div>
				</ReactCSSTransitionGroup>
			</div>
		);
	}
});

StoryPart6_5 = React.createClass({
	_handleBack () {
		ReactDOM.unmountComponentAtNode( document.getElementById("content") );
		ReactDOM.render(<StoryPart6 />, document.getElementById("content") );
	},
	_handleNext () {
		ReactDOM.unmountComponentAtNode( document.getElementById("content") );
		ReactDOM.render(<StoryPart7 />, document.getElementById("content") );
	},
	render(){
		return (
			<div className="row">
				<ReactCSSTransitionGroup transitionName="transition" transitionAppear={true} transitionEnterTimeout={500} transitionLeaveTimeout={500} transitionAppearTimeout={1500} >
					<div className="col-xs-12 col-sm-6 col-sm-offset-3">
						<div className="transparent-background">
							<h3 className="text-center"><i>With a stop in Cape Cod</i></h3>

							<div className="spacing">
								<img src="/images/alex-alana-capecod.jpg" alt="Alana Alex CapeCod" className="block-center max-width-80" id="alanaDogMaineThumbnail" />
							</div>

							<div className="row">
								<div className="col-xs-6">
									<button className="btn purple float-right" onClick={this._handleBack}>Back</button>
								</div>
								<div className="col-xs-6">
									<button className="btn purple float-left" onClick={this._handleNext}>Next</button>
								</div>
							</div>
						</div>
					</div>
				</ReactCSSTransitionGroup>
			</div>
		);
	}
});

StoryPart7 = React.createClass({
	_handleBack () {
		ReactDOM.unmountComponentAtNode( document.getElementById("content") );
		ReactDOM.render(<StoryPart6_5 />, document.getElementById("content") );
	},
	_handleNext () {
		ReactDOM.unmountComponentAtNode( document.getElementById("content") );
		ReactDOM.render(<StoryPart8 />, document.getElementById("content") );
	},
	render(){
		return (
			<div className="row">
				<ReactCSSTransitionGroup transitionName="transition" transitionAppear={true} transitionEnterTimeout={500} transitionLeaveTimeout={500} transitionAppearTimeout={1500} >
					<div className="col-xs-12 col-sm-6 col-sm-offset-3">
						<div className="transparent-background">
							<h3 className="text-center"><i>And across to California...</i></h3>

							<div className="spacing">
								<img src="/images/alana-alex-sf.jpg" alt="Alana Alex SF" className="block-center max-width-80" id="alanaDogMaineThumbnail" />
							</div>

							<div className="row">
								<div className="col-xs-6">
									<button className="btn purple float-right" onClick={this._handleBack}>Back</button>
								</div>
								<div className="col-xs-6">
									<button className="btn purple float-left" onClick={this._handleNext}>Next</button>
								</div>
							</div>
						</div>
					</div>
				</ReactCSSTransitionGroup>
			</div>
		);
	}
});

StoryPart8 = React.createClass({
	_handleBack () {
		ReactDOM.unmountComponentAtNode( document.getElementById("content") );
		ReactDOM.render(<StoryPart7 />, document.getElementById("content") );
	},
	_handleNext () {
		ReactDOM.unmountComponentAtNode( document.getElementById("content") );
		ReactDOM.render(<StoryPart9 />, document.getElementById("content") );
	},
	render(){
		return (
			<div className="row">
				<ReactCSSTransitionGroup transitionName="transition" transitionAppear={true} transitionEnterTimeout={500} transitionLeaveTimeout={500} transitionAppearTimeout={1500} >
					<div className="col-xs-12 col-sm-6 col-sm-offset-3">
						<div className="transparent-background">
							<h3 className="text-center">Every adventure with you is more spectacular than the last.</h3>

							<div className="spacing">
								<img src="/images/alana-alex-ice-cream.jpg" alt="Alana Alex ice cream" className="block-center max-width-80" id="alanaDogMaineThumbnail" />
							</div>

							<div className="row">
								<div className="col-xs-6">
									<button className="btn purple float-right" onClick={this._handleBack}>Back</button>
								</div>
								<div className="col-xs-6">
									<button className="btn purple float-left" onClick={this._handleNext}>Next</button>
								</div>
							</div>
						</div>
					</div>
				</ReactCSSTransitionGroup>
			</div>
		);
	}
});

StoryPart9 = React.createClass({
	_handleBack () {
		ReactDOM.unmountComponentAtNode( document.getElementById("content") );
		ReactDOM.render(<StoryPart8 />, document.getElementById("content") );
	},
	_handleNext () {
		ReactDOM.unmountComponentAtNode( document.getElementById("content") );
		ReactDOM.render(<StoryPart10 />, document.getElementById("content") );
	},
	render(){
		return (
			<div className="row">
				<ReactCSSTransitionGroup transitionName="transition" transitionAppear={true} transitionEnterTimeout={500} transitionLeaveTimeout={500} transitionAppearTimeout={1500} >
					<div className="col-xs-12 col-sm-6 col-sm-offset-3">
						<div className="transparent-background">
							<h3 className="text-center">Life with you is amazing, Alana. I am my happiest when we are together.</h3>

							<div className="spacing">
								<img src="/images/alana-alex-jordan-pond.jpg" alt="Alana Alex Jordan Pond" className="block-center max-width-80" />
							</div>

							<div className="row">
								<div className="col-xs-6">
									<button className="btn purple float-right" onClick={this._handleBack}>Back</button>
								</div>
								<div className="col-xs-6">
									<button className="btn purple float-left" onClick={this._handleNext}>Next</button>
								</div>
							</div>
						</div>
					</div>
				</ReactCSSTransitionGroup>
			</div>
		);
	}
});

StoryPart10 = React.createClass({
	_handleBack () {
		ReactDOM.unmountComponentAtNode( document.getElementById("content") );
		ReactDOM.render(<StoryPart9 />, document.getElementById("content") );
	},
	_handleNext () {
		ReactDOM.unmountComponentAtNode( document.getElementById("content") );
		ReactDOM.render(<PhotoGrid />, document.getElementById("content") );
	},
	render(){
		return (
			<div className="row">
				<ReactCSSTransitionGroup transitionName="transition" transitionAppear={true} transitionEnterTimeout={500} transitionLeaveTimeout={500} transitionAppearTimeout={1500} >
					<div className="col-xs-12 col-sm-6 col-sm-offset-3">
						<div className="transparent-background">
							<h3 className="text-center">To many more adventures babe, wherever life may take us.</h3>

							<div className="spacing">
								<img src="/images/wine-tour.jpg" alt="Alana Alex Wine Tour" className="block-center max-width-80" />
							</div>

							<div className="row">
								<div className="col-xs-6">
									<button className="btn purple float-right" onClick={this._handleBack}>Back</button>
								</div>
								<div className="col-xs-6">
									<button className="btn purple float-left" onClick={this._handleNext}>Next</button>
								</div>
							</div>
						</div>
					</div>
				</ReactCSSTransitionGroup>
			</div>
		);
	}
});


PhotoGrid = React.createClass({
	getInitialState () {
		return {photos:[
			"/images/grid/IMG_0006.jpg",
			"/images/grid/alana-alex-north-beach-bw.jpg",
			"/images/grid/IMG_0007.jpg",
			"/images/grid/IMG_0133.jpg",
			"/images/grid/first-formal.jpg",
			"/images/grid/alana-cup.jpg",
			"/images/grid/IMG_0151.jpg",
			"/images/grid/IMG_0198.jpg",
			"/images/grid/IMG_0201.jpg",
			"/images/grid/wine-tour2.jpg",
			"/images/grid/IMG_0217.jpg",
			"/images/grid/IMG_0263.jpg",
			"/images/grid/IMG_0269.jpg",
			"/images/grid/date-night2.jpg",
			"/images/grid/IMG_0278.jpg",
			"/images/grid/IMG_0643.jpg",
			"/images/grid/wine-tour1.jpg",
			"/images/grid/IMG_0545.jpg",
			"/images/grid/IMG_0546.jpg",
			"/images/grid/IMG_0550.jpg",
			"/images/grid/SF2.jpg",
			"/images/grid/IMG_0596.jpg",
			"/images/grid/IMG_0641.jpg",
			"/images/grid/IMG_0135.jpg",
			"/images/grid/IMG_0713.jpg",
			"/images/grid/alex-maine.jpg",
			"/images/grid/IMG_0718.jpg",
			"/images/grid/IMG_0721.jpg",
			"/images/grid/IMG_2461.jpg",
			"/images/grid/IMG_2478.jpg",
			"/images/grid/IMG_2587.jpg",
			"/images/grid/wine-tour3.jpg",
			"/images/grid/IMG_2601.jpg",
			"/images/grid/IMG_0069.jpg",
			"/images/grid/date-night.jpg",
			"/images/grid/graduation.jpg",
			"/images/grid/soccer-formal.jpg",
			"/images/grid/IMG_0642.jpg",
			"/images/grid/IMG_0637.jpg",
			"/images/grid/IMG_0633.jpg",
			"/images/grid/IMG_0409.jpg",
			"/images/grid/IMG_0288.jpg",
			"/images/grid/IMG_0273.jpg",
			"/images/grid/IMG_0139.jpg",
			"/images/grid/IMG_2607.jpg",
			"/images/grid/graduation2.jpg",
			"/images/grid/IMG_2612.jpg",
			"/images/grid/IMG_2618.jpg",
			"/images/grid/IMG_2629.jpg",
			"/images/grid/IMG_2638.jpg",
			"/images/grid/last-formal.jpg",
			"/images/grid/IMG_2644.jpg",
			"/images/grid/IMG_0117.jpg",
			"/images/grid/IMG_2647.jpg",
			"/images/grid/IMG_2772.jpg",
			"/images/grid/SF1.jpg",
			"/images/grid/first-formal-selfie.jpg",
			"/images/grid/IMG_0636.jpg",
			"/images/grid/maine-1.jpg",
			"/images/grid/second-formal.jpg",
			"/images/grid/wine-tour4.jpg",
			"/images/grid/IMG_0227.jpg",
		]};
	},
	componentDidMount () {
		// init Masonry
		var $grid = $('.grid').masonry({
		  // options...
		});
		// layout Masonry after each image loads
		$grid.imagesLoaded().progress( function() {
		  $grid.masonry({
		  	columnWidth:200,
		  	isFitWidth:true	
		  });
		});
	},
	_handleBack () {
		ReactDOM.unmountComponentAtNode( document.getElementById("content") );
		ReactDOM.render(<StoryPart10 />, document.getElementById("content") );
	},
	_handleRestart () {
		ReactDOM.unmountComponentAtNode( document.getElementById("content") );
		ReactDOM.render(<Login />, document.getElementById("content") );
	},
	render(){

		var gridItems = this.state.photos.map(function(item, i){
			return (
				<div key={i} className="grid-item">
					<img className="grid-item-pic" src={item} />
				</div>
			);
		}.bind(this));

		return (
			<div className="row">
				<ReactCSSTransitionGroup transitionName="transition" transitionAppear={true} transitionEnterTimeout={500} transitionLeaveTimeout={500} transitionAppearTimeout={1500} >
					<div className="col-xs-12 col-sm-8 col-sm-offset-2">
						<div className="transparent-background">
							<h3 className="text-center">And here are some more of the many great moments that we have shared together.</h3>
							<h3 className="text-center">Happy Anniversary, for being in my life a whole year, Alana.  I look forward to many more in our future.</h3>
							<h3 className="text-center" id="cursive">I love you.</h3>

							<div className="row">
								<div className="col-xs-6">
									<button className="btn purple float-right" onClick={this._handleBack}>Back</button>
								</div>
								<div className="col-xs-6">
									<button className="btn purple float-left" onClick={this._handleRestart}>Restart</button>
								</div>
							</div>

							<div className="grid">
								{gridItems}
							</div>
						</div>
					</div>
				</ReactCSSTransitionGroup>
			</div>
		);
	}
});