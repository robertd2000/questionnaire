export const shuffleArray = (array: string[]): string[] => {
  const shuffled = [...array];
  let currentIndex = shuffled.length;

  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [shuffled[currentIndex], shuffled[randomIndex]] = [
      shuffled[randomIndex],
      shuffled[currentIndex],
    ];
  }

  return shuffled;
};

export const compaireArrays = (a: string[], b: string[]) => {
  return a.length === b.length && a.every((value) => b.includes(value));
};
