import { useState } from "react";
import { ITodoEl } from "../utils/models";

interface IStorageProps {
  initialValue: ITodoEl[] | [];
  key: string;
}

export const useLocalStorage = ({ initialValue, key }: IStorageProps) => {
  const [value, setValue] = useState(getValue);

  function getValue() {
    const storage = localStorage.getItem(key);
    if (storage) {
      return JSON.parse(storage);
    }
    return initialValue;
  }
};
