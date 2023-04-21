import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import SearchForm from "../features/search-params-panel/ui/SearchForm/SearchForm";
import SearchResults from "../features/low-prices-calendar/ui/SearchResults/SearchResults";

export default function Home() {
  return (
    <>
      <Head>
        <title>Календарь низких цен</title>
        <meta name="description" content="Демо приложение на основе REST API Aviasales" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className={styles.header}>
        <h1>Календарь низких цен</h1>
      </header>

      <main className={styles.main}>
        <SearchForm/>
        <SearchResults/>
      </main>
    </>
  )
}
