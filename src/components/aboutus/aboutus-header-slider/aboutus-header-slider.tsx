import React from "react"

import {
    Image,
    Slider,
    Article,
    Overflow,
    Img
} from "./aboutus-header-slider.style";
import { landing } from "../../../assets/images";

export const HeadSlider = () =>(    
    <div>
          <Slider>
            <div>
              <Overflow>
                <Image>
                  <Article><Img src={landing['slide1']}/></Article>
                </Image>
              </Overflow>
            </div>
          </Slider>
      </div>
)


