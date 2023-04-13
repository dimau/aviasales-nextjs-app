import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import SearchForm from "../features/search-panel/ui/SearchForm/SearchForm";
import SearchResults from "../features/search-results/ui/SearchResult/SearchResult";

export default function Home() {
  return (
    <>
      <Head>
        <title>Flight Search</title>
        <meta name="description" content="Demo application based on Aviasales API" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <SearchForm/>
        <SearchResults/>
      </main>
    </>
  )
}
