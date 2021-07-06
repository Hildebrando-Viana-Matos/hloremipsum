import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap"
            rel="stylesheet"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="author" content="Hildebrando Viana Matos" />
          <meta name="creator" content="Hildebrando" />
          <meta name="application-name" content="H Lorem Ipsum" />
          <meta
            name="description"
            content="Generate lorem ipsum easily and quickly"
          />
          <meta
            name="keywords"
            content="H Lorem Ipsum, Lorem Ipsum, simple text, text, document text"
          />
          <meta name="format-detection" content="telephone=no" />
          <meta
            property="og:site_name"
            content="H Lorem Ipsum | Create Lorem Ipsum"
          />
          <meta
            property="og:title"
            content="H Lorem Ipsum | Create Lorem Ipsum"
          />
          <meta
            property="og:site_name"
            content="H Lorem Ipsum | Create Lorem Ipsum"
          />
          <meta
            property="og:description"
            content="Generate lorem ipsum easily and quickly"
          />
          <meta property="og:url" content="https://www.hloremipsum.com" />
          <meta
            name="twitter:title"
            content="H Lorem Ipsum | Create Lorem Ipsum"
          />
          <link rel="shortcut icon" href="favicon.png" type="image/x-png" />
          <script
            data-ad-client="ca-pub-8879792659196819"
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          ></script>
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
