/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        btnColor: "#2E5BFF",
        bgColor: "#E5E5E5",
        inputBG: "rgba(224, 231, 255, 0.2)",
        dashBtnColor: "#F1F1F3",
        dashTopshadow: "0px 25px 40px rgba(0, 0, 0, 0.03)",
        dashInputColor: "#E8E8E8",
        dashInputBorderColor: "#E0E7FF",
        dashfilterColor: "#3365FC",
        dashfilterBgColor: "#EDF1FD",
        dashListBorderColor: "rgba(46, 91, 255, 0.08)",
        dashListHeaderColor: "#B1B1B8",
        dashUZSColor: "#B2B7C1",
        dashListTitleColor: "#5BABF2",
        dashBtnFocusedColor: '#3366FF',
        dashsubtitleColor: '#7A7A9D',
        dashListTitleColor2: '#1D1D1F',
        dashDiagramColor2: '#4C6FFF',
        dashDiagramColor1: '#FF92AE',
        dashDisabledColor: '#DFE3E8',
        dashBtnColor2: 'rgba(51, 102, 255, 1)',
      },
      sizes: {
        lg: "670px",
      },
      screens: {
        '2xl': '1285px',
        '3xl': '1275px',
      },
      fontFamily: {
        'rubik': ['Rubik', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
