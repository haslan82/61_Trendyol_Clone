
export interface Notification {
    title: string;
    desc: string;
    time: string;
    id: number;
  }
  
  export interface NotificationState {
    notifications: Notification[];
    pending: boolean;
    error: any;
  }
  
  