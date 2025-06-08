import Head from 'next/head';
import "../../public/assets/css/plugins/fontawesome.css";
import "../../public/assets/css/plugins/magnifying-popup.css";
import "../../public/assets/css/plugins/swiper.css";
import "../../public/assets/css/plugins/metismenu.css";
import "../../public/assets/css/vendor/bootstrap.min.css";
import 'react-modal-video/css/modal-video.min.css';

// Import your custom styles LAST to override plugin styles
import "../../public/assets/css/style.css";

import Script from 'next/script';



export const metadata = {
  title: "JustJobs.Info - Resume Audits and Job Finding",
  description: "Make Finding Jobs Easier",
  icons: {
    icon: "/assets/images/logo/justjobslogo.png", // Ensure the path is correct
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>JustJobs.Info - Resume Audits and Job Finding</title>
        <meta name="author" content="reactheme" />
        <meta name="description" content="JustJobs.Info - Resume Audits and Job Finding" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/images/fav.png" />
      </Head>
      <body className='index-one'>

        {children}



        <Script
          src="/assets/js/plugins/smooth-scroll.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
