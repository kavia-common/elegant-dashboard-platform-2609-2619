(function () {
  // Simple no-op: Wire buttons for console feedback to demonstrate JS inclusion
  document.addEventListener('DOMContentLoaded', function() {
    const btnCreate = document.getElementById('btn-create-account');
    const btnGoogle = document.getElementById('btn-google');
    const btnGithub = document.getElementById('btn-github');

    if (btnCreate) btnCreate.addEventListener('click', () => console.log('Create Account clicked'));
    if (btnGoogle) btnGoogle.addEventListener('click', () => console.log('Sign up with Google clicked'));
    if (btnGithub) btnGithub.addEventListener('click', () => console.log('Sign up with GitHub clicked'));
  });
})();
