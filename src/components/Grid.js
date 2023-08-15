export default  ({ data, id, classes }) => {
    return (
        <div id={id}>
            {data.map((item, index) => (
                <div key={index} className={classes.items} >
                    <img src={item.image} alt={item.title} />
                    <h3>{item.title}</h3>
                </div>
            ))}
        </div>
    )
}