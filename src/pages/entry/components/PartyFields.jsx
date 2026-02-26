import FieldCard from "./FieldCard.jsx";

const PartyFields = ({titleName}) => {
    const fields = {
        Name: "HUMBLE/ATLANTIC COAST IMPORT DISTRIBUTORS",
        ContactName: "JACK SKORSKI",
        Phone: "732-364-3254",
        AddressLine1: "1234 SWARTHMORE AVE,",
        AddressLine2: "",
        City: "LAKEWOOD",
        State: "NJ",
        ZipCode: "08701"
    };

    return (<div className="p-4 border rounded-md shadow-sm bg-white">
        {/* Title */}
        {titleName && (
            <h2 className="flex items-center justify-center text-lg font-bold text-gray-800 mb-4">{titleName}</h2>)}

        {/* Name */}
        <FieldCard
            name="Name"
            value={fields.Name}
            placeholder="Name..."
            fieldWidth="100%"
        />

        {/* ContactName and Phone on same row */}
        <div className="flex gap-4">
            <div className="flex-1">
                <FieldCard
                    name="ContactName"
                    value={fields.ContactName}
                    placeholder="Contact Name..."
                    fieldWidth="100%"
                />
            </div>
            <div className="flex-1">
                <FieldCard
                    name="Phone"
                    value={fields.Phone}
                    placeholder="Phone..."
                    fieldWidth="100%"
                />
            </div>
        </div>

        {/* AddressLine1 */}
        <FieldCard
            name="AddressLine1"
            value={fields.AddressLine1}
            placeholder="Address Line 1..."
            fieldWidth="100%"
        />

        {/* AddressLine2 */}
        <FieldCard
            name="AddressLine2"
            value={fields.AddressLine2}
            placeholder="Address Line 2..."
            fieldWidth="100%"
        />

        {/* City, State, ZipCode on same row */}
        <div className="flex gap-4">
            <div className="flex-1">
                <FieldCard
                    name="City"
                    value={fields.City}
                    placeholder="City..."
                    fieldWidth="100%"
                />
            </div>
            <div className="flex-1">
                <FieldCard
                    name="State"
                    value={fields.State}
                    placeholder="State..."
                    fieldWidth="100%"
                />
            </div>
            <div className="flex-1">
                <FieldCard
                    name="ZipCode"
                    value={fields.ZipCode}
                    placeholder="Zip Code..."
                    fieldWidth="100%"
                />
            </div>
        </div>
    </div>);
};

export default PartyFields;