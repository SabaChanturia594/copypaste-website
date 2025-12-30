export function calcPrice({ size, paper, type, frame }) {
  let price = 0;

  // Base prices (საკუთარი ფოტო)
  if (size === "A3+" && paper === "glossy") price = 30;
  if (size === "A3+" && paper === "matte") price = 15;

  if (size === "A3" && paper === "glossy") price = 25;
  if (size === "A3" && paper === "matte") price = 15;

  if (size === "A4" && paper === "glossy") price = 20;
  if (size === "A4" && paper === "matte") price = 10;

  // Our design +5
  if (type === "design") price += 5;

  // Frame add-ons
  if (frame === "frame") {
    if (size === "A3") price += 40;
    if (size === "A4") price += 30;
  }
  if (frame === "frame+mat") {
    if (size === "A3") price += 50;
    if (size === "A4") price += 40;
  }

  return price;
}
