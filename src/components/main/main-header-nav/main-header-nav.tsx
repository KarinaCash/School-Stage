import React from "react";
import { Nav1, Navigation, Navigation1 } from './main-header-nav.style'
import { Link } from '../../all/all-link';

interface NavProps {
  onLoginClick: () => void; // Указываем тип пропса onLoginClick
}

const Nav: React.FC<NavProps> = ({ onLoginClick }) => ( // Принимаем функцию onLoginClick как пропс
  <Nav1>
    <Link href="/school-stage/about">
      <Navigation>О нас</Navigation>
    </Link>
    <Link href="/school-stage/teachers">
      <Navigation>Педагоги</Navigation>
    </Link>
    <Navigation1 onClick={onLoginClick}>Кабинет</Navigation1> {/* Вызываем функцию onLoginClick при клике на "Кабинет" */}
  </Nav1>
);
export default Nav;
