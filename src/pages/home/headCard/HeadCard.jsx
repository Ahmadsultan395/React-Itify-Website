import "./Headcard.css"
import Home_card from './Head-card-Home'
import homeCardData from './HomeData'

const Headcard=()=>{
    return(<>
<section className='head-card-section'>
    <div className='head-card '>
        {/* <div className='container-fluid my-5'> */}
            {/* <div className='row col-lg-11 mx-auto'> */}
                {/* <div className=' col-md-3  mx-auto d-flex justify-content-center gy-4 flex-wrap' style={{gap:'1rem'}}> */}

        {
            homeCardData.map((value,index)=>{
                return <Home_card key={index} image={value.image} 
                title={value.title} body={value.body}
                />
            })
        }
         {/* </div> */}
            {/* </div> */}
         {/* </div> */}
    </div>
 </section>
    </>)
}
export default Headcard;