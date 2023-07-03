export const isUserAuthorized = () => {
    // Implement your logic to check if the user is authorized
    // Return true if authorized, false otherwise
    const token = window.gapi.client.getToken();
    return token !== null;
  };
  
  export const redirectToLogin = () => {
    // Redirect to the login page
    window.location.href = '/';
  };
  
  export const redirectToMain = () => {
    // Redirect to the main page
    window.location.href = '/PWP-Secrets_Calculator';
  };