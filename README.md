# REST API for Gym Routines using Express and MongoDB

## Populate the seed

To populate the exercises seed run the command `npm run seed`. It will create a table `fitness` with a collection `exercises` in your MongoDB.

## Start the server

To start the server run on your terminal `npm run start`

it will automatically connect to the MongoDB running on your localhost on the port `27018` (You can change that)

## API Exercise Data Structure

The JSON Data that the API is gonna return has the following format:

```json
{
  "_id": "serial",
  "name": "Name of the exercise",
  "type": "Type of exercise: Push, Pull, Legs",
  "primary_muscles": "Main muscles involved",
  "url": "Youtube video of the exercise"
}
```

## Documentation for API Endpoints

All URIs are relative to _https://localhost:4001/api_

| HTTP request                       | Description     |
| ---------------------------------- | --------------- |
| **GET** /exercises/{exerciseId}    | Get Exercise    |
| **GET** /exercises                 | Get Exercises   |
| **POST** /exercises                | Post Exercise   |
| **PUT** /exercises/{exerciseId}    | Update Exercise |
| **DELETE** /exercises/{exerciseId} | Delete Exercise |
