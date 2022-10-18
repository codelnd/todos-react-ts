import { useEffect, useState } from "react";
import { ITodoEl } from "../utils/models";

interface IStorageProps {
  initialValue: ITodoEl[] | [];
  key: string;
}

export const useLocalStorage = ({ initialValue, key }: IStorageProps) => {
  const [value, setValue] = useState(getValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  function getValue() {
    const storage = localStorage.getItem(key);
    if (storage) {
      return JSON.parse(storage);
    }
    return initialValue;
  }

  return [value, setValue];
};
