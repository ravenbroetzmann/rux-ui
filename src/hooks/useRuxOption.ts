import { useRuxState } from "./useRuxState";

export function useRuxOptions<T>(optionArr: T[], initialIndex: number = 0) {
  const currentOptionIndex = useRuxState(initialIndex);
  const set = (index: number) => currentOptionIndex.set(index);
  const get = (): T => optionArr[currentOptionIndex.get()];

  return {
    set,
    get,
  };
}
