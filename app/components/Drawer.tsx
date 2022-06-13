import React, { useEffect } from "react";
import styled, { css } from "styled-components";

type Position = "left" | "right";

type DrawerProps = React.PropsWithChildren<{
  handleClose: () => void;
  isOpen: boolean;
  position?: Position;
  width?: number;
}>;

export function Drawer({
  handleClose,
  isOpen,
  children,
  position = "right",
  width = 460,
}: DrawerProps) {
  return (
    <>
      {isOpen && <Mask handleClose={handleClose} />}
      <Container position={position} isOpen={isOpen} width={width}>
        {children}
        <CloseIcon onClick={handleClose}></CloseIcon>
      </Container>
    </>
  );
}

type MaskProps = {
  handleClose: () => void;
};

function Mask({ handleClose }: MaskProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return function restoreScroll() {
      document.body.style.overflow = "initial";
    };
  }, []);
  return <MaskComponent onClick={handleClose} />;
}

const Container = styled.div<{
  isOpen: boolean;
  position: Position;
  width: number;
}>`
  width: ${({ width }) => width}px;
  height: 100%;
  background-color: #fff;
  position: fixed;
  top: 0;
  ${({ position, width }) =>
    position === "left" ? `left: -${width}px` : `right: -${width}px`};
  z-index: 200;
  transition: ${({ position }) => position} 0.3s;
  ${({ isOpen, position }) =>
    isOpen &&
    css`
      ${position === "left" ? "left: 0px" : "right: 0px"};
      transition: ${position} 0.3s;
    `}
  @media (max-width:500px) {
    width: 86%;
  }
`;

const MaskComponent = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  &::after {
    content: " ";
    background-color: rgba(0, 0, 0, 0.4);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const CloseIcon = styled.div`
  width: 30px;
  height: 30px;

  position: absolute;
  top: 30px;
  right: 30px;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  &::after,
  &::before {
    content: " ";
    height: 70%;
    width: 2px;
    background-color: rgba(0, 0, 0, 0.8);
    position: absolute;
    transform-origin: center;
    transition: 0.3s all;
    &:hover {
      background-color: rgba(0, 0, 0, 1);
    }
  }
  &::before {
    transform: rotate(-45deg);
  }
  &::after {
    transform: rotate(45deg);
  }
`;
