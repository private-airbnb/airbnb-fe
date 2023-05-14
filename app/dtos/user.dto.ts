import { UserStatus, UserType } from '../enums/user.enum';
import { UnexpectedFields } from './common/unexpected-fields.dto';

export interface UserCreateApi extends UnexpectedFields {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  telephone: string;
  hasAcceptedTerms: boolean;
  organizationID: string;
  role: string;
}

export interface UserUpdateDto extends UnexpectedFields {
  email?: string;
  firstName?: string;
  lastName?: string;
  telephone?: string;
  ldfUserUid?: string;
}

export interface UserDto extends UnexpectedFields {
  email: string;
  firstName: string;
  lastName: string;
  telephone: string;
  isMainProducer: boolean;
  isMainPurchaser: boolean;
  roles: UserRole;
}

export interface UserRole {
  type: UserType;
  status: UserStatus;
}

export interface UserFormValidation {
  errorForm: Record<string, boolean>;
  isError: boolean;
}
