import { File } from '../icons'
import styles from './download-button.module.css'

const DownloadButton = () => {  
    return (
      <a 
        href="https://mssint.com" 
        className={styles.root}
        target="_blank"
        rel="noopener noreferrer"
      >
        <File height={12} width={16} />
        <strong>Learn More</strong>
      </a>
    )
  
}

export default DownloadButton
