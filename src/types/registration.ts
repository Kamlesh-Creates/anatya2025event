import { ObjectId } from 'mongodb';

export interface Registration {
  _id?: ObjectId;
  fullName: string;
  email: string;
  phoneNumber: string;
  department: string;
  yearOfStudy: string;
  registrationId: string;
  createdAt: Date;
  updatedAt: Date;
  status: 'active' | 'inactive' | 'confirmed';
}

export interface RegistrationInput {
  fullName: string;
  email: string;
  phoneNumber: string;
  department: string;
  yearOfStudy: string;
}

export interface RegistrationResponse {
  success: boolean;
  message: string;
  registrationId?: string;
  data?: Registration;
  error?: string;
}
