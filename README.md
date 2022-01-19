![Logo](https://miro.medium.com/max/1400/1*xTLR-HDiMv6Rcrs2OE1GbQ.png)

# LeagueSide Technical Assessment

The purpose of this project is to build a league sponsorship web service that fulfills a couple simple requirements. It should have two endpoints:

    1. Adding a league to the system
    2. Finding leagues to sponsor

## Appendix

Overall, I felt like this was a tremendous technical assessment that thoroughly tested my skill set and allowed me to discover a few different tools that I had never used before.

I used Jest for testing and querying the correct data to meet the required endpoints. However, I ran into a couple of issues using a NoSQL database.

The main thing I wasn't sure about on this assessment was how to search for a league by a sponsor within a certain radius and budget. Getting familiar with Geospatial indexing to get the Schema right proved daunting, and I couldn't filter the valuable data out. However, if I had built out the frontend with React, I would have gone with a couple of useState components to search through the result of leagues to find a sponsor within budget for one or multiple teams. Unfortunately, I could only start on the front end and could not fully complete it for demo testing due to time.

If I had more time, I would have gone about a couple of things differently. One of those things would be to use something like Mapbox to generate points of each league with their respective longitude and latitude pair. This would have allowed for a better representation of the data points about where each team is located. The second thing I would have used would be a relational database such as SQL or Postgres. This would have made it easier to find and locate leagues within the sponsor's budget. However, using a non-standard relational database like MongoDB added extra difficulty because I couldn't compare the data points between League and Sponsor queries.

## Run Locally

Clone the project

```bash
  git clone https://github.com/lgbrock/leagueSide.git
```

Go to the project directory

```bash
  cd server
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

## Running Tests

To run tests, run the following command

```bash
  npm test -- tests/league_api.test.js
```

## Tech Stack

**Client:** React

**Server:** Node, Express, MongoDB

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Author

- Logan Brock [@lgbrock](https://github.com/lgbrock)

## Notes

Add league to system - POST
Find leagues to sponsor - GET

Database of Leagues (10-15 for sample):

- name
- latitude/longitude pair
- single price to purchase sponsorship opportunity

Find leagues to sponsor:

- A latitude/longitude pair around which to focus the search
- A radius in miles in which to search around that central point
- A total budget to spend on leagues

Total Budget + radius (i.e. 5 miles) + location (i.e. latitude/longitude) = enough leagues to spend up to the budget, sponsoring as many leagues as possible without going over it
