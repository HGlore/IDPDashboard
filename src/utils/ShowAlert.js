import Swal from "sweetalert2";

export const sweetShowWarning = (message) => {
    Swal.fire({
        title: "IDP says",
        text: message,
        icon: "warning",
    });
};