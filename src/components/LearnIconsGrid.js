import './ui/learnIconsGrid.css';


export default function LearnIconsGrid(){

  //Dummy Data
  const learnData = [
  {
    title: 'Home Roasting',
    image : "https://www.homegrounds.co/wp-content/uploads/2019/10/learn-1.png"
  },
  {
    title: 'Choosing Coffee Gear',
    image: "https://www.homegrounds.co/wp-content/uploads/2019/10/learn-2.png"
  },
  {
    title: 'Choosing a Brew Method',
    image: 'https://www.homegrounds.co/wp-content/uploads/2019/10/learn-3.png'
  },
  {
    title: 'Choosing Coffee Beans',
    image: 'https://www.homegrounds.co/wp-content/uploads/2019/10/learn-4.png'
  },
  {
    title: 'Espresso Brewing',
    image: 'https://www.homegrounds.co/wp-content/uploads/2019/10/learn-5.png'
  },
  {
    title: 'Manual Brewing',
    image: 'https://www.homegrounds.co/wp-content/uploads/2019/10/learn-6.png'
  }
  ]

  const LearnGrid = ({ data }) => {
    return (
      <div id="learn-grid">
        {data.map((item, index) => (
          <div key={index} className="learn-grid-item" >
            <h3>{item.title}</h3>
            <img src={item.image} alt={item.title} />
          </div>
        ))}
      </div>
    )
  }


  return (
    <div>
      <h2>What Do You Want To Learn ?</h2>
      <LearnGrid data={learnData} />
    </div>
  )
}