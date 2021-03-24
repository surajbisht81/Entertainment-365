import React, { Component } from 'react'  
2
import Carousel from 'react-bootstrap/Carousel'  
3
export class BootstrapCarousel extends Component {  
4
        render() {  
5
  
6
                return (  
7
                        <div>  
8
                         <div class='container-fluid' >  
9
                          <div className="row title" style={{ marginBottom: "20px" }} >  
10
                          <div class="col-sm-12 btn btn-warning">  
11
                          How To Use Bootstrap Carousel In ReactJS  
12
                         </div>  
13
                         </div>  
14
                         </div>  
15
                         <div className='container-fluid' >  
16
                         <Carousel>  
17
                         <Carousel.Item style={{'height':"300px"}} >  
18
                         <img style={{'height':"300px"}}  
19
                         className="d-block w-100"  
20
                        src={'assets/img/img2.jpg'}  />  
21
                           <Carousel.Caption>  
22
                             <h3>First Demo </h3>  
23
                                 </Carousel.Caption>  
24
                                 </Carousel.Item  >  
25
                                 <Carousel.Item style={{'height':"300px"}}>  
26
                                 <img style={{'height':"300px"}}  
27
                                   className="d-block w-100"  
28
                                    src={'assets/img/img1.jpg'}    />  
29
                                       <Carousel.Caption>  
30
                                   <h3>Second Demo</h3>  
31
                                      </Carousel.Caption>  
32
                                         </Carousel.Item>  
33
                                       <Carousel.Item style={{'height':"300px"}}>  
34
                                       <img style={{'height':"300px"}}  
35
                                        className="d-block w-100"  
36
                                         src={'assets/img/img3.jpg'}   />  
37
                                        <Carousel.Caption>  
38
                                          <h3>Third Demo</h3>  
39
                                          </Carousel.Caption>  
40
                                         </Carousel.Item>  
41
                                        </Carousel>  
42
                                </div>  
43
                        </div>  
44
                )  
45
        }  
46
}  
47
  
48
export default BootstrapCarousel 