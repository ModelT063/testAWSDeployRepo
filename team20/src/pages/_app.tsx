import '@/styles/globals.css'
import type { AppProps } from 'next/app'
/*
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
*/

import Navbar from '../components/Navbar';

import { Amplify } from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

function App({ signOut, user }) {
  return (
    <>
      <div>
        <Navbar/>
      </div>
      <h1>HomePage</h1>
      <h1>Hello {user.username}</h1>
      <button onClick={signOut}>Sign out</button>
    </>
  );
}

export default withAuthenticator(App);
