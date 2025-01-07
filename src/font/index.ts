import { Inter, Manrope } from "next/font/google";

const interVietnamePro = Inter({
  subsets: ["vietnamese"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const manrope = Manrope({
  subsets: ["vietnamese"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export { interVietnamePro, manrope };
