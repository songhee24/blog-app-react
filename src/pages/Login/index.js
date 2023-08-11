import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "./Login.module.scss";

export const Login = () => {
  return (
    <Paper classes={{ root: styles.root }}>
      <Typography classes={{ root: styles.title }} variant="h5">
        Вход в аккаунт
      </Typography>
      <TextField
        className={styles.field}
        label="E-Mail"
        error
        helperText="Неверно указана почта"
        fullWidth
      />
      <TextField className={styles.field} label="Пароль" fullWidth />
      <Button size="large" variant="contained" fullWidth>
        Войти
      </Button>
    </Paper>
  );
};
