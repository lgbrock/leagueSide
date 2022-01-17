import React from 'react';
import { useEffect, useState } from 'react';
import leagueService from './services/leagues';
import League from './components/League';
import Sponsor from './components/Sponsor';

const App = () => {
	const [leagues, setLeagues] = useState([]);
	const [newLeague, setNewLeague] = useState([]);

	useEffect(() => {
		leagueService.getAll().then((initialLeagues) => {
			setLeagues(initialLeagues);
		});
	}, []);

	const addLeague = (e) => {
		e.preventDefault();
		const newLeague = {
			name: e.target.name.value,
			coordinates: e.target.coordinates.value,
			price: e.target.price.value,
		};
		leagueService.create(newLeague).then((returnedLeague) => {
			setLeagues(leagues.concat(returnedLeague));
			setNewLeague('');
		});
	};

	return (
		<div>
			<League leagues={leagues} />
			<form onSubmit={addLeague}>
				<div>
					<label>Name:</label>
					<input
						name='name'
						value={newLeague.name}
						onChange={(e) =>
							setNewLeague({ ...newLeague, name: e.target.value })
						}
					/>

					<label>Location:</label>
					<input
						name='location'
						value={newLeague.location}
						onChange={(e) =>
							setNewLeague({ ...newLeague, location: e.target.value })
						}
					/>

					<label>Cost to Sponsor:</label>
					<input
						name='price'
						value={newLeague.price}
						onChange={(e) =>
							setNewLeague({ ...newLeague, price: e.target.value })
						}
					/>

					<br />

					<button type='submit'>Add League</button>
				</div>
			</form>
			<h1>LEAGUES IN DATABASE</h1>
			{leagues.map((league) => (
				<div key={league.id}>
					<h2>{league.name}</h2>
					<p>{league.location}</p>
					<p>Cost to Sponsor: ${league.price}</p>
				</div>
			))}

			<Sponsor />
		</div>
	);
};

export default App;
