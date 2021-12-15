export const handleView = (view: number) => {
  if (view >= 1000) {
    return `${(view / 1000).toPrecision(2)}k`;
  }
  return view;
};
