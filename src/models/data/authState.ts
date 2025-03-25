
  interface User {
    name: string;
    email: string;
    password: string;
    token: string;
    id: number;
    
  }
  interface AuthState {
    isLogin: boolean;
    user:User | null;
    pending: boolean;
    error: any;
    token: string | null
 
   }
  export type {AuthState,User};