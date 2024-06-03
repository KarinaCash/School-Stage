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
  NextButton,
  DivTXT,
  DivNAME,
} from "./teachers-header.style";
import { landing } from "../../../assets/images";
import { Link } from "../../all/all-link";
import { URLs } from "../../../../src/__data__/urls"
import prevArrow from "../../../assets/images/ykaz_left.png";
import nextArrow from "../../../assets/images/ykaz_right.png";

export const Header = () => {
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
    fetch(`${URLs.api.main}/teachers`)
    .then(response =>
      {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json()})
    .then(data => {
      setTeachersData(data.data);
    }).catch(error => {console.log(error)});
  }, [])
  
  console.log(teachersData);

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
        {
          teachersData[currentSlide] && (
        <Image>
            <Art><Im src={landing[teachersData[currentSlide].imageUrl]} alt={`Teacher ${currentSlide + 1}`} /></Art>
            <DivNAME>{teachersData[currentSlide].name}</DivNAME>
            <DivTXT>{teachersData[currentSlide].status}</DivTXT>
        </Image>
          )
        }
        <NextButton onClick={nextSlide}><img src={nextArrow} alt="Next" /></NextButton>
      </Slider>
    </Header1>
  );
};