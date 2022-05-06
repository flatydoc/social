import React from "react";
import styles from "./settings.module.scss";
import { InputSwitch } from "primereact/inputswitch";
import useLocalStorage from "use-local-storage";

export const Settings = (props) => {
  const [checked, setChecked] = useLocalStorage(false);

  return (
    <section className={styles.settings}>
      <h2>Settings</h2>
      <div className={styles.settingItem}>
        <button onClick={props.switchTheme}>
          <InputSwitch
            checked={checked}
            onChange={(e) => setChecked(e.value)}
          />
        </button>
        <p className="pl-3">Light mode</p>
      </div>
    </section>
  );
};
