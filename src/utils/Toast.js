import toast, {Toaster} from 'react-hot-toast';

// Function to show warning
export const toastShowError = (message) => {
    toast.error(message, {
        position: 'top-center',
        duration: 2000,
    });
};

// Function to show success
export const toastShowSuccess = (message) => {
    toast.success(message, {
        position: 'top-center',
        duration: 2000,
    });
};

export {Toaster};