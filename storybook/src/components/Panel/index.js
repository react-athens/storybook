import React from "react"

import styles from "./module.css"


const Panel = ({ children }) => (
  <div className={styles.h1} >
    {children}
  </div>
)

export default {
  Panel,
}