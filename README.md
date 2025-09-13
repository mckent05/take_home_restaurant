<a name="readme-top"></a>

<!--
!!! IMPORTANT !!!
This README is an example of how you could professionally present your codebase. 
Writing documentation is a crucial part of your work as a professional software developer and cannot be ignored. 

You should modify this file to match your project and remove sections that don't apply.

REQUIRED SECTIONS:
- Table of Contents
- About the Project
  - Built With
  - Live Demo
- Getting Started
- Authors
- Future Features
- Contributing
- Show your support
- Acknowledgements
- License

OPTIONAL SECTIONS:
- FAQ

After you're finished, please remove all the comments and instructions!

For more information on the importance of a professional README for your repositories: https://github.com/microverseinc/curriculum-transversal-skills/blob/main/documentation/articles/readme_best_practices.md
-->

<div align="center">
  <!-- You are encouraged to replace this logo with your own! Otherwise, you can also remove it. -->

  <h3><b>Local Eats</b></h3>

</div>

<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
  - [🚀 Live Demo](#live-demo)
- [💻 Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Setup](#setup)
  - [Install](#install)
  - [Usage](#usage)
  - [Run tests](#run-tests)
  - [Deployment](#deployment)
- [👥 Authors](#authors)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)
- [❓ FAQ (OPTIONAL)](#faq)
- [📝 License](#license)

<!-- PROJECT DESCRIPTION -->

# 📖 Local Eats <a name="about-project"></a>

Local Eats is a simple web API application that fetches your favorite restaurants closest to you. It also lets you filter the restaurants by price, cuisine, etc

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>
This project was built using the following technologies:

<details>
  <summary>Server</summary>
  <ul>
    <li>Node.js</li>
    <li>ExpressJS</li>
    <li>PostgreSQL</li>
    <li>Docker</li>
  </ul>
</details>

<!-- Features -->

### Key Features <a name="key-features"></a>

- **Returns restaurants within a 10km radius from a given location/coordinates**
- **Permits user to filter restaurants by price, cuisine, open_now**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Prerequisites

To run this project, you need:
```sh
 NodeJS
```

```sh
  Docker 
```
### Setup

Clone this repository to your desired folder:

```sh
  cd my-folder
  git clone https://github.com/mckent05/take_home_restaurant.git
```

### Install

Install this project with:

```sh
  cd take_home_restaurant
  npm install
```
1. Make sure Docker & Docker Compose are installed.
2. From repo root run:

SEED SQL DATA:
```bash
docker-compose exec -T db psql -U <postgres_user> -d locate_restuarant < ./db/database.sql
```

```bash
docker-compose up --build
```
This will:
- Start Postgres and initialize with seed data.
- Build the API image, run the server on `http://localhost:3000`.

## Running locally (without Docker)
1. Copy `.env.example` to `.env` and adjust the DB parameters to your local Postgres parameters.
2. Install dependencies:

3. Run Dev:
```bash
npm run dev
```
4. Tests:

```bash
npm test
```

## API: GET /api/v1/restaurants
Query parameters:
- `lat` (required) — latitude
- `lng` (required) — longitude
- `radius` (optional, km) — default 10
- `price` (optional, integer 1-4)
- `cuisine` (optional, string, case-insensitive substring match)
- `open_now` (optional, boolean `true`/`false`)
- `limit` (optional) — default 20
- `page` (optional) — default 1


Example:
```
GET api/v1/restaurants?lat=6.5244&lng=3.3792&radius=2&cuisine=italian&open_now=true
```
Returns JSON array of restaurants sorted by distance (closest first) with the `distance_km` field.
Example of data returned:
```
[
  {
    "id": 11,
    "name": "Marple Lagos",
    "latitude": 6.43609,
    "longitude": 3.4571,
    "price_level": 4,
    "cuisine": "Chinese",
    "opens_at": "08:00:00",
    "closes_at": "21:00:00",
    "distance_km": 1.105187700079476
  },
  {
    "id": 12,
    "name": "Utazi Kitchen & Bar",
    "latitude": 6.4431,
    "longitude": 3.4733,
    "price_level": 3,
    "cuisine": "Bar",
    "opens_at": "07:00:00",
    "closes_at": "23:00:00",
    "distance_km": 2.9920425899879026
  },
  {
    "id": 10,
    "name": "Circa Lagos",
    "latitude": 6.45,
    "longitude": 3.4735,
    "price_level": 4,
    "cuisine": "Fine Dining",
    "opens_at": "05:00:00",
    "closes_at": "15:00:00",
    "distance_km": 3.2908314096461893
  }
]```
### Deployment

You can deploy this project using:

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- AUTHORS -->

## 👥 Authors <a name="authors"></a>

> Mention all of the collaborators of this project.

👤 **Author1**

- GitHub: [@githubhandle](https://github.com/mckent05)
- Twitter: [@twitterhandle](https://twitter.com/mckent05)
- LinkedIn: [LinkedIn](https://linkedin.com/in/akinladetemitope)


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FUTURE FEATURES -->

## 🔭 Future Features <a name="future-features"></a>

> Describe 1 - 3 features you will add to the project.

- [ ] **Add a feature to enable users to review a restaurant**
- [ ] **Add authentication**
- [ ] **Add payment integration with Flutterwave or Paystack**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

> Write a message to encourage readers to support your project

If you like this project...

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>
I would like to thank...

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FAQ (optional) -->

## ❓ FAQ (OPTIONAL) <a name="faq"></a>


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

_NOTE: we recommend using the [MIT license](https://choosealicense.com/licenses/mit/) - you can set it up quickly by [using templates available on GitHub](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/adding-a-license-to-a-repository). You can also use [any other license](https://choosealicense.com/licenses/) if you wish._

<p align="right">(<a href="#readme-top">back to top</a>)</p>
