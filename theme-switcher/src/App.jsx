import { useThemeContext, dark  } from "./contexts/ThemeContext"


function App() {

  const {theme, setLightTheme, setDarkTheme} = useThemeContext();

  console.log( theme, setLightTheme, setDarkTheme );

  return (
      <div className="bg-blue-300 dark:bg-zinc-900 h-dvh w-dvw flex flex-col justify-center items-center">
        <div className="bg-white m-8 tracking-widest  max-w-[550px] p-10 rounded-lg">
          <p className="font-bold text-2xl">
            Hello World!!!
          </p>
          <p className="py-4 text-justify font-medium">
            This is a sample text that I am writing in order to test this theme switcher, I had already created one but
            I deleted the original and re creating in order to revise the concept of React Context API
          </p>
          <div className="flex flex-row gap-2 items-center">
            <input type="checkbox"
              value=""
              checked = { theme === dark }
              onChange={(e) => {
                if( e.currentTarget.checked ) setDarkTheme();
                  else setLightTheme();
              }}
            />
          <p>
            dark theme
          </p>
          </div>
        </div>
      </div>
  )
}

export default App
