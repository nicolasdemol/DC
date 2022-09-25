import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link href="https://rsms.me/inter/inter.css" rel="stylesheet" />
        </Head>

        <body className="loading">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
