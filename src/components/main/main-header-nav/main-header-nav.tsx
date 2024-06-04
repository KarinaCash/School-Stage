import React from "react";
import { Nav1, Navigation, Navigation1 } from './main-header-nav.style'
import { Link } from '../../all/all-link';
import {URLs} from '../../../../src/__data__/urls';

interface NavProps {
  onLoginClick: () => void; // Указываем тип пропса onLoginClick
}

const Nav: React.FC<NavProps> = ({ onLoginClick }) => ( // Принимаем функцию onLoginClick как пропс
  <Nav1>
    {URLs.about && <Link href={URLs.teachers}>
      <Navigation>О нас</Navigation>
    </Link>}
    {URLs.teachers && <Link href={URLs.teachers}>
      <Navigation>Педагоги</Navigation>
    </Link>}
    <Navigation1 onClick={onLoginClick}>Кабинет</Navigation1> {/* Вызываем функцию onLoginClick при клике на "Кабинет" */}
  </Nav1>
);
export default Nav;
