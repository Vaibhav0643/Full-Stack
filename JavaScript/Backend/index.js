require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;

const githubData = {
  login: "Vaibhav0643",
  id: 97741960,
  node_id: "U_kgDOBdNsiA",
  avatar_url: "https://avatars.githubusercontent.com/u/97741960?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/Vaibhav0643",
  html_url: "https://github.com/Vaibhav0643",
  followers_url: "https://api.github.com/users/Vaibhav0643/followers",
  following_url:
    "https://api.github.com/users/Vaibhav0643/following{/other_user}",
  gists_url: "https://api.github.com/users/Vaibhav0643/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/Vaibhav0643/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/Vaibhav0643/subscriptions",
  organizations_url: "https://api.github.com/users/Vaibhav0643/orgs",
  repos_url: "https://api.github.com/users/Vaibhav0643/repos",
  events_url: "https://api.github.com/users/Vaibhav0643/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/Vaibhav0643/received_events",
  type: "User",
  site_admin: false,
  name: "Vaibhav Agarwal",
  company: null,
  blog: "",
  location: "Jaipur, Rajasthan",
  email: null,
  hireable: true,
  bio: null,
  twitter_username: null,
  public_repos: 10,
  public_gists: 0,
  followers: 3,
  following: 0,
  created_at: "2022-01-14T13:33:27Z",
  updated_at: "2024-08-07T16:00:01Z",
};

app.get("/", (req, res) => {
  res.send("Backend");
});

app.get("/name", (req, res) => {
  res.send("<h1>Vaibhav Agarwal</h1>");
});

app.get("/github", (req, res) => {
  res.json(githubData);
});

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
