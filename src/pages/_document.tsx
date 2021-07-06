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
          <meta name="application-name" content="Convert Your Text" />
          <meta
            name="description"
            content="Convert your text simply and quickly to any type of text."
          />
          <meta
            name="keywords"
            content="convert your text, convert text, text convert, simple convert, fast convert"
          />
          <meta name="format-detection" content="telephone=no" />
          <meta property="og:site_name" content="Convert Your Text" />
          <meta
            property="og:title"
            content="Convert Your Text - Simple and Fast"
          />
          <meta property="og:site_name" content="Convert Your Text" />
          <meta
            property="og:description"
            content="Convert your text simply and quickly to any type of text."
          />
          <meta property="og:url" content="https://convertyourtext.com" />
          <meta
            name="twitter:title"
            content="Convert Your Text - Simple and Fast"
          />
          <link rel="shortcut icon" href="favicon.png" type="image/x-png" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
