import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Loading from '../components/common/loading';
import PageLoader from 'next/dist/client/page-loader';
import Layout from "../components/common/layout";
import styles from '../../styles/Navbar.module.scss';

const MyApp = ({
  Component, 
  pageProps,
}: AppProps) => {    
    const router = useRouter();
    const [pageLoading, setPageLoading] =useState<boolean>(false);

    useEffect(() => {
        const handleStart = (url: string) => {
          if (url !== router.pathname) {
            setPageLoading(true);
          }
        };
    
        const handleComplete = () => {
          setPageLoading(false);
        };

        // Add this code to handle direct URL access
        const path = window.location.pathname;
        if (path !== '/') {
          router.replace(path);
        }

        // Disable automatic scroll restoration
        if ('scrollRestoration' in window.history) {
          window.history.scrollRestoration = 'manual';
        }

        router.events.on('routeChangeStart', handleStart);
        router.events.on('routeChangeComplete', handleComplete);
        router.events.on('routeChangeError', handleComplete);


        return () => {
        router.events.off('routeChangeStart', handleStart);
        router.events.off('routeChangeComplete', handleComplete);
        router.events.off('routeChangeError', handleComplete);
      };
    }, []); // Empty array ensures this runs only once when the component mounts

return (
  <Layout pageLoading={pageLoading}>
      {pageLoading ? <Loading/> :  <Component {...pageProps} />}
  </Layout>

)
}

export default MyApp
