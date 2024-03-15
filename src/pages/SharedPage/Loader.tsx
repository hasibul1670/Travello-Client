import React from "react";
import { BarLoader, BeatLoader, ClockLoader, HashLoader, PacmanLoader, PropagateLoader, RingLoader } from "react-spinners";
interface LoaderColorProps {
  color: string;
}


export const RingLoaderComponent: React.FC<LoaderColorProps> = ({color}) => {
  return <RingLoader color={color}  />;
};


export const HashLoaderComponent: React.FC<LoaderColorProps> = ({ color }) => {
  return <HashLoader color={color} />;
};
export const PropagateLoaderComponent: React.FC<LoaderColorProps> = ({ color }) => {
  return <PropagateLoader  color={color} />;
};
export const PacmanLoaderComponent: React.FC<LoaderColorProps> = ({ color }) => {
  return <PacmanLoader  color={color} />;
};
export const ClockLoaderComponent: React.FC<LoaderColorProps> = ({ color }) => {
  return <ClockLoader  color={color} />;
};
export const BarLoaderComponent: React.FC<LoaderColorProps> = ({ color }) => {
  return <BarLoader  color={color} />;
};
export const BeatLoaderComponent: React.FC<LoaderColorProps> = ({ color }) => {
  return <BeatLoader   color={color} />;
};






