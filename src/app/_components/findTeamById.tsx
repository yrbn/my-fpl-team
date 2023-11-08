"use client";

// import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { api } from "~/trpc/react";
import toast from "react-hot-toast";

export const FindTeamById = () => {
  const [id, setId] = useState("");
  const [idError, setIdError] = useState(false);

  const { data, error, isFetching, isError, refetch } =
    api.fpl.getManagerById.useQuery(parseInt(id), {
      enabled: false,
      retry: false,
    });
  console.log("DATA", data);

  useEffect(() => {
    if (isError) {
      toast.error(
        error.data?.httpStatus === 404
          ? `Couldn't find team with ID ${id}`
          : "Something went wrong. Try again",
      );
    }
  }, [isError, error, id]);

  const onTeamIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
    setIdError(false);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isNaN(parseInt(id))) {
      setIdError(true);
      return;
    }

    void refetch();
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col items-start gap-1">
      <div className="flex flex-col items-center pl-4">
        <p className="text-l text-white">Enter you team ID</p>
      </div>
      <div className="flex flex-col rounded-full bg-white p-1 focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 focus-within:ring-opacity-40 lg:flex-row">
        <input
          type="text"
          placeholder="Team ID"
          value={id}
          onChange={onTeamIdChange}
          className="rounded-full rounded-r-none px-4 py-2 text-black outline-none"
        />
        <button
          type="submit"
          className="rounded-full bg-[#342847] px-4 py-2 font-semibold transition hover:bg-[#342847]/80"
          // className="rounded-full rounded-l-none bg-white/10 px-4 py-2 font-semibold transition hover:bg-white/20"
          disabled={isFetching || !id}
        >
          Get team
        </button>
      </div>
      <div className="flex flex-col items-center pl-4">
        <p className={`text-sm text-red-400 ${!idError ? "hidden" : ""}`}>
          Team ID should be a number
        </p>
      </div>
    </form>
  );
};
