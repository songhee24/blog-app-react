import { Button, Container } from "@mui/material";
import styles from "./Header.module.scss";

const Header = () => {
  const isAuth = false;

  const onClickLogout = () => {};
  return (
    <div className={styles.root}>
      <Container maxWidth="lg">
        <div className={styles.inner}>
          <a className={styles.logo} href="/">
            <div>ARCHAKOV BLOG</div>
          </a>
          <div className={styles.buttons}>
            {isAuth ? (
              <>
                <a href="/posts/create">
                  <Button variant="contained">Написать статью</Button>
                </a>
                <Button
                  onClick={onClickLogout}
                  variant="contained"
                  color="error"
                >
                  Выйти
                </Button>
              </>
            ) : (
              <>
                <a href="/login">
                  <Button variant="outlined">Войти</Button>
                </a>
                <a href="/register">
                  <Button variant="contained">Создать аккаунт</Button>
                </a>
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;