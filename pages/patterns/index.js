import PluginThemeShowcase from 'components/plugin-theme-showcase'
import { getPluginPreviewImage } from 'lib/plugin'
import {patterns} from '../../data'

export default function PluginIndexPage({ plugins }) {
  return <PluginThemeShowcase plugins={plugins} variant="plugin" />
}

export function getStaticProps() {
  const plugins = patterns
    .filter((p) => p.type === 'pattern' && p.featured === true)
    .map((p) =>  {      
      let obj = {
      ...p,
      preview: getPluginPreviewImage(p.preview.src),
      }      
      return obj
    })   
  
  console.log(plugins)
  return {
    props: {
      plugins,
    },
  }
}
