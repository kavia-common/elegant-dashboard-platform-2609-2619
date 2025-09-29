(function () {
  // Simple no-op: Wire buttons for console feedback to demonstrate JS inclusion
  document.addEventListener('DOMContentLoaded', function() {
    const btnCreate = document.getElementById('btn-create-account');
    const btnGoogle = document.getElementById('btn-google');
    const btnGithub = document.getElementById('btn-github');

    if (btnCreate) btnCreate.addEventListener('click', () => console.log('Create Account clicked'));
    if (btnGoogle) btnGoogle.addEventListener('click', () => console.log('Sign up with Google clicked'));
    if (btnGithub) btnGithub.addEventListener('click', () => console.log('Sign up with GitHub clicked'));

    // Device info page demo hooks
    const searchCardBtn = document.querySelector('#search-card-4-354 .ds-style-47');
    if (searchCardBtn) searchCardBtn.addEventListener('click', () => console.log('Search clicked'));

    const pagerLeft = document.querySelector('#section-journeys-4-539 .ds-style-49');
    const pagerRight = document.querySelector('#section-journeys-4-539 .ds-style-50');
    if (pagerLeft) pagerLeft.addEventListener('click', () => console.log('Carousel: previous'));
    if (pagerRight) pagerRight.addEventListener('click', () => console.log('Carousel: next'));
  });
})();
