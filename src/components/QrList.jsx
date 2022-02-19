import QrCode from "./Qrcode";


function QrList({tables}) {

    return ( 
        <>
            {tables.map((table, index)=>(
                <QrCode
                table={table}
                key={index}
                />
            ))}
        </>
     );
}

export default QrList;