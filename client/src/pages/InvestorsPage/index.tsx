import React, { useState } from "react";
import { useQuery } from "react-query";
import { fetchInvestors } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { Investor } from "../../types";
import { formateAmount } from "../../utils/formateAmount";
import Table from "../../components/Table";
import styles from "./InvestorsPage.module.scss";

const columns: { header: string; accessor: keyof Investor | "formatted_commitment" }[] = [
  { header: "ID", accessor: "id" },
  { header: "Name", accessor: "name" },
  { header: "Type", accessor: "type" },
  { header: "Country", accessor: "country" },
  { header: "Date Added", accessor: "date_added" },
  { header: "Total Commitment", accessor: "formatted_commitment" },
];

const InvestorsPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const { data, isLoading, error } = useQuery(
    ["investors", currentPage, pageSize],
    () => fetchInvestors(currentPage, pageSize),
    { staleTime: 0 } // Always fetch fresh data for demonstration purposes since we dynamically add ids and they doesn't persist and non-existing ids can be cached.
  );
  

  const navigate = useNavigate();

  const handleCommitmentClick = (investorId: string) => {
    navigate(`/investors/${investorId}/commitments`);
  };

  const handleNextPage = () => setCurrentPage((prev) => prev + 1);
  const handlePreviousPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading investors.</p>;

  const formattedData = data.map((investor) => ({
    ...investor,
    formatted_commitment: (
      <button
        type="button"
        className={styles.linkButton}
        onClick={() => handleCommitmentClick(investor.id)}
      >
        {formateAmount(investor.total_commitment)}
      </button>
    ),
  }));

  return (
    <div className={styles.container}>
      <h1>Investors</h1>
      <Table columns={columns} data={formattedData} />
      {/* Pagination Component */}
      <div className={styles.paginationControls}>
        <button
          type="button"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className={styles.paginationButton}
        >
          Previous
        </button>
        <span>Page {currentPage}</span>
        <button
          type="button"
          onClick={handleNextPage}
          className={styles.paginationButton}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default InvestorsPage;
