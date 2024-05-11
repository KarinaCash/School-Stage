import React from "react"

import {Info,
    Logo,
    Header1,
    Text,
    Slider,
    Art,
    Image,
    Overflow,
    Im
} from "./teachers-header.style";
import { landing } from "../../../assets/images";
import { Link } from "../../all/all-link";

export const Header = (props) =>(    
    <Header1>
    <Logo>
      <Link href="/school-stage">
        <img src={landing['logo1']} alt="Логотип School Stage"/>
      </Link>
    </Logo>
        <Info>
            <Text>
            <h2>Педагоги</h2>
            <p>Все наши педагоги имеют высшее педагогическое образование и опыт работы с детьми. Также каждый педагог проходит дополнительное обучение в соответствии с нашей программой.</p>  
            </Text>
        </Info>
      <div>
          <Slider>
            <div >
              <Overflow>
                <Image>
                  <Art><Im src={landing['teacher1']}/></Art>
                </Image>
              </Overflow>
            </div>
        </Slider>
      </div>
  </Header1>
)


