import React from 'react'
import styles from "./Inputcontrol.module.css";

function Inputcontrol  ({label,...props}) {
  return (
    <div className={styles.container}>{label && <label>{label}</label>}
    <input type="text" {...props} />

    </div>

  )
}

export default Inputcontrol