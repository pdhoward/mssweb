import Head from 'next/head'
import PluginsList from '../plugin-list'
import styles from './search-list.module.css'
import {patterns} from '../../data'
import { useSearch } from 'lib/search-context'

export default () => {
  const { search: query } = useSearch()
  const plugins = patterns.filter(
    ({ name, description }) =>
      name.includes(query) || description.includes(query)
  )

  if (plugins.length > 0) {
    return (
      <>
        <Head>
          <title>{`MSS Patterns - Searching for "${query}"`}</title>
        </Head>
        <PluginsList plugins={plugins} query={query} />
      </>
    )
  }

  return (
    <>
      <Head>
        <title>{`MSS Patterns - No results for "${query}"`}</title>
      </Head>
      <div className={styles.searchError}>
        Your search for "<b>{query}</b>" did not match any patterns 😱{' '}
        <br />
        Please check the spelling of your search term.
        <br />
        Your friends at MSS
      </div>
    </>
  )
}
