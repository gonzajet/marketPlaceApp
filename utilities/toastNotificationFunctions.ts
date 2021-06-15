import { toast, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const toastDefaultOptions: ToastOptions = {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: '',
    style: { fontSize: "20px" }
};

function manageToastOptions(toastOptions: ToastOptions): ToastOptions {
    return { ...toastDefaultOptions, ...toastOptions };
}

function error(toastText: string, toastOptions: ToastOptions = {}): void {
    const options: ToastOptions = manageToastOptions(toastOptions);
    toast.error(toastText, options);
}

function success(toastText: string, toastOptions: ToastOptions = {}): void {
    const options: ToastOptions = manageToastOptions(toastOptions);
    toast.success(toastText, options);
}

function warning(toastText: string, toastOptions: ToastOptions = {}): void {
    const options: ToastOptions = manageToastOptions(toastOptions);
    toast.warning(toastText, options);
}

function info(toastText: string, toastOptions: ToastOptions = {}): void {
    const options: ToastOptions = manageToastOptions(toastOptions);
    toast.info(toastText, options);
}

function dark(toastText: string, toastOptions: ToastOptions = {}): void {
    const options: ToastOptions = manageToastOptions(toastOptions);
    toast.dark(toastText, options);
}

export const toastNotification = {
    error,
    success,
    warning,
    info,
    dark
};
