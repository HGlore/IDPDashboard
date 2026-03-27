export const inForwardSlashFormat = (date) => {
    if (!date) return "";
    const [year, month, day] = date.split("-");
    return `${day}/${month}/${year}`;
};

export const inDashFormat = (date) => {
    if (!date) return "";
    const [year, month, day] = date.split("-");
    return `${year}-${month}-${day}`;
};