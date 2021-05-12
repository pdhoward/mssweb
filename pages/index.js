import Page from 'components/page'
import DownloadButton from 'components/download-button'
import heroStyles from 'styles/pages/home/hero.module.css'

import Terminal from 'components/terminal'


export default function HomePage({ latestRelease }) {
 

  return (
    <Page>
      {/**
       * Hero
       */}
      <div className={heroStyles.root}>      
        <div className={heroStyles.terminal}>
          <Terminal />
        </div>
        <div className={heroStyles.download}>
          <DownloadButton fixedWidth  />          
        </div>
      </div>
     

      <style jsx>{`
        .table {
          overflow-x: auto;
        }

        .table:not(:last-child) > table {
          margin: 48px 0;
        }

        .table > table {
          min-width: 500px;
        }

        .table.large {
          width: 900px;
          max-width: 100vw;
          margin-left: -100px;
        }

        .table.large > table {
          width: 900px;
          max-width: 100%;
        }

        #content table thead td {
          color: var(--gray);
          font-size: 12px;
          text-transform: uppercase;
        }

        #content table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 20px;
          table-layout: fixed;
        }

        #content table p {
          margin-bottom: 0;
        }

        #content table p:not(:last-child) {
          margin-bottom: 1rem;
        }

        #content table table.params {
          display: flex;
        }

        #content table table.params tr {
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        #content table table.params tr:not(:last-child) {
          margin-bottom: 1rem;
        }

        #content table table.params tbody td {
          width: 100%;
          border-color: transparent;
          padding: 0;
          color: var(--gray);
        }

        #content table td > * + table.params {
          margin-top: 24px;
        }

        #content td > table {
          margin: 0;
        }

        #content table td {
          vertical-align: top;
          border: 1px solid #444;
          position: relative;
          word-break: break-word;
        }

        #content #config-paths-table td {
          padding: 10px;
        }

        #content #config-paths-table td:not(:first-child) {
          text-align: center;
          width: 66.67%;
        }

        #content #config-paths-table {
          color: #fff;
          margin-top: 0;
        }

        #content #plugins-paths-table td {
          padding: 10px;
        }

        #content #plugins-paths-table td:not(:first-child) {
          text-align: center;
          width: 66.67%;
        }

        #content #plugins-paths-table {
          color: #fff;
          margin-top: 0;
        }

        #content td.soon {
          color: #555;
        }

        #content thead td {
          padding: 10px 24px;
        }

        #content tbody td {
          padding: 24px;
        }

        #content table.config td:nth-child(1),
        #content table.api td:nth-child(1) {
          width: 30%;
          color: var(--gray);
        }

        #content table.config td:nth-child(2),
        #content table.api td:nth-child(2) {
          width: 23%;
          color: var(--gray);
        }

        #content table.config tbody td:first-child {
          color: var(--fg);
        }

        #content table.api tbody td:first-child {
          color: var(--fg);
        }

        #content table.api > tbody > tr > td:nth-child(2) {
          width: 13%;
        }

        #content td > p:first-child {
          margin-top: 0;
        }

        @media screen and (max-width: 900px) {
          .table.large {
            width: 100%;
            max-width: 100%;
            margin-left: 0;
          }
        }

        @media screen and (max-width: 800px) {
          #content table {
            margin-left: 0;
            margin-right: 0;
          }
        }

        @media screen and (max-width: 700px) {
          #content {
            padding: 20px;
          }

          #content h2 {
            margin-top: 0;
          }

          #content h2:first-child {
            padding-top: 0;
          }

          pre {
            white-space: pre-wrap;
            word-wrap: break-word;
            overflow: auto;
          }

          #content table {
            margin-left: 0;
            margin-right: 0;
            margin-bottom: 20px;
          }

          #content .table-note:after {
            margin: 15px 0;
            content: 'Please note: the complete table information is available in bigger resolutions!';
            display: block;
            color: var(--gray);
          }
        }
      `}</style>
    </Page>
  )
}
