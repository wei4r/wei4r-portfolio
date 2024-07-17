"use client";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import FirstPage from "./components/FirstPage";
import { Provider } from 'react-redux';
import { store } from '../redux/store';

export default function Home({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <main className="flex min-h-screen flex-col bg-[#121212] w-full max-w-full">
        <Navbar />
        <div className="container pt-24 px-8 xl:px-12 pb-4 w-full max-w-full">
          <FirstPage/>
          <AboutSection />
          <ProjectsSection />
          {/* <EmailSection /> */}
        </div>
        <Footer />
      </main>
    </Provider>
  );
}
