export enum UserRole {
  CUSTOMER = "CUSTOMER",
  DRIVER = "DRIVER",
  RESTAURANT_USER = "RESTAURANT_USER",
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: UserRole;
  createdAt: Date;
}

export interface HealthCheckResponse {
  status: string;
  timestamp: Date;
}
