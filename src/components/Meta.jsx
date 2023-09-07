//import React from "react";
import Head from "next/head";

const Meta = () => {
  return (
      <Head>
      <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Welcome to GitVeu a Web App that display repos of users input to a form.
       My name is Adeola Abdulramon, and I developed this app from scratch using Next.js"
        />

        {/* <!-- Google / Search Engine Tags --> */}
        <meta itemprop="name" content="GitVeu Web App" />
        <meta
          name="description"
          content="Welcome to GitVeu a Web App that display repos of users input to a form.
  My name is Adeola Abdulramon, and I developed this app from scratch using Next.js"
        />

        {/* <!-- Facebook Meta Tags --> */}
        <meta
          property="og:url"
          content="https://github.com/KrownWealth/GitVeu"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="GitVeu Web App" />
        <meta
          name="og:description"
          content="Welcome to GitVeu a Web App that display repos of users input to a form.
       My name is Adeola Abdulramon, and I developed this app from scratch using Next.js"
        />
        {/* <!-- Reference screenshot of updated site's header in content --> */}

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="GitVeu Web App" />
        <meta
          name="og:description"
          content="A web app that generate the GitHub repos of users you input to a form."
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="" />
        <meta
          name="description"
          content="A web app that generate the GitHub repos of users you input to a form."
        />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <title>GitView Web App</title>
      </Head>
  );
};

Meta.defaultProps = {
  title: "GitVeu",
  keywords: "A web app that displays the tweets of users input in a form",
  description: "Get the latest of this app from github repo",
};

export default Meta;
