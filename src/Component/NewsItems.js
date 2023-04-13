import React, { Component } from 'react'

export class NewsItems extends Component {


    render() {
      let {title, description,imageurl,newsurl} = this.props;  
      // ABOVE ARE THE THINGS THAT WE CANNOT CHANGING DYANAMICALLY IT IS STATIC
      //FOR CHANGING THE THINGS DYANAMICALLY WE MAKE THE STATES
      return (
        <div className='my-3'>   {/* MY-3 IS THE CLASS THAT GIVE THE MARGIN IN THE TOP*/}
          <div className="card" style={{width: "18rem"}}>  {/* maked the style as the object type*/}
          {/* Above style must have to make the Object as we are dealing with the classes  */}
              <img src={!imageurl?"https://static.tnn.in/thumb/msid-99180678,updatedat-1680405088448,width-1280,height-720,resizemode-75/99180678.jpg":imageurl} className="card-img-top" alt="..."/>
              <div className="card-body">
                  <h5 className="card-title">{title}</h5>   

                  {/* {title},{description},{imageurl},{newsurl} are fetch from the object this.props */}
                  <p className="card-text">{description}</p>
                  <a rel="noreferrer" href={newsurl} target='_blank' className="btn btn-sm btn-primary" style={{background: "hsl(321, 95%, 47%)",border:"3px solid black",color: "white",fontWeight: "bolder"}}>Read More</a>  
                  {/* btn-sm class used for decreasing the size of Read More Button */}
              </div>
          </div>
        </div>
      )
    }
}

export default NewsItems
