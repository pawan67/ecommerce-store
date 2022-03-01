import { UserContextProvider } from "../context/userContext";
import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../app/store";
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={false} attribute="class">
      <Provider store={store}>
        <UserContextProvider>
          <Component {...pageProps} />
        </UserContextProvider>
      </Provider>
    </ThemeProvider>
  );
}

export default MyApp;
