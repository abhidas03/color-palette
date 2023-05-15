import React, { useState } from 'react'
import styles from '../app/page.module.css'

const copy = <i className="far fa-copy"></i>

export default function ListItem( {rgb, hex}) {
  const {copied, setCopied} = useState(false);

  return (
    <li className={styles.color} style={ {background: rgb }}>
      <span>{copied ? "Copied!" : hex} {copy}</span>
    </li>
  )
}
