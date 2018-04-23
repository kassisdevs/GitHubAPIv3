import { ui } from './UI';
import { github } from './GitHub';

// Get profile from backend API
document.querySelector('#input').addEventListener('keyup', (e) => {
  const UserInput = e.target.value;

  if (UserInput !== '') {
// Fetch API GET
github.getUser(UserInput)
.then( data => {
  console.log(data);
  if (data.profile.message !== "Not Found") {
    // Input into UI
  ui.inputUser(data.profile);
  ui.inputRepos(data.profileRepos);
  } else if (data.profile.message == "Not Found") {
  ui.showError(`User not found! Enter a different name`, 'bg-danger');
    // Remove error
  setTimeout(ui.removeError, 3000);
  }
});
  } else {
  ui.clearInput();
  }
  
});

