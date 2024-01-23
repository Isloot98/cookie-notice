const accept = document.getElementById('accept-cookies');
const decline = document.getElementById('decline-cookies');
const cookieNotice = document.getElementById('cookie-notice');
const checkBox = document.getElementById('checkbox');
const switchSlider = document.getElementById('switch');
const message = document.getElementById('message');

accept.addEventListener('click', () => {
  cookieNotice.style.display = 'none';
  console.log('accepted');
  document.cookie = 'cookieAccepted=true';
});

decline.addEventListener('click', () => {
  cookieNotice.style.display = 'none';
  console.log('declined');
  document.cookie = 'cookieAccepted=false';
});

if (document.cookie.includes('cookieAccepted=true')) {
  cookieNotice.style.display = 'none';
}

switchSlider.addEventListener('click', () => {
    checkBox.checked =!checkBox.checked;
    if (checkBox.checked) {
      document.cookie = 'darkMode=true';
      document.body.style.backgroundColor = '#000000';
    document.body.style.color = '#ffffff';
    message.innerHTML = 'This Is Dark Mode'
    } else {
      document.cookie = 'darkMode=false';
      document.body.style.backgroundColor = '#ffffff';
    document.body.style.color = '#000000';
    message.innerHTML = 'This Is Light Mode';
      
    }
});

if (document.cookie.includes('darkMode=true')) {
    checkBox.checked = true;
    document.body.style.backgroundColor = '#000000';
    document.body.style.color = '#ffffff';
    message.innerHTML = 'This Is Dark Mode'
} else if (document.cookie.includes('darkMode=false')) {
    checkBox.checked = false;
    document.body.style.backgroundColor = '#ffffff';
    document.body.style.color = '#000000';
    message.innerHTML = 'This Is Light Mode';
}
