'use client';

export default function BankRatesTable({ rates }) {
  return (
    <table className="w-full border-collapse text-left text-sm text-gray-500">
      <thead className="bg-gray-50 ">
        <tr>
          <th scope="col" className="px-6 py-4 font-medium text-gray-900">
            Bank
          </th>
          <th scope="col" className="px-6 py-4 font-medium text-gray-900">
            Rate
          </th>
          <th scope="col" className="px-6 py-4 font-medium text-gray-900">
            Last Updated
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-100 border-t border-gray-100">
        {(rates || []).map((entry, index) => (
          <tr key={index} className="hover:bg-gray-50 bg-white bg-opacity-60 backdrop-blur-sm">
            <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
              <div className="relative h-10 w-10">
                <img
                  className="h-full w-full rounded-full object-cover object-center"
                  src={entry.imageUrl}
                  alt=""
                />
              </div>
              <div className="text-sm">
                <div className="font-medium text-gray-700">
                  {entry.bankShortName}
                </div>
                <div className="text-gray-400 ">{entry.bankLongName}</div>
              </div>
            </th>
            <td className="px-6 py-4">{entry.rate}</td>
            <td className="px-6 py-4">{entry.lastUpdated}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
