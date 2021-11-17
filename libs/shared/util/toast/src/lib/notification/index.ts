import { INotificationPayload } from '@spiderum/shared/util/typing';
import { toast, ToastOptions } from 'react-toastify';

export const showNotification = (payload: INotificationPayload) => {
  const { message, type } = payload;

  const options: ToastOptions = {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };

  switch (type) {
    case 'success':
      toast.success(message, options);
      break;
    case 'error':
      toast.error(message, options);
      break;
    case 'warning':
      toast.warn(message, options);
      break;
    case 'info':
      toast.info(message, options);
      break;
    default:
      toast.info(message, options);
  }
};
