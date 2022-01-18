import React from 'react';

const Sponsor = (props) => {
	// add a sponsor
	// allow sponsor to search with radius to find nearby leagues
	// allow sponsor to add a league to their list of leagues
	return (
		<div className='sponsor'>
			<h1>Add New Sponsor</h1>
			<form>
				<label>Sponsor Name:</label>
				<input
					type='text'
					name='name'
					value={props.name}
					onChange={props.handleChange}
				/>
				<label>Sponsor Location:</label>
				<input
					type='text'
					name='location'
					value={props.location}
					onChange={props.handleChange}
				/>
				<label>Radius (in miles):</label>
				<input
					type='text'
					name='radius'
					value={props.radius}
					onChange={props.handleChange}
				/>

				<label>Sponsor Budget:</label>
				<input
					type='text'
					name='budget'
					value={props.budget}
					onChange={props.handleChange}
				/>
			</form>

			<button onClick={props.handleSubmit}>Submit</button>
		</div>
	);
};

export default Sponsor;
