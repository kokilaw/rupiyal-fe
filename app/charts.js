// 'use client';
import {
  LineChart,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@tremor/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const data = [
  {
    date: "Apr 08",
    "Bank of Ceylon": 202.82,
    "Nations Trust Bank (NTB)": 204.95,
    "National Savings Bank": 203.58,
    "Hatton National Bank": 201.24,
    "Union Bank": 202.69,
    "Sampath Bank": 203,
  },
  {
    date: "Apr 09",
    "Bank of Ceylon": 200.86,
    "Nations Trust Bank (NTB)": 203.66,
    "National Savings Bank": 203.95,
    "Hatton National Bank": 201.28,
    "Union Bank": 202.67,
    "Sampath Bank": 204.52,
  },
  {
    date: "Apr 10",
    "Bank of Ceylon": 202.63,
    "Nations Trust Bank (NTB)": 202.02,
    "National Savings Bank": 203.3,
    "Hatton National Bank": 202.72,
    "Union Bank": 200.14,
    "Sampath Bank": 202.81,
  },
  {
    date: "Apr 11",
    "Bank of Ceylon": 200.76,
    "Nations Trust Bank (NTB)": 201.09,
    "National Savings Bank": 203.15,
    "Hatton National Bank": 201.44,
    "Union Bank": 203.76,
    "Sampath Bank": 200.49,
  },
  {
    date: "Apr 12",
    "Bank of Ceylon": 200.43,
    "Nations Trust Bank (NTB)": 204.92,
    "National Savings Bank": 204.59,
    "Hatton National Bank": 202.63,
    "Union Bank": 201.39,
    "Sampath Bank": 201.34,
  },
  {
    date: "Apr 13",
    "Bank of Ceylon": 203.95,
    "Nations Trust Bank (NTB)": 201.8,
    "National Savings Bank": 203.54,
    "Hatton National Bank": 204.57,
    "Union Bank": 204.13,
    "Sampath Bank": 204.65,
  },
  {
    date: "Apr 14",
    "Bank of Ceylon": 203.19,
    "Nations Trust Bank (NTB)": 202.32,
    "National Savings Bank": 201.61,
    "Hatton National Bank": 203,
    "Union Bank": 202.68,
    "Sampath Bank": 205,
  },
];

const summary = [
  {
    name: "Bank of Ceylon",
    rate: "Rs. 292.29",
    change: "+1.40",
    lastUpdate: "15 minutes ago",
    bgColor: "bg-blue-500",
    changeType: "positive",
  },
  {
    name: "Nations Trust Bank (NTB)",
    rate: "Rs. 293.29",
    change: "+2.40",
    lastUpdate: "1 hour ago",
    bgColor: "bg-violet-500",
    changeType: "positive",
  },
  {
    name: "National Savings Bank",
    rate: "Rs. 291.29",
    change: "-1.40",
    lastUpdate: "20 minutes ago",
    bgColor: "bg-fuchsia-500",
    changeType: "negative",
  },
];

const valueFormatter = (number) =>
  `Rs. ${Intl.NumberFormat("us").format(number).toString()}`;

export default function Charts() {
  return (
    <>
      <h3 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
        Average Rate (All Banks)
      </h3>
      <p className="mt-1 text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
        Rs. 208.29
      </p>
      <p className="mt-1 text-tremor-default font-medium">
        <span className="text-emerald-700 dark:text-emerald-500">
          +Rs. 0.90 (0.21%)
        </span>{" "}
        <span className="font-normal text-tremor-content dark:text-dark-tremor-content">
          Past 24 hours
        </span>
      </p>
      <LineChart
        data={data}
        index="date"
        categories={[
          "Bank of Ceylon",
          "Nations Trust Bank (NTB)",
          "National Savings Bank",
          "Hatton National Bank",
          "Union Bank",
          "Sampath Bank",
        ]}
        colors={["blue", "violet", "fuchsia", "blue", "violet", "fuchsia"]}
        valueFormatter={valueFormatter}
        yAxisWidth={60}
        onValueChange={() => {}}
        autoMinValue={true}
        enableLegendSlider={true}
        showAnimation={true}
        className="mt-6 h-96 sm:block"
      />
      <Table className="mt-8">
        <TableHead>
          <TableRow className="border-b border-tremor-border dark:border-dark-tremor-border">
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Bank
            </TableHeaderCell>
            <TableHeaderCell className="text-right text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Rate
            </TableHeaderCell>
            <TableHeaderCell className="text-right text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Change (24h)
            </TableHeaderCell>
            <TableHeaderCell className="text-right text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Last Updated
            </TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {summary.map((item) => (
            <TableRow key={item.name}>
              <TableCell className="font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                <div className="flex space-x-3">
                  <span
                    className={classNames(item.bgColor, "w-1 shrink-0 rounded")}
                    aria-hidden={true}
                  />
                  <span>{item.name}</span>
                </div>
              </TableCell>
              <TableCell className="text-right">{item.rate}</TableCell>
              <TableCell className="text-right">
                <span
                  className={classNames(
                    item.changeType === "positive"
                      ? "text-emerald-700 dark:text-emerald-500"
                      : "text-red-700 dark:text-red-500"
                  )}
                >
                  {item.change}
                </span>
              </TableCell>
              <TableCell className="text-right">{item.lastUpdate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
