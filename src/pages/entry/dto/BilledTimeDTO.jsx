export const billedTimeDTO = (billedTime) => {
    return {
        time: billedTime?.time ?? null,
        billed: billedTime?.billed ?? null
    }
}