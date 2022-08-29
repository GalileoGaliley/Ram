import React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

//https://react-svgr.com/playground/  =>  для преобразования под реакт svg
//Static_Images/feather/ => Сырые, не преобразованные иконки
// const colorIcon = '#505050';
function ShoppingBag() {
  return (
    <Svg
      width={50}
      height={50}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#505050"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round">
      <Path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" />
    </Svg>
  );
}
function Heart() {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#505050"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round">
      <Path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </Svg>
  );
}

function LikedHeart() {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 24 24"
      fill="#f00"
      stroke="#f00"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round">
      <Path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </Svg>
  );
}

function User() {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#505050"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round">
      <Path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
      <Circle cx={12} cy={7} r={4} />
    </Svg>
  );
}
function AlertOctagon() {
  return (
    <Svg
      width={40}
      height={40}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round">
      <Path d="M7.86 2h8.28L22 7.86v8.28L16.14 22H7.86L2 16.14V7.86L7.86 2zM12 8v4M12 16h.01" />
    </Svg>
  );
}
function Setting() {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#505050"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round">
      <Circle cx={12} cy={12} r={3} />
      <Path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
    </Svg>
  );
}
function Info({width, height}: {width: number; height: number}) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#505050"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round">
      <Circle cx={12} cy={12} r={10} />
      <Path d="M12 16v-4M12 8h.01" />
    </Svg>
  );
}
function ArrowRight() {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#505050"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round">
      <Path d="M5 12h14M12 5l7 7-7 7" />
    </Svg>
  );
}

function ArrowLeft() {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#505050"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round">
      <Path d="M19 12H5M12 19l-7-7 7-7" />
    </Svg>
  );
}
function Key() {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round">
      <Path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
    </Svg>
  );
}
function CrossDelete() {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 48 48"
      fill="none"
      stroke="#505050"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round">
      <Path d="M7.719 6.281L6.28 7.72 23.563 25 6.28 42.281 7.72 43.72 25 26.437 42.281 43.72l1.438-1.438L26.437 25 43.72 7.719 42.28 6.28 25 23.563z" />
    </Svg>
  );
}
function Home() {
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      viewBox="0 0 24 24"
      stroke="#505050"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round">
      <Path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <Path d="M9 22V12h6v10" />
    </Svg>
  );
}

export {
  ShoppingBag,
  User,
  AlertOctagon,
  Setting,
  Info,
  ArrowLeft,
  Key,
  CrossDelete,
  Heart,
  ArrowRight,
  Home,
  LikedHeart,
};
