//import PagesManifestPlugin from 'next/dist/build/webpack/plugins/pages-manifest-plugin'
import Link from 'next/link'
import Plugin from '../plugin'
import styles from './plugin-list.module.css'

/*
model link
<Link
          key={plugin.name}
          href="/store/[name]"
          as={`/store/${plugin.name}`}
        >
*/

export default ({ query, plugins, filteredBy }) =>
  filteredBy === 'featured' ? (
    <div className={styles.featuredWrapper}>
      {plugins.map((plugin) => (
        <Link
          key={plugin.name}
          href="https://example.com"         
        >
          <a className={styles.featuredElemContent}>
            <Plugin {...plugin} query={query} featured={true} />
          </a>
        </Link>
      ))}
    </div>
  ) : (
    <div className={styles.listWrapper}>
      {plugins.map((plugin) => (

        <Link
          key={plugin.name}
          href="https://example.com"         
        >
          <a className={styles.listElemContainer}>
            <div className={styles.listElemContent}>
              <Plugin {...plugin} query={query} featured={false} />
            </div>
          </a>
        </Link>
      
      ))}
    </div>
  )
