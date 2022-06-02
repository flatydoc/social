import React, { useEffect, useState } from "react";
import styles from "./friends.module.scss";
import axios from "axios";
import { config } from "../../../config";

export const Friends = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      await axios
        .get(`${config.apiUrl}/api/users`, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => setUsers(res.data));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className={styles.friends}>
      <h2>Friends</h2>
      {users.map((user, index) => {
        return (
          <div key={index}>
            <div>{index + 1}</div>
            <div>{user.name}</div>
          </div>
        );
      })}
    </section>
  );
};
