import React from 'react';
import { useEffect, useState } from 'react';
import leagueService from './services/leagues';
import sponsorService from './services/sponsors';
import League from './components/League';
import Sponsor from './components/Sponsor';

const App = () => {
	const [leagues, setLeagues] = useState([]);
	const [newLeague, setNewLeague] = useState([]);
	const [sponsors, setSponsors] = useState([]);
	const [newSponsor, setNewSponsor] = useState([]);

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

	const addSponsors = (e) => {
		e.preventDefault();
		const newSponsor = {
			address: e.target.address.value,
			budget: e.target.budget.value,
			radius: e.target.radius.value,
		};
		sponsorService.create(newSponsor).then((returnedSponsor) => {
			setSponsors(sponsors.concat(returnedSponsor));
			setNewSponsor('');
		});
	};

	const findSponsor = (e) => {
		e.preventDefault();
		const sponsor = {
			name: e.target.name.value,
			location: e.target.location.value,
			radius: e.target.radius.value,
			budget: e.target.budget.value,
		};
		leagueService.findSponsor(sponsor).then((returnedSponsor) => {
			setLeagues(leagues.concat(returnedSponsor));
			setNewLeague('');
		});
	};

	const handleChange = (e) => {
		console.log(e.target.value);
		setNewLeague({
			...newLeague,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<>
			<form onSubmit={addLeague}>
				<League
					leagues={leagues}
					addLeague={addLeague}
					newLeague={newLeague}
					handleChange={handleChange}
				/>
			</form>
			<form onSubmit={addSponsors}>
				<Sponsor
					leagues={leagues}
					addSponsors={addSponsors}
					newSponsor={newSponsor}
					handleChange={handleChange}
				/>
			</form>
		</>
	);
};

export default App;
