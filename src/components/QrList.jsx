import QrCode from "./Qrcode";


function QrList({tables}) {

    // console.log(tables);

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