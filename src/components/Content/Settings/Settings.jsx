import React from "react";
import styles from "./settings.module.scss";
import { InputSwitch } from "primereact/inputswitch";
import useLocalStorage from "use-local-storage";

export const Settings = (props) => {
  const [checked, setChecked] = useLocalStorage(false);

  const switchTheme = (e) => {
    setChecked(e.value);
    props.switchTheme();
  };

  return (
    <section className={styles.settings}>
      <h2>Settings</h2>
      <div className={styles.settingItem}>
        <InputSwitch checked={checked} onChange={switchTheme} />

        <p className="pl-3">Light mode</p>
      </div>
    </section>
  );
};
