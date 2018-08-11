const token = '23805ec7a2ccd41ea45a0935d642209c4f736c78'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
