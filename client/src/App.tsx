import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QueryClientProvider } from "./context/QueryClientProvider";
import InvestorsPage from "./pages/InvestorsPage";
import CommitmentsPage from "./pages/CommitmentsPage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import styles from "./App.module.scss";

const App: React.FC = () => {
  return (
    <QueryClientProvider>
      <Router>
        <div className={styles.app}>
          <Header />
          <main className={styles.main}>
            <Routes>
              <Route path="/" element={<InvestorsPage />} />
              <Route
                path="/investors/:id/commitments"
                element={<CommitmentsPage />}
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
