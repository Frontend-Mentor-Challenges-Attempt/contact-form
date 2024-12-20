import ContactForm from "./views/ContactForm";
import { ToastContextProvider } from "./contexts/toastContext";
import Toaster from "./components/Toaster";
import "./App.css";
const App = () => {
  return (
    <ToastContextProvider>
      <div className="app-wrapper">
        <Toaster />
        <ContactForm />
        <div className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io/challenges/contact-form--G-hYlqKJj">
            Frontend Mentor
          </a>. Coded by <a href="https://github.com/ishika2021">Ishika Mishra</a>.
        </div>
      </div>
    </ToastContextProvider>
  );
};

export default App;
