'use client';

import {
  LineChart,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from '@tremor/react';
import _ from 'lodash';
import moment from 'moment/moment';
import bankCodeColorMapping from '@/misc/bank-code-color-mapping.json';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const getFormattedChangeValue = (change) => {
  if (change > 0) {
    return `Rs. +${Number(change).toFixed(2)}`;
  } else if (change < 0) {
    return `Rs. -${Number(change).toFixed(2)}`;
  } else {
    return `Rs. ${Number(change).toFixed(0)}`;
  }
};

const getChartCategories = (bankDetails) => {
  return _.keys(bankDetails).map((entry) => bankDetails[entry].longName);
};

const getChartLegenColors = (bankDetails) => {
  return _.keys(bankDetails).map(
    (entry) => bankDetails[entry].themeConfig.accentColor,
  );
};

const getChartData = (ratesMap, bankDetails) => {
  const chartData = [];
  _.keys(ratesMap).forEach((date) => {
    const ratesForDate = ratesMap[date];
    const data = {};
    data['date'] = moment(date).format('MMM Do');
    ratesForDate.forEach((entry) => {
      data[bankDetails[entry.bankCode].longName] = entry.rate;
    });
    chartData.push(data);
  });
  return chartData;
};

const getFormattedSummaryValues = (ratesSummary, bankDetails) => {
  const formattedData = ratesSummary.map((rateEntry) => {
    const humanizedLastUpdatedTime = moment(rateEntry.lastUpdated).fromNow();
    return {
      name: bankDetails[rateEntry.bankCode].longName,
      rate: valueFormatter(rateEntry.rate),
      change: getFormattedChangeValue(rateEntry.change),
      lastUpdate: humanizedLastUpdatedTime,
      bgColor: `bg-${bankCodeColorMapping[rateEntry.bankCode]}-500`,
      changeType: rateEntry.isPositive ? 'positive' : 'negative',
    };
  });
  return _.sortBy(formattedData, (entry) => entry.rate);
};

const valueFormatter = (number) => `Rs. ${Number(number).toFixed(2)}`;

export default function Charts({
  ratesSummary,
  ratesMap,
  bankDetails,
  allBanksSummary,
}) {
  const formattedSummaryValues = getFormattedSummaryValues(
    ratesSummary,
    bankDetails,
  );
  const chartCategories = getChartCategories(bankDetails);
  const chartDate = getChartData(ratesMap, bankDetails);
  return (
    <>
      <h3 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
        Average Rate (All Banks)
      </h3>
      <p className="mt-1 text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
        {valueFormatter(allBanksSummary.averageRate)}
      </p>
      <p className="mt-1 text-tremor-default font-medium">
        {allBanksSummary.isPositive ? (
          <span className="text-emerald-700 dark:text-emerald-500">
            {getFormattedChangeValue(allBanksSummary.averageChange)} (
            {Number(allBanksSummary.averagechangePercentage).toFixed(2)}%)
          </span>
        ) : (
          <span className="text-red-700 dark:text-red-500">
            {getFormattedChangeValue(allBanksSummary.averageChange)} (
            {Number(allBanksSummary.averagechangePercentage).toFixed(2)}%)
          </span>
        )}{' '}
        <span className="font-normal text-tremor-content dark:text-dark-tremor-content">
          Past 24 hours
        </span>
      </p>
      <LineChart
        data={chartDate}
        index="date"
        categories={chartCategories}
        colors={_.values(bankCodeColorMapping)}
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
          {formattedSummaryValues.map((item) => (
            <TableRow key={item.name}>
              <TableCell className="font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                <div className="flex space-x-3">
                  <span
                    className={classNames(item.bgColor, 'w-1 shrink-0 rounded')}
                    aria-hidden={true}
                  />
                  <span>{item.name}</span>
                </div>
              </TableCell>
              <TableCell className="text-right">{item.rate}</TableCell>
              <TableCell className="text-right">
                <span
                  className={classNames(
                    item.changeType === 'positive'
                      ? 'text-emerald-700 dark:text-emerald-500'
                      : 'text-red-700 dark:text-red-500',
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
