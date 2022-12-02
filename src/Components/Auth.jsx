import {
  Button,
  FormControlLabel,
  Checkbox,
  Box,
  TextField,
} from "@mui/material";

import { useFormik, Form, FormikProvider } from "formik";
import { useNotification, useUser } from "hooks";

function Auth({
  useMutation,
  validationSchema,
  initialValues,
  message,
  children,
  rememberMe = false,
  inputs,
}) {
  const [Auth, { isLoading }] = useMutation();
  const { setUser } = useUser();
  const { Notify, Errofy } = useNotification();
  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnChange: true,
    onSubmit: (body) => {
      // @ts-ignore-next line
      Auth({ body })
        .unwrap()
        .then((user) => {
          setUser(user);
          if (message) Notify(message.title, message.description);
        })
        .catch((e) => {
          console.error(e);
          Errofy(e);
        });
    },
  });
  const { errors, touched, handleSubmit, getFieldProps } = formik;
  return (
    <FormikProvider value={formik}>
      <Box
        component={Form}
        onSubmit={handleSubmit}
        noValidate
        sx={{ mt: 1, minWidth: "90%" }}
      >
        {inputs.map(({ name, outline, ...props }, i) => (
          <TextField
            key={i}
            {...getFieldProps(name)}
            error={touched[name] && Boolean(errors[name])}
            helperText={
              touched[name] && errors[name] ? String(errors[name]) : undefined
            }
            {...props}
            fullWidth
            sx={{ outline:"theme.primary", minWidth: "100%",bgcolor: "background.default" }}
          />
        ))}
        {rememberMe && (
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
        )}
        <Button
          disabled={isLoading}
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Login
        </Button>
        {children}
      </Box>
    </FormikProvider>
  );
}

export default Auth;
