import React, { useState } from "react";

// Mock data for players
const mockPlayers = [
  { name: "Amit Sharma", age: 22, club: "Sky Flyers", ratio: 1.2 },
  { name: "Priya Singh", age: 19, club: "Wind Riders", ratio: 1.5 },
  { name: "Rahul Verma", age: 25, club: "Cloud Chasers", ratio: 1.1 },
  { name: "Sneha Patel", age: 21, club: "Sky Flyers", ratio: 1.3 },
  { name: "Vikram Rao", age: 23, club: "Storm Breakers", ratio: 1.4 },
  { name: "Meera Das", age: 20, club: "Breeze Masters", ratio: 1.6 },
];

const clubNames = [
  "All Clubs",
  "Sky Flyers",
  "Wind Riders",
  "Cloud Chasers",
  "Storm Breakers",
  "Breeze Masters",
];

const ListPlayer = () => {
  const [selectedClub, setSelectedClub] = useState("All Clubs");

  const filteredPlayers =
    selectedClub === "All Clubs"
      ? mockPlayers
      : mockPlayers.filter((p) => p.club === selectedClub);

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <h2 className="text-2xl font-bold">Players List</h2>
        <select
          className="px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={selectedClub}
          onChange={(e) => setSelectedClub(e.target.value)}
        >
          {clubNames.map((club) => (
            <option key={club} value={club}>
              {club}
            </option>
          ))}
        </select>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Age</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Club</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ratio</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredPlayers.length === 0 ? (
              <tr>
                <td colSpan={4} className="text-center py-4 text-gray-400">
                  No players found.
                </td>
              </tr>
            ) : (
              filteredPlayers.map((player, idx) => (
                <tr key={idx} className="hover:bg-blue-50 transition">
                  <td className="px-6 py-4 whitespace-nowrap">{player.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{player.age}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{player.club}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{player.ratio}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListPlayer;
