import { UserFormValidation } from '../dtos/user.dto';

export const INIT_CREATE_NEW_PASSWORD_ERROR: UserFormValidation = {
  errorForm: {
    password: false,
    confirmedPassword: false,
  },
  isError: false,
};
