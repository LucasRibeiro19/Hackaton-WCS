function Menu({nom,img, handleChoix, isChoix, id}) {

    return ( 
        <>
        <img src={img} height='200px'/>
        <h2>{nom}</h2>
        <button onClick={handleChoix} name={id} value={nom} style={isChoix(nom) ? {backgroundColor:'red'} : {backgroundColor:'grey'}}> je choisis</button>
        </>
     );
}

export default Menu;