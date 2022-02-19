function Menu({nom,img, handleChoix, isChoix}) {
    console.log(isChoix(nom));
    const bool = isChoix(nom);
    return ( 
        <>
        <img src={img} height='200px'/>
        <h2>{nom}</h2>
        <button onClick={handleChoix} value={nom} style={bool? {backgroundColor:'red'} : {backgroundColor:'grey'}}> je choisis</button>
        </>
     );
}

export default Menu;