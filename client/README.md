# -- OBJECTIVES --

1. Add league to system
   - teams can be added but need to clean up output on display
2. Finding leagues to sponsor
   -

# -- NOTES --

Add league to system - POST
Find leagues to sponsor -

Database of Leagues (10-15 for sample):

- name
- latitude/longitude pair
- single price to purchase sponsorship opportunity

Find leagues to sponsor:

- A latitude/longitude pair around which to focus the search
- A radius in miles in which to search around that central point
- A total budget to spend on leagues

Total Budget + radius (i.e. 5 miles) + location (i.e. latitude/longitude) = enough leagues to spend up to the budget, sponsoring as many leagues as possible without going over it

# -- INSTRUCTIONS --

# Hello!

We’re really glad that you’re interested in joining our team at LeagueSide. We’ve tried to come up with an interview process that is not stressful or tricky and gives you an opportunity to show off your technical skills and impress us. Don’t stress too much about this. We’re not trying to trick you, and the requirements here are fairly loose for a reason. We don’t expect you to spend more than a few hours on this exercise. Complete as much as you feel comfortable completing, and feel free to reach out if you have any questions at all about the requirements or instructions in this document.

# TECHNOLOGIES

We have a strong preference for projects written in Ruby and/or Javascript. That said, if there is a different stack you’d like to use, that is fine!

## WHAT TO DO

We’re going to ask you to build us a really, really simple league sponsorship web service that fulfills a couple simple requirements. It should have two endpoints:

## Adding a league to the system

Finding leagues to sponsor

## ADD A LEAGUE TO THE SYSTEM

For the purposes of this exercise, a League is a collection of, at the very least:

### A league name.

A latitude/longitude pair.
A single price to purchase their sponsorship opportunity.

## FIND LEAGUES TO SPONSOR

This endpoint should accept a few arguments:

A latitude/longitude pair around which to focus the search.
A radius in miles in which to search around that central point.
A total budget to spend on leagues.

Given a total budget, a radius, and a location, this service should return enough leagues to spend up to the budget, sponsoring as many leagues as possible without going over it. For example, let’s say we’ve added all of the following leagues to the service within 5 miles of point 1,1:

The Wyld Stallions
$4,500
Team Zoidberg
$6,000
The Zoomers
$1,500
North Horseburg Little League
$3,500
The Duloc Ogres
$2,500

Requesting this endpoint with a budget of $8,000, a radius of 5 miles and a location of 1,1, the service should return The Zoomers, The Duloc Ogres, and The North Horseburg Little League. This spends $7,500 and returns the most teams possible.

# SUBMIT!

Please include a few notes for us along with the rest of your project (either in a README or within your email). Some helpful things to include would be:

Instructions on any necessary setup
Instructions on how run your test project
Any other jawn you think would be helpful to communicate to us!

After you send in your solution, we’ll look it over and contact you with next steps. Please contact zubin@leagueside.com if you have any questions.
