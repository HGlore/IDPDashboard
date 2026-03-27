export const productionDTO = (production = {}) => {
    return {
        productionDate: production?.productionDate,
        startTime: production?.startTime ?? null,
        endTime: production?.endTime ?? null,
        comment: production?.comment ?? ""
    };
};