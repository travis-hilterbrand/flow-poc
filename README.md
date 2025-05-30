# Pattern - State + Actions

## Overview

How to think about building an application?
Forget about specific technologies
Forget about different teams
Forget about separation about concerns
Forget about frameworks
At the very highest level, we have to answer the question "what is an application"? before we can build it
Data + Flows vs State + Actions
Doesn't matter what you are building or where you build it
It seems so high level? Must be useless, right? No, it is fundamental. As a developer, we will find ourselves coming back to this concept over and over.

Examples
Today we're going to build an app to feed and train Pokemon. How do you feed a pokemon? You click a button =
State - pokemon is fed, pokemon is not fed
Action - feed pokemon
Very simple. However, this is fundamentally no different than the series of servers, load balancers, microservices and algorithms that collectively self-drive an automated car. It's just state + actions.

Limit the approach
For the purposes of this discussion, we want to build "user-facing" software deployed on a web server.
We're also going to cheat a little and simulate a REST-based server
Not going to worry about multiple application users, etc

Build
Display a list of the pokemon in my stable
Display a button to feed each pokemon

API planning and decomposition
Seems simple
GET /pokemons - list of pokemon
PUT /pokemons/:id to feed a pokemon
Getting complicated already
GET list vs GET item
Wait! we're already making choices
GET list - get a list of id's
GET item - get the pokemon

Questions to ask?
Structure -
API + types
Components
dumb vs smart
HOOKS where is our state? when does it get refreshed?

Quick note about routes

Pessimistic vs optimistic updates

Errors

Edge cases
