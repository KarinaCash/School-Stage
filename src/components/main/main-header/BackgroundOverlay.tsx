import React from 'react';
import styled from '@emotion/styled';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9); // Полупрозрачный черный цвет
`;

interface OverlayProps {
  show: boolean;
}

const BackgroundOverlay: React.FC<OverlayProps> = ({ show }) => {
  return show ? <Overlay /> : null;
};

export default BackgroundOverlay;
