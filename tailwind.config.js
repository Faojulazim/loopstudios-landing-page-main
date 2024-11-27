tailwind.config = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        White: "hsl(0, 0%, 100%)",
        Black: "hsl(0, 0%, 0%)",
        DarkGray: "hsl(0, 0%, 55%)",
        VeryDarkGray: "hsl(0, 0%, 41%)",
      },
      fontFamily: {
        JosefinSans: ["Josefin Sans", "sans-serif"],
        Alata: ["Alata", "serif"],
      },
      screens: {
        tsf: "375px",
        ftf: "425px",
      },
    },
  },
  plugins: [],
};
