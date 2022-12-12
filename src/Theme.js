// // import { createTheme } from "@mui/material";

// import { createTheme } from "@mui/material";
// import { useMemo } from "react";

// // export const theme = createTheme({
// //     palette: {
// //         mode:'dark'
// //     }
// // })

// export const theme = useMemo(()=> createTheme(getDesignTokens(mode)), [mode])

// const getDesignTokens = (mode) => ({
//     palette: {
//       mode,
//       ...(mode === "light"
//         ? {
//             // palette values for light mode
//             primary: {
//               main: "#fffbeb",
//             },
//             divider: "#fde68a",
//             background: {
//               default: "#fbbf24",
//               paper: "#fbbf24",
//             },
//             text: {
//               primary: "#000",
//               secondary: "#27272a",
//             },
//           }
//         : {
//             // palette values for dark mode
//             primary: {
//               main: "#dbf4ff",
//             },
//             divider: "#004282",
//             background: {
//               default: "#000e21",
//               paper: "#000e21",
//             },
//             text: {
//               primary: "#fff",
//               secondary: "#71717a",
//             },
//           }),
//     },
//   });