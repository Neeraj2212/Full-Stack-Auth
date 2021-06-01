import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./global.module.css";
import { userContext } from "./../userProvider";
import Avatar from "./../image/myAvatar.svg";

const Profile = () => {
  const user = useContext(userContext);
  console.log(Object.keys(user));
  return (
    <div>
      {/* <img src={Avatar} alt="avatar" className={`img-fluid ${styles.avatar}`} /> */}
      <Container className={styles.container}>
        <Row>
          <Col sm={12} md={6} style={{ padding: `1rem` }}>
            <div
              style={{ height: `100%` }}
              className={`${styles.pic} ${styles.col}`}
            >
              <img
                src={Avatar}
                alt="avatar"
                className={`img-fluid ${styles.avatar}`}
              />
              <h3 style={{ marginTop: `1.5rem` }}>
                {user.displayName || "Anonymous"}
              </h3>
            </div>
          </Col>
          <Col sm={12} md={6} style={{ padding: `1rem` }}>
            <div style={{ height: `100%` }} className={styles.col}>
              <div style={{ borderLeft: `8px solid white `, padding: `1rem` }}>
                <em style={{ fontSize: "2rem" }}>{user.email}</em>
              </div>

              <div style={{ margin: `1.5rem auto` }}>
                <p>UID: {user.uid || 123456789}</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Profile;

// import React, { useContext } from "react";
// import { userContext } from "./../userProvider";

// const Profile = () => {
//   const user = useContext(userContext);

//   return (
//     <div>
//       <code>{JSON.stringify(user)}</code>
//     </div>
//   );
// };

// export default Profile;
