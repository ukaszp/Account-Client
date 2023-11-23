export default interface User {
    id: number;
    name: string;
    lastName: string;
    email: string;
    passwordHash: string;
    contactNumber: string;
    gender: boolean;
    whenJoined: string;
    dateOfBirth: string;
    roleId: number;
    role: {
      id: number;
      name: string;
      description: string;
    }}