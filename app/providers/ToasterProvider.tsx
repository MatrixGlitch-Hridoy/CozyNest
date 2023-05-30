"use client";

import { Toaster } from "react-hot-toast";

interface ToasterProviderProps {}

export const ToasterProvider: React.FC<ToasterProviderProps> = (
  props: ToasterProviderProps
) => {
  return <Toaster />;
};
