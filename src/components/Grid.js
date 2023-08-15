export default  ({ data, id, classes }) => {
    return (
        <div id={id}>
            {data.map((item, index) => (
                <div key={index} className={classes.items} >
                    <h3>{item.title}</h3>
                    <img src={item.image} alt={item.title} />
                </div>
            ))}
        </div>
    )
}