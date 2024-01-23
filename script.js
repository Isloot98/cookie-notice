const accept = document.getElementById('accept-cookies');
const decline = document.getElementById('decline-cookies');
const cookieNotice = document.getElementById('cookie-notice');

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

if (document.cookie) {
    cookieNotice.style.display = 'none';

}