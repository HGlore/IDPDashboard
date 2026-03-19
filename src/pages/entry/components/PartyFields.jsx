import FieldCard from "./FieldCard.jsx";

const PartyFields = ({ titleName, fieldsData, setEntry, parentKey }) => {
    const fields = {
        Name: fieldsData?.name,
        ContactName: fieldsData?.contactName,
        Phone: fieldsData?.phone,
        AddressLine1: fieldsData?.addressLine1,
        AddressLine2: fieldsData?.addressLine2,
        City: fieldsData?.city,
        State: fieldsData?.state,
        ZipCode: fieldsData?.zipCode,
    };

    return (
        <div className="p-4 border rounded-md shadow-sm bg-white">
            {titleName && (
                <h2 className="flex items-center justify-center text-lg font-bold text-gray-800">{titleName}</h2>
            )}

            <FieldCard
                label="Name"
                keyField={"name"}
                value={fields.Name}
                placeholder="Name..."
                fieldWidth="100%"
                setEntry={setEntry}
                parentKey={parentKey}
            />

            <div className="flex gap-4">
                <FieldCard
                    label="ContactName"
                    keyField={"contactName"}
                    value={fields.ContactName}
                    placeholder="Contact Name..."
                    fieldWidth="100%"
                    className="flex-1"
                    setEntry={setEntry}
                    parentKey={parentKey}
                />
                <FieldCard
                    label="Phone"
                    keyField={"phone"}
                    value={fields.Phone}
                    placeholder="Phone..."
                    fieldWidth="100%"
                    className="flex-1"
                    setEntry={setEntry}
                    parentKey={parentKey}
                />
            </div>

            <FieldCard
                label="AddressLine1"
                keyField={"addressLine1"}
                value={fields.AddressLine1}
                placeholder="Address Line 1..."
                fieldWidth="100%"
                setEntry={setEntry}
                parentKey={parentKey}
            />
            <FieldCard
                label="AddressLine2"
                keyField={"addressLine2"}
                value={fields.AddressLine2}
                placeholder="Address Line 2..."
                fieldWidth="100%"
                setEntry={setEntry}
                parentKey={parentKey}
            />

            <div className="flex gap-4">
                <FieldCard label="City" keyField={"city"} value={fields.City} placeholder="City..." fieldWidth="100%" className="flex-1" setEntry={setEntry} parentKey={parentKey} />
                <FieldCard label="State" keyField={"state"} value={fields.State} placeholder="State..." fieldWidth="100%" className="flex-1" setEntry={setEntry} parentKey={parentKey} />
                <FieldCard label="ZipCode" keyField={"zipCode"} value={fields.ZipCode} placeholder="Zip Code..." fieldWidth="100%" className="flex-1" setEntry={setEntry} parentKey={parentKey} />
            </div>
        </div>
    );
};

export default PartyFields;