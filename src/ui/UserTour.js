import React, { Component }from "react";
import Tour from "react-user-tour";

export default class UserTour extends Component {
	constructor() {
		super();
		this.state = {
			isTourActive: false,
			tourStep: 1
		};
	}
	componentDidMount() {
		/* set state to active in cDM to make sure nodes being attached to have been mounted */
		this.setState({
			isTourActive: true
		});
	}
	render() {
		return (
			<div>
				<Tour
					active={this.state.isTourActive}
					step={this.state.tourStep}
					onNext={(step) => this.setState({tourStep: step})}
					onBack={(step) => this.setState({tourStep: step})}
					onCancel={() => this.setState({isTourActive: false})}
					steps={[
						{
							step: 1,
							selector: ".searchbar",
							title: <h4 style={{color: "black", padding: '.5rem'}}>Search Bar</h4>,
							body: <p style={{color: "black", padding: '.5rem'}}>You can search for Github users here.</p>
						},
						{
							step: 2,
							selector: ".results",
							title: <h4 style={{color: "black", padding: '.5rem'}}>Repo List</h4>,
							body: <p style={{color: "black", padding: '.5rem'}}>A list of the user's repos go here.</p>,
							position: 'right',
							backButtonText: 'prev'
						},
						{
							step: 3,
							selector: ".reponame",
							title: <h4 style={{color: "black", padding: '.5rem'}}>Repo Name</h4>,
							body: <p style={{color: "black", padding: '.5rem'}}>Click on the repo name and below the app will show commits and stats related to the repo.</p>,
							position: 'right',
							backButtonText: 'prev'
						},
						{
							step: 4,
							selector: ".repo-icons",
							title: <h4 style={{color: "black", padding: '.5rem'}}>Repo Icons</h4>,
							body: <p style={{color: "black", padding: '.5rem'}}>Here you can find a repo's stars, watchers, forks, and a link to the repo.</p>,
							position: 'bottom',
							backButtonText: 'prev'
						}
					]}
				/>
			</div>
		);
	}
}