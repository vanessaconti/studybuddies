Install dependencies:

$ npm install
$ npm init (-y to go through all prompts)
$ npm install express dotenv cors

```

```

Postgres SQL dependencies

$ npm install pg-promise

```

```

Start the app:

$ npm start

Web Access (local url) :localhost:5005

```

```

Inside of the Scripts objects in package.json, insert:

"db:init": "psql postgres -f db/schema.sql",
"db:seed": "psql postgres -f db/seed.sql"

-

Seed Database:

$ npm run db:init
$ npm run db:seed

```

```

Resource Method Route Description
Groups GET /groups Returns a list of all groups.
Groups POST /groups Creates a new group.
Groups GET /groups{gid} Returns details about the group with an id of {gid}.
Groups PUT /groups{gid} Update details of the group with an id of {gid}.
Events GET /groups/{gid}/events Return all events associated with the group with and id of{gid}.
Events POST /groups/{gid}/events Creates a new event associated with the group with an id of {gid}.
Events GET /events/{eid} Returns the details of an event with an id of{eid}.
Events PUT /events/{eid} Update details of the event with an id of{eid}.

Heroku deployment of back-end with database

Go for stretch and super-stretch goals!!
(...then remember to check deployment that changes have carried over)
