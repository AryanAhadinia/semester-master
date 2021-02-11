import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import university from '../university-bulding.png'
import person from '../person.jpg'
import Tilt from 'react-parallax-tilt';

class Card extends Component {
    state = {  }
    render() { 
        return ( 
       <Tilt> 
        <div className="wrap">
        <div className="drop drop1" dir="rtl">
        <Row className="card-bar" style={{height : '50px', backgroundColor : 'rgba(0, 0, 0, 0.2)'}}>
           <Col sm={8}>
            <div className="uni-name">
               <div className="uni-name-farsi"> دانشگاه صنعتی شریف</div>
               <div className="uni-name-eng"> Sharif University Of Technology</div>
           </div>
           </Col>
           <Col sm={4}></Col>
        </Row>
           <Row style={{height : '100%'}}>
              <Col sm={2}><img src={university} alt="university building" style={{height : '90%' , position : 'absolute', opacity : '0.6',bottom : '-5px',right : '-5px'}}/></Col>
              <Col sm={7} style={{padding : '5px 25px', paddingLeft:'5px', marginTop : '50px'}}>
                 <label> نام خانوادگی</label>
                 <label className="info-field"> جعفری</label>
                 <label> نام</label>
                 <label className="info-field"> محمد</label>
                 <label> شماره دانشجویی</label>
                 <label className="info-field"> 98105654</label>
                 <label> رشته تحصیلی</label>
                 <label className="info-field"> مهندسی کامپیوتر</label>
                 <label> مقطع تحصیلی</label>
                 <label className="info-field"> کارشناسی</label>
              </Col>
              <Col sm={3} className="pattern-horizontal-lines-sm white" style={{ padding:'0' , zIndex : '-1', opacity : '0.9'}}>
                 <img className='person' src={person} alt="Person"/>
               </Col>
   
            </Row>
        </div>
     </div>
     </Tilt>
        
       );
    }
}

export default Card;