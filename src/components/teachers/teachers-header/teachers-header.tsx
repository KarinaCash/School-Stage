import React, { useEffect, useState } from "react";
import {
  Info,
  Logo,
  Header1,
  Text,
  Slider,
  Art,
  Image,
  Im,
  PrevButton,
  NextButton
} from "./teachers-header.style";
import { landing } from "../../../assets/images";
import { Link } from "../../all/all-link";

import prevArrow from "../../../assets/images/ykaz_left.png";
import nextArrow from "../../../assets/images/ykaz_right.png";

export const Header = (props) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    landing['teacher1'],
    landing['teacher2'],
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };
  const [teachersData, setTeachersData] = useState([])
  useEffect(() => {
    fetch('/api/teachers')
    .then(response => response.json())
    .then(data => {
      setTeachersData(data.data);
      console.log(data.data)
    })
  }, [])
  

  return (
    <Header1>
      <Logo>
        <Link href="/school-stage">
          <img src={landing['logo1']} alt="Логотип School Stage" />
        </Link>
      </Logo>
      <Info>
        <Text>
          <h2>Педагоги</h2>
          <p>Все наши педагоги имеют высшее педагогическое образование и опыт работы с детьми. Также каждый педагог проходит дополнительное обучение в соответствии с нашей программой.</p>
        </Text>
      </Info>
      <Slider>
        <PrevButton onClick={prevSlide}><img src={prevArrow} alt="Previous" /></PrevButton>
        <Image>
          <Art><Im src={images[currentSlide]} alt={`Teacher ${currentSlide + 1}`} /></Art>
        </Image>
        <NextButton onClick={nextSlide}><img src={nextArrow} alt="Next" /></NextButton>
      </Slider>
    </Header1>
  );
};