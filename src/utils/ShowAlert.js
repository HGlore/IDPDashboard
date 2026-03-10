import Swal from "sweetalert2";

export const sweetShowMessage = async (icon, title, message, confirmButtonText, cancelButtonText) => {
    return  Swal.fire({
        icon: icon, // 'success', 'error', 'warning', 'info', 'question'
        title: title, // The main bold title
        text: message,
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonText: confirmButtonText,
        cancelButtonText: cancelButtonText
    });
};
