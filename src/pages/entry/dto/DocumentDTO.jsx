export const documentDTO = (document) => {
    return {
        id: document.id,
        imageName: document.imageName,
        companyID: document.companyID,
        startTime: document.startTime,
        endTime: document.endTime,
        image: document.image,
        accountType: document.accountType,
        detectedAccType: document.detectedAccType,
        bolNumber: document.bolNumber,
        masterBolNumber: document.masterBolNumber,
        poNumber: document.poNumber,
        quoteNumber: document.quoteNumber,
        terms: document.terms,
        shipperNumber: document.shipperNumber,
        proNumber: document.proNumber,
        raNumber: document.raNumber,
        eControlNumber: document.eControlNumber,
        driverNumber: document.driverNumber,
        runNumber: document.runNumber,
        cubicFeet: document.cubicFeet,
        timeDeparted: document.timeDeparted,
        timeArrived: document.timeArrived,
        date: document.date,
        status: document.status,
        archive: document.archive,

        shipper: document.shipper && {
            id: document.shipper.id,
            name: document.shipper.name,
            contactName: document.shipper.contactName,
            phone: document.shipper.phone,
            addressLine1: document.shipper.addressLine1,
            addressLine2: document.shipper.addressLine2,
            city: document.shipper.city,
            state: document.shipper.state,
            zipCode: document.shipper.zipCode
        },

        consignee: document.consignee && {
            id: document.consignee.id,
            name: document.consignee.name,
            contactName: document.consignee.contactName,
            phone: document.consignee.phone,
            addressLine1: document.consignee.addressLine1,
            addressLine2: document.consignee.addressLine2,
            city: document.consignee.city,
            state: document.consignee.state,
            zipCode: document.consignee.zipCode
        },

        billTo: document.billTo && {
            id: document.billTo.id,
            name: document.billTo.name,
            contactName: document.billTo.contactName,
            phone: document.billTo.phone,
            addressLine1: document.billTo.addressLine1,
            addressLine2: document.billTo.addressLine2,
            city: document.billTo.city,
            state: document.billTo.state,
            zipCode: document.billTo.zipCode
        },

        instructions: document.instructions && {
            id: document.instructions.id,
            code: document.instructions.code,
            line: document.instructions.line
        },

        totals: document.totals && {
            id: document.totals.id,
            totalPalletCnt: document.totals.totalPalletCnt,
            totalHandlingUnit: document.totals.totalHandlingUnit,
            totalPieces: document.totals.totalPieces,
            totalWeight: document.totals.totalWeight
        },

        items: document.items?.map(item => ({
            keyId: item.keyId ?? Date.now(),
            id: item.id ?? 0,
            archive: item.archive ?? 0,
            clss: item.clss,
            description: item.description,
            dimension: item.dimension,
            documentTableID: item.documentTableID ?? 0,
            handlingUnit: item.handlingUnit,
            nmfc: item.nmfc,
            packageType: item.packageType,
            pallet: item.pallet,
            pieces: item.pieces,
            weight: item.weight
        })) || []
    };
};