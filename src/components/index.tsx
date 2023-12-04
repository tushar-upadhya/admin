// components

import Header from "./Header";
import Index from "./sidebar/Index";
import Widget from "./Widget";
import GenderRatio from "./GenderRatio";

// graph

import Inventory from "./graph/Inventory";
import RevenueChart from "./graph/RevenueChart";
import CategoryItem from "./graph/CategoryItem";

// common

import CommonHeader from "./common/CommonHeader";
import CommonLi from "./common/CommonLi";

// common charts
import CommonDoughnutCharts from "./common/common-charts/CommonDoughnutChart";
import CommonLineCharts from "./common/common-charts/CommonLineChart";
import CommonBarCharts from "./common/common-charts/CommonBarChart";
import CommonPieCharts from "./common/common-charts/CommonPieChart";

// table

import CommonTableHOC from "./common/table/CommonTableHOC";
import TableTopTransaction from "./common/table/TableTopTransaction";

//  json

import data from "../json/data.json";

export {
  // columns,
  Header,
  // dataType,
  // Arr,
  Widget,
  Index,
  TableTopTransaction,
  RevenueChart,
  Inventory,
  CategoryItem,
  CommonHeader,
  CommonLi,
  CommonBarCharts,
  CommonDoughnutCharts,
  CommonLineCharts,
  CommonPieCharts,
  CommonTableHOC,
  GenderRatio,
  data,
};
