import{useState,useEffect} from 'react'
import'./Card.css'


export default function Card({props}) {





    const[product,setProduct]=useState([])
    const[filtered,setFiltered]=useState([])
    


    useEffect(()=>{
      userCards();

    })

    const userCards=()=>{
      fetch("https://fakestoreapi.com/products")
      .then((res)=>res.json())
      .then((data)=>{
        console.log(data) 
        setProduct(data)
        const finalData=product.slice(0,3)
        
        setFiltered(finalData)
        console.log(filtered)
        
       

      })
    }
  

   


















  return (


    filtered.length>0 &&
    <div className='mainContainer'>
      {filtered.map((ele)=>{
        return(
          <div className='box'>
        <img src={ele.image} alt="" />
        <h4>{ele.title}</h4>
        <h5>{ele.price}</h5>
        <button>View Product</button>

      </div>
      

        )
      })


      }


      

      

     
 
    </div>
    
  )
}

