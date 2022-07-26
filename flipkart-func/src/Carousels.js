import React from 'react'

const Carousels = () => {
  return (
    <>
    
    <div id="carouselExampleControls" className="carousel slide mt-3" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active carousel-image-div">
            <img src="https://rukminim1.flixcart.com/flap/1688/280/image/cae6a856c2144af8.jpg?q=50" className="d-block w-100 img-fluid" alt="..." />
            </div>
            <div className="carousel-item">
            <img src="https://rukminim1.flixcart.com/flap/844/140/image/0f004b011ac6a86f.jpg?q=50" className="d-block w-100 img-fluid" alt="..." />
            </div>
            <div className="carousel-item">
            <img src="https://rukminim1.flixcart.com/flap/844/140/image/8b6f57450be3402c.jpg?q=50" className="d-block w-100 img-fluid" alt="..." />
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
    
    </>
)
  // return (
  //   <div><div id="carouselExampleControlsNoTouching" class="carousel slide " data-bs-touch="false" data-bs-interval="false">
  //   <div class="carousel-inner">
  //     <div class="carousel-item active">
  //       <img type="button"  src="https://rukminim1.flixcart.com/flap/1688/280/image/cae6a856c2144af8.jpg?q=50" class="d-block w-100" alt="..."/>
  //     </div>
  //     <div class="carousel-item">
  //       <img type="button" src="https://rukminim1.flixcart.com/flap/844/140/image/8b6f57450be3402c.jpg?q=50" class="d-block w-100" alt="..."/>
  //     </div>
  //     <div class="carousel-item">
  //       <img type="button" src="https://rukminim1.flixcart.com/flap/844/140/image/0f004b011ac6a86f.jpg?q=50" class="d-block w-100" alt="..."/>
  //     </div>
      
  //   </div>
  //   <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
  //     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  //     <span class="visually-hidden">Previous</span>
  //   </button>
  //   <button class="carousel-control-next"type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
  //     <span class="carousel-control-next-icon" aria-hidden="true"></span>
  //     <span class="visually-hidden">Next</span>
  //   </button>
  // </div></div>
  // )
}

export default Carousels