// types.ts
export interface Address {
  country: string;
  city: string;
  location: string;
}

export interface Social {
  instagram?: string;
  facebook?: string;
  twitter?: string;
  youtube?: string;
  linkedin?: string;
}

export interface Contact {
  email: string;
  phone?: string;
  address: Address;
}

export interface Brand {
  id: string;
  _id?: string;
  name: string;
  logo: string;
  description?: string;
  website: string;
  contact: Contact;
  social: Social;
  createdAt?: string;
  updatedAt?: string;
}