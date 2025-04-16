
import Head from 'next/head'

export default function Home() {
  return (
    <><Head>
        <title>BV Consulting</title>
        <meta name="description" content="Consulting digital, automatisation, IA" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold text-center text-blue-900">
          Bienvenue chez BV Consulting 🚀
        </h1>
      </main>
    </>
  )
}