import React from "react"

import styles from "./module.css"


const Header1 = ({ children }) => (
  <h1 className={styles.h1} >
    {children}
  </h1>
)
const Header2 = ({ children }) => (
  <h2 className={styles.h2} >
    {children}
  </h2>
)
const Header3 = ({ children }) => (
  <h3 className={styles.h3} >
    {children}
  </h3>
)
const Header4 = ({ children }) => (
  <h4 className={styles.h4} >
    {children}
  </h4>
)
const Header5 = ({ children }) => (
  <h5 className={styles.h5} >
    {children}
  </h5>
)
const Header6 = ({ children }) => (
  <h6 className={styles.h6} >
    {children}
  </h6>
)

const Label = ({ children }) => (
  <label className={styles.label} >
    {children}
  </label>
)

const Text = ({ children }) => (
  <div className={styles.text} >
    {children}
  </div>
)


export default {
  Header1,
  Header2,
  Header3,
  Header4,
  Header5,
  Header6,
  Label,
  Text
}