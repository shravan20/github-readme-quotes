export const LightTheme = {
   palette: {
      primary: {
         light: "#7986cb",
         main: "#3f51b5",
         dark: "#303f9f",
         contrastText: "#fff",
      },

      text: {
         primary: "rgba(0, 0, 0, 0.87)",
         secondary: "rgba(0, 0, 0, 0.54)",
         disabled: "rgba(0, 0, 0, 0.38)",
         hint: "rgba(0, 0, 0, 0.38)",
      },
      background: {
         paper: "#fff",
         default: "#fafafa",
      },
      action: {
         active: "rgba(0, 0, 0, 0.54)",
         hover: "rgba(0, 0, 0, 0.04)",
         selected: "rgba(0, 0, 0, 0.08)",
         focus:"rgba(0, 0, 0, 0.12)"
      },
   },

   typography: {
      allVariants: {
         color: "#000",
      },
      h5: {
         color: "#000",
      },
      h6: {
         color: "#fff",
      },
      h2: {
         color: "#000",
      },
   },
   overrides: {
      MuiToolbar: {
         root: {
            background: "#3f51b5",
         },
      },
      MuiPaper: {
         root: {
            border: "none",
         },
      },
      MuiContainer: {
         root: {
            backgroundColor: "#fff !important",
         },
      },
      MuiInputBase: {
        root: {
           border: "none",
        },
     },
     MuiSvgIcon:{
      root:{
        color:"#484f58"
      }
    },
    MuiInputLabel:{
      root:{
        background:"#fff",
        color:"#000"
      }
    }
   },
};

export const DarkTheme = {
   palette: {
      primary: {
         light: "#0d419d",
         main: "#0d419d",
         dark: "#0d419d",
         contrastText: "#fff",
      },

      text: {
         primary: "#bdd1d9",
         secondary: "#f0f6fc",
         disabled: "#30363d",
         hint: "#6e7681",
      },
      background: {
         paper: "#0d1117",
         default: "#0d1117",
      },
      action: {
        active: "rgba(0, 0, 0, 0.54)",
        hover: "#30363d",
        selected: "#21262d",
        focus:"rgba(0, 0, 0, 0.12)"
     },
   },
   typography: {
      allVariants: {
         color: "#bdd1d9",
      },
      h5: {
         color: "#bdd1d9",
      },
      h6: {
         color: "#f0f6fc",
      },
      h2: {
         color: "#c9d1d9",
      },
   },
   overrides: {
      MuiToolbar: {
         root: {
            background: "#1c2128",
         },
      },
      MuiPaper: {
         root: {
            border: "1px solid #30363d",
         },
      },
      MuiContainer: {
         root: {
            backgroundColor: "#0d1117 !important",
         },
      },
      MuiInputBase: {
        root: {
           border: "solid #30363d 1px",
        },
     },
     MuiSvgIcon:{
      root:{
        color:"#484f58"
      }
    },
    MuiInputLabel:{
      root:{
        background:"#0d1117",
        color:"#f0f6fc"
      }
    },
   },
   
};
