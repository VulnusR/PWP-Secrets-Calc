import React, { useEffect, useState } from 'react';
import { handleAuthClick, handleSignoutClick, listMajors } from "./apiUtils";

const Auth = () => {
    const [tokenClient, setTokenClient] = useState(null);

  useEffect(() => {
    const CLIENT_ID = '550258123318-tembu4t1v0tdmc2v4fapb7q6cih03m3q.apps.googleusercontent.com';
    const API_KEY = 'AIzaSyCPWUJbiYCHJsEVijaRdAKzg-udbKfYNeQ'; // Replace with your API key
    const DISCOVERY_DOC = 'https://sheets.googleapis.com/$discovery/rest?version=v4';
    const SCOPES = 'https://www.googleapis.com/auth/drive.file';

    let gapiInited = false;
    let gisInited = false;

    const gapiLoaded = () => {
      window.gapi.load('client', initializeGapiClient);
    };

    const initializeGapiClient = async () => {
      await window.gapi.client.init({
        apiKey: API_KEY,
        discoveryDocs: [DISCOVERY_DOC],
      });
      gapiInited = true;
      maybeEnableButtons();
    };

    const gisLoaded = () => {
      const tokenClient = window.google.accounts.oauth2.initTokenClient({
        client_id: CLIENT_ID,
        scope: SCOPES,
        callback: '', // defined later
      });
      setTokenClient(tokenClient);
      gisInited = true;
      maybeEnableButtons();
    };

    const maybeEnableButtons = () => {
      if (gapiInited && gisInited) {
        document.getElementById('authorize_button').style.visibility = 'visible';
      }
    };

    gapiLoaded();
    gisLoaded();
  }, []);

  const handleAuthClick = async () => {
    if (tokenClient) {
      tokenClient.callback = async (resp) => {
        if (resp.error !== undefined) {
          throw resp;
        }
        document.getElementById('signout_button').style.visibility = 'visible';
        document.getElementById('authorize_button').innerText = 'Refresh';
        await listMajors();
      };

      if (window.gapi.client.getToken() === null) {
        // Prompt the user to select a Google Account and ask for consent to share their data
        // when establishing a new session.
        tokenClient.requestAccessToken({ prompt: 'consent' });
      } else {
        // Skip display of account chooser and consent dialog for an existing session.
        tokenClient.requestAccessToken({ prompt: '' });
      }
    }
  };

  return (
    <div className="google-auth">
      <button id="authorize_button" onClick={handleAuthClick}>
        Authorize
      </button>
      <button id="signout_button" onClick={handleSignoutClick}>
        Sign Out
      </button>

      <pre id="content" style={{ whiteSpace: 'pre-wrap' }}></pre>
    </div>
  );
};

export default Auth;