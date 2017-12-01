import React from "react"

import styles from "./module.css"

console.log(styles)

export default ({ children }) => (
  <div className={styles.container} >
    {children}
  </div>
)