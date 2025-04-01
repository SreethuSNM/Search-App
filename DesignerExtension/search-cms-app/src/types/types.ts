export interface User {
    firstName: string;
    email: string;
  }


  export interface DecodedToken {
    user: {
      firstName: string;
      email: string;
    };
    exp: number;
  }


  
  export interface DecodedToken {
    user: User;
    exp: number; // Expiration time (Unix timestamp)

    // Add other JWT claims as needed
  iat?: number;
  iss?: string;
  }
  
  export interface AuthState {
    user: User; 
    sessionToken: string;
  }


  export interface StoredUser extends User {
    sessionToken: string;
    exp: number;
  }
  