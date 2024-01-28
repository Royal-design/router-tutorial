import "./App.css";
import { Blog } from "./components/pages/blog";
import { About } from "./components/pages/about";
import { Home } from "./components/pages/home";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import { HelpLayout } from "./layout/HelpLayout";
import { Faqs } from "./help/Faqs";
import { contactAction, Contacts } from "./help/Contacts";
import { NotFoundPage } from "./NotFoundPage/NotFoundPage";
import CareersLayout from "./layout/CareersLayout";
import { Careers, careersLoader } from "./components/pages/Careers";
import {
  CareerDetails,
  careerDetailsLoader
} from "./components/pages/CareerDetails";
import { CareerError } from "./components/pages/CareerError";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/about" element={<About />} />

      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faqs />} />
        <Route path="contact" element={<Contacts />} action={contactAction} />
      </Route>
      <Route
        path="careers"
        element={<CareersLayout />}
        errorElement={<CareerError />}
      >
        <Route index loader={careersLoader} element={<Careers />} />
        <Route
          path=":id"
          element={<CareerDetails />}
          loader={careerDetailsLoader}
        />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
