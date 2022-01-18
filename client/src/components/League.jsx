import React from 'react';

const League = (props) => {
	return (
		<div className='league'>
			<h1>Add New League</h1>
			<form onSubmit={props.handleSubmit}>
				<label>League Name:</label>
				<input
					type='text'
					name='name'
					value={props.name}
					onChange={props.handleChange}
				/>
				<label>Location:</label>
				<input
					type='text'
					name='location'
					value={props.location}
					onChange={props.handleChange}
				/>
				<label>Budget:</label>
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

export default League;
