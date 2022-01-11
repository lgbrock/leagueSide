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
			long: e.target.long.value,
			lat: e.target.lat.value,
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
					<label>Name</label>
					<input
						name='name'
						value={newLeague.name}
						onChange={(e) =>
							setNewLeague({ ...newLeague, name: e.target.value })
						}
					/>

					<label>Longitude</label>
					<input
						name='long'
						value={newLeague.long}
						onChange={(e) =>
							setNewLeague({ ...newLeague, long: e.target.value })
						}
					/>

					<label>Latitude</label>

					<input
						name='lat'
						value={newLeague.lat}
						onChange={(e) =>
							setNewLeague({ ...newLeague, lat: e.target.value })
						}
					/>

					<label>Price</label>
					<input
						name='price'
						value={newLeague.price}
						onChange={(e) =>
							setNewLeague({ ...newLeague, price: e.target.value })
						}
					/>

					<button type='submit'>Add League</button>
				</div>
			</form>
			<h1>LEAGUES TO SHOW</h1>
			{leagues.map((league) => (
				<div key={league.id}>
					<h2>{league.name}</h2>
					<p>{league.long}</p>
					<p>{league.lat}</p>
					<p>${league.price}</p>
				</div>
			))}

			<Sponsor />
		</div>
	);
};

export default App;
