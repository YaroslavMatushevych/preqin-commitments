import React, { useState } from "react";
import { useQuery } from "react-query";
import { fetchCommitments } from "../../services/api";
import { Commitment } from "../../types";
import Table from "../../components/Table";
import { useParams } from "react-router-dom";
import { formateAmount } from "../../utils/formateAmount";
import styles from "./CommitmentsPage.module.scss";

const columns: { header: string; accessor: keyof Commitment | "formatted_amount" }[] = [
  { header: "ID", accessor: "id" },
  { header: "Asset Class", accessor: "asset_class" },
  { header: "Currency", accessor: "currency" },
  { header: "Amount", accessor: "formatted_amount" },
];

// Predefined list of all possible asset classes
const ALL_ASSET_CLASSES = [
  "All",
  "Hedge Funds",
  "Private Equity",
  "Real Estate",
  "Infrastructure",
  "Natural Sources",
];

const CommitmentsPage: React.FC = () => {
  const { id: investorId } = useParams<{ id: string }>();
  const [filter, setFilter] = useState<string | null>(null);

  const { data, isLoading, error } = useQuery(
    ["commitments", investorId, filter],
    () => fetchCommitments(investorId!, filter || undefined),
    { staleTime: 0, refetchOnWindowFocus: true }  // Always fetch fresh data for demonstration purposes since we dynamically add ids and they doesn't persist and non-existing ids can be cached.
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading commitments.</p>;

  const filteredData = filter
    ? data?.filter((commitment) => commitment.asset_class === filter)
    : data;

  const formattedData = filteredData?.map((commitment) => ({
    ...commitment,
    formatted_amount: `${formateAmount(commitment.amount)} ${commitment.currency}`,
  }));

  const handleFilterChange = (newFilter: string) =>
    setFilter(newFilter === "All" ? null : newFilter);

  return (
    <div>
      <h1>Commitments for Investor {investorId}</h1>
      <div className={styles.filters}>
        {ALL_ASSET_CLASSES.map((assetClass) => (
          <button
            key={assetClass}
            onClick={() => handleFilterChange(assetClass)}
            className={
              (filter === null && assetClass === "All") || filter === assetClass
                ? styles.active
                : null
            }          
          >
            {assetClass}
          </button>
        ))}
      </div>
      <Table columns={columns} data={formattedData || []} />
    </div>
  );
};

export default CommitmentsPage;