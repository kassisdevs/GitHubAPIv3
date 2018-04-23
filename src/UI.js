class UI {
  inputUser (user) {
  let html = `
  <div class="card card-body mb-3">
    <div class="row">
      <div class="col-md-3">
        <img class="img-fluid mb-2" src="${user.avatar_url}">
        <a href="${user.html_url}" target="_blank" class="btn btn-success btn-block mb-4">View Profile</a>
      </div>
      <div class="col-md-9">
        <span class="badge badge-primary p-2">Public Repos: ${user.public_repos}</span>
        <span class="badge badge-secondary p-2">Public Gists: ${user.public_gists}</span>
        <span class="badge badge-success p-2">Followers: ${user.followers}</span>
        <span class="badge badge-info p-2">Following: ${user.following}</span>
        <br><br>
        <ul class="list-group">
          <li class="list-group-item">Company: ${user.company}</li>
          <li class="list-group-item">Website/Blog: <a href="${user.blog}"  target="_blank">${user.blog}</a></li>
          <li class="list-group-item">Location: ${user.location}</li>
          <li class="list-group-item">Member Since: ${user.created_at}</li>
        </ul>
      </div>
    </div>
  </div>
  <h3 class="page-heading m-5"><span class="text-primary d-inline my-5">${user.login}</span> Latest Repos</h3>
  <div id="repos" class="m-3"></div>
`;
document.querySelector('#profile').innerHTML = html;

  }
  inputRepos (repo) {
    let Output = ``;
    repo.forEach(element => {
      Output += `
      <div class="card card-body mb-2">
       <div class="row">
        <div class="col-md-6">
           <a href="${element.html_url}" target="_blank">${element.name}</a>
         </div>
         <div class="col-md-6">
         <span class="badge bg-primary text-white p-2">Stars: ${element.stargazers_count}</span>
         <span class="badge bg-secondary text-white p-2">Watchers: ${element.watchers_count}</span>
         <span class="badge bg-success text-white p-2">Forks: ${element.forks}</span>
         </div>
       </div>
     </div>
      `;
    });
    document.querySelector('#repos').innerHTML = Output;
  
  }
  showError (message, cla) {
    // Create alert div
    if (!document.querySelector('#error')) {
      const alert = document.createElement('div');
    alert.className = cla;
    alert.id = 'error';
    alert.innerHTML = message;
    const refEl = document.querySelector('#ref');
    const parentEl = document.querySelector('#par');
    parentEl.insertBefore(alert, refEl);
    
    }
  }
  removeError () {
    document.getElementById('error').remove();
  }
  clearInput() {
    document.querySelector('#profile').innerHTML = '';
    
  }
}
export const ui = new UI();