import React, { useState } from 'react'
import styles from '../app/page.module.css'

const copy = <i className="far fa-copy"></i>

export default function ListItem( {rgb, hex}) {
  const [copied, setCopied] = useState(false);
  const copyToClipboard = (e) => {
    const color = e.target.innerText;
    navigator.clipboard.writeText(color);
  }

  return (
    <li className={styles.color} style={ {background: rgb }}>
      <span onClick={(e) => {
        console.log(e);
        copyToClipboard(e);
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 1000)
      }}>
        {copied ? "Copied!" : hex} {copy}
      </span>
    </li>
  )
}
