import {
  Building2,
  Home,
  Landmark,
  Globe,
  Store,
  LayoutGrid,
} from "lucide-react";

import Project1 from "../Images/Project1.webp";
import Project2 from "../Images/Project2.webp";
import Project3 from "../Images/Project3.webp";
import Project4 from "../Images/Project4.webp";
import Project5 from "../Images/Project5.webp";
import Project6 from "../Images/Project6.webp";
import Project7 from "../Images/Project7.webp";
import Project8 from "../Images/Project8.webp";
import Project9 from "../Images/Project9.webp";
import Project10 from "../Images/Project10.webp";
import Project11 from "../Images/Project11.webp";
import stall4 from "../Images/stall4.webp";
import stall7 from "../Images/stall7.webp";
import stall8 from "../Images/stall8.webp";
import so1 from "../Images/so1.webp";
import so2 from "../Images/so2.webp";
import so3 from "../Images/so3.webp";
import so4 from "../Images/so4.webp";
import so5 from "../Images/so5.webp";
import gov1 from "../Images/gov1.webp";
import gov2 from "../Images/gov2.webp";
import gov3 from "../Images/gov3.webp";
import gov4 from "../Images/gov4.webp";
import gov5 from "../Images/gov5.webp";
import gove1 from "../Images/gove1.webp";
import gove2 from "../Images/gove2.webp";
import gove3 from "../Images/gove3.webp";
import ashish_jain_kavi_nagar_7kw_resedential from "../Images/ashish_jain_kavi_nagar_7kw_resedential.webp";
import res from "../Images/res.webp";

export const categories = [
  "All",
  "Residential",
  "Commercial",
  "Govt Affiliates",
];

export const iconMap = {
  Residential: <Home className="text-blue-500 w-6 h-6" />,
  Commercial: <Building2 className="text-blue-500 w-6 h-6" />,
  "Govt Affiliates": <Landmark className="text-blue-500 w-6 h-6" />,
  Exhibitions: <Globe className="text-blue-500 w-6 h-6" />,
  Stalls: <Store className="text-blue-500 w-6 h-6" />,
  All: <LayoutGrid className="text-blue-500 w-6 h-6" />,
};
export const projects = [
  {
    id: 1,
    title: "Ansal sonipoat",
    category: "Residential",
    kwp: "N/A",
    image: Project1,
  },
  {
    id: 2,
    title: "BKT Bhiwandi",
    category: "Commercial",
    kwp: "N/A",
    image: Project2,
  },
  {
    id: 3,
    title: "Kumhera Net Zero Village",
    category: "Govt Affiliates",
    kwp: "1440",
    image: gove1,
  },
  {
    id: 4,
    title: "Kumhera Net Zero Village",
    category: "Govt Affiliates",
    kwp: "450",
    image: gove2,
  },
  {
    id: 6,
    title: "LR College",
    category: "Commercial",
    kwp: "1000",
    image: Project6,
  },
  {
    id: 7,
    title: "Orient System",
    category: "Commercial",
    kwp: "1450",
    image: Project7,
  },
  {
    id: 8,
    title: "PVS Polymers",
    category: "Commercial",
    kwp: "100",
    image: Project8,
  },
  {
    id: 9,
    title: "Rangeeli Mahal Barsana",
    category: "Residential",
    kwp: "100",
    image: Project9,
  },
  {
    id: 10,
    title: "Ashish Jain",
    category: "Residential",
    kwp: "N/A",
    image: ashish_jain_kavi_nagar_7kw_resedential,
  },
  {
    id: 11,
    title: "OS cool Home",
    category: "Commercial",
    kwp: "N/A",
    image: res,
  },
  {
    id: 12,
    title: "Build Bharat Expo",
    category: "Exhibitions and stalls",
    kwp: "N/A",
    image: stall4,
  },
  {
    id: 13,
    title: "Utkarsh ke 8 varsh Kavi Nagar Event",
    category: "Exhibitions and stalls",
    kwp: "N/A",
    image: stall7,
  },
  {
    id: 14,
    title: "Build Bharat Expo",
    category: "Exhibitions and stalls",
    kwp: "N/A",
    image: so1,
  },
  {
    id: 15,
    title: "Utkarsh ke 8 varsh Kavi Nagar Event",
    category: "Exhibitions and stalls",
    kwp: "N/A",
    image: gove3,
  },
  {
    id: 16,
    title: "MGR Exhibition",
    category: "Exhibitions and stalls",
    kwp: "N/A",
    image: so3,
  },
];
