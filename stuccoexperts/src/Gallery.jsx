import React, { Component } from "react"

import "./Gallery.css"
import pic_1 from "./pics/IMG_5215.jpg"
import pic_2 from "./pics/IMG_5216.jpg"
import pic_3 from "./pics/IMG_5217.jpg"
import pic_4 from "./pics/IMG_5218.jpg"
import pic_5 from "./pics/IMG_5219.jpg"
import pic_6 from "./pics/IMG_5220.jpg"
import pic_7 from "./pics/IMG_5221.jpg"
import pic_9 from "./pics/IMG_5223.jpg"
import pic_10 from "./pics/IMG_5224.jpg"
import pic_11 from "./pics/IMG_5225.jpg"
import pic_12 from "./pics/IMG_5226.jpg"
import pic_13 from "./pics/IMG_5227.jpg"
import pic_17 from "./pics/IMG_5230.jpg"
import pic_18 from "./pics/IMG_5231.jpg"
import pic_19 from "./pics/IMG_5232.jpg"
import pic_20 from "./pics/IMG_5233.jpg"
import pic_21 from "./pics/IMG_5234.jpg"
import pic_22 from "./pics/IMG_5235.jpg"
import pic_23 from "./pics/IMG_5236.jpg"
import pic_24 from "./pics/IMG_5237.jpg"
import pic_25 from "./pics/IMG_5238.jpg"
import pic_26 from "./pics/IMG_5239.jpg"
import pic_27 from "./pics/IMG_5240.jpg"
import pic_28 from "./pics/IMG_5241.jpg"
import pic_29 from "./pics/IMG_5242.jpg"
import pic_30 from "./pics/IMG_5243.jpg"
import pic_31 from "./pics/IMG_5244.jpg"
import pic_32 from "./pics/IMG_5245.jpg"
import pic_33 from "./pics/IMG_5246.jpg"
import pic_34 from "./pics/IMG_5247.jpg"
import pic_35 from "./pics/IMG_5248.jpg"
import pic_36 from "./pics/IMG_5249.jpg"
import pic_37 from "./pics/IMG_5250.jpg"
import pic_38 from "./pics/IMG_5251.jpg"
import pic_39 from "./pics/IMG_5252.jpg"

class Main extends Component {
  state = {
    index: 0,
    picList: [
      pic_1,
      pic_2,
      pic_3,
      pic_4,
      pic_5,
      pic_6,
      pic_7,
      pic_9,
      pic_10,
      pic_11,
      pic_12,
      pic_13,
      pic_17,
      pic_18,
      pic_19,
      pic_20,
      pic_21,
      pic_22,
      pic_23,
      pic_24,
      pic_25,
      pic_26,
      pic_27,
      pic_28,
      pic_29,
      pic_30,
      pic_31,
      pic_32,
      pic_33,
      pic_34,
      pic_35,
      pic_36,
      pic_37,
      pic_38,
      pic_39,
    ],
  }

  onClickNext = () => {
    if (this.state.index + 1 === this.state.picList.length) {
      this.setState({
        index: 0,
      })
    } else {
      this.setState({
        index: this.state.index + 1,
      })
    }
  }

  onClickPrevious = () => {
    if (this.state.index - 1 === -1) {
      this.setState({
        index: this.state.picList.length - 1,
      })
    } else {
      this.setState({
        index: this.state.index - 1,
      })
    }
  }

  render() {
    return (
      <div className="gallery">
        <img src={this.state.picList[this.state.index]} />
        <button onClick={this.onClickPrevious}> Previous </button>
        <button onClick={this.onClickNext}> Next </button>
      </div>
    )
  }
}

export default Main

/*
const Gallery = () => (
    <div className="gallery">
        <a target="_blank" href={facade}>
            <img src={facade} alt="Stucco Wall"/>
        </a>
        <div className="desc">this is a building check this shit out</div>
    </div>
)
export default Gallery
*/
