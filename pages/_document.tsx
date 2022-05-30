import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <title>Bejamas Task | Emmanuel</title>
          <meta
            name="description"
            content="Awesome stock photos that you can use everywhere. Browse millions of high-quality royalty stock images that you can use for your projects."
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
