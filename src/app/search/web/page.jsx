"use client";
import React, { useState } from "react";
import WebSearchResults from "@/components/WebSearchResults.jsx";
import Link from "next/link.js";
import { useRouter } from "next/router";

async function WebSearchPage({ searchParams }) {
  const router = useRouter();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}`
        );
        if (!response.ok) {
          throw new Error("Something went wrong!");
        }
        const responseData = await response.json();
        setData(responseData.items);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, [searchParams.searchTerm]);

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl mb-4">Error occurred</h1>
        <p className="text-lg">{error.message}</p>
      </div>
    );
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  if (data.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl mb-4">
          No result found for {searchParams.searchTerm}
        </h1>
        <p className="text-lg">
          Try searching web or images for something else{" "}
          <Link href="/" className="text-blue-500">
            Home
          </Link>
        </p>
      </div>
    );
  }

  return (
    <div>
      <WebSearchResults results={data} />
    </div>
  );
}

export default WebSearchPage;
