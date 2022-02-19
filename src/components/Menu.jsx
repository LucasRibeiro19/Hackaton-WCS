function Menu({nom,img}) {
    console.log(img);
    return ( 
        <>
        <img src={img} height='200px'/>
        <h2>{nom}</h2>
        </>
     );
}

export default Menu;