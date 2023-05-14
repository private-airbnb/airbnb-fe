export interface User {
  id: number;
  organizationID: number;
  userTypeID?: number;
  userID: number;
  producerID?: number;
  purchaserID?: number;
  firstName?: string;
  lastName?: string;
  email?: string;
  telephone?: string;
  loginTime: number;
}
