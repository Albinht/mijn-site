'use client';

import { SWRConfig } from 'swr';

const fetcher = async (url) => {
  const res = await fetch(url, {
    credentials: 'include'
  });
  
  if (!res.ok) {
    const error = new Error('An error occurred while fetching the data.');
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }
  
  return res.json();
};

export default function SwrProvider({ children }) {
  return (
    <SWRConfig
      value={{
        fetcher,
        onError: (error, key) => {
          if (error.status === 401) {
            // Redirect to login if unauthorized
            window.location.href = '/admin/login';
          }
        },
        revalidateOnFocus: false,
        revalidateOnReconnect: true
      }}
    >
      {children}
    </SWRConfig>
  );
}