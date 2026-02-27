import Swal from "sweetalert2";

export const sweetShowWarning = async (title, message) => {
    return  Swal.fire({
        title: title,
        text: message,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Remove Item",
        cancelButtonText: "Cancel"
    });
};