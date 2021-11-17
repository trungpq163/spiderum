import { TypeOptions } from 'react-toastify';

export interface INotificationPayload {
  message: string;
  type?: TypeOptions;
  title?: string;
}
