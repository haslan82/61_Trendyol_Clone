interface AuthState {
   isLogin: boolean;
   user:User | null;
   pending: boolean;
   error: any;

  }
  interface User {
    name: string;
    email: string;
    password: string;
    token: string;
    id: number;
    
  }
  
  export type {AuthState,User};