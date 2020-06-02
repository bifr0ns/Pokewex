# Pokewex

I choose React because I wanted to learn it, and this was a cool project to start learning more.

## Setup locally

Clone the repository

Install using **yarn**

```
yarn run install
```

Run the project

```
yarn run dev-server
```

## Deploy on Heroku

You should have an account on [Heroku](https://id.heroku.com/login) and install [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)

On the terminal login to heroku while on the route of your project

```
heroku login
```

Create a heroku project to deploy

```
heroku create project-name
```

A new branch of heroku will be created on your repo. We need to push our files to heroku branch

If you have not init your repo you need to

```
git init
```

Then we proceed to push our files to heroku

```
git add .
```

```
git commit -m "Heroku initial commit"
```

```
git push heroku master
```

You should get an URL where it was deployed

## Tests

Tests are on folder /src/tess. To run the tests 

```
yarn run test
```

We use Jest with snapshot/enzyme so we can test renders.

## Next steps

There are still a lot of things that can be implemented while I keep learning React

- Add caché 

> I read about the hook useMemo, or react-query, ill try with them

- Add more tests

> As of now theres only one render test

- Dinamic pagination
- Change page with arows
- Change the language of pokemon descriptions
- Add github actions with AWS

> This was my first option, but I could not make it work, ill keep trying so it can be deployed automatically
