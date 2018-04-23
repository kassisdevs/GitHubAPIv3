class GitHub {
  constructor() {
    this.clientId = '63e5a02efbe923d1674c';
    this.clientSecret = '40d05ca82266b073e101660a1087ba5c01264f1a';
  }

async getUser (user) {
  // Fetch profile
  const reDATA = await fetch(`https://api.github.com/users/${user}?client_id=${this.clientId}&client_secret=${this.clientSecret}`);
  const profile = await reDATA.json();
  // Fetch profile's repos
  const repoDATA = await fetch(`https://api.github.com/users/${user}/repos?client_id=${this.clientId}&client_secret=${this.clientSecret}`)
  const profileRepos = await repoDATA.json();
  return {
    profile,
    profileRepos
  }
}
}
export const github = new GitHub();