export type ApplicationIdentifier = 
  | "00"
  | "01"
  | "02"
  | "10"
  | "11"
  | "12"
  | "13"
  | "15"
  | "16"
  | "17"
  | "20"
  | "21"
  | "22"
  | "240"
  | "241"
  | "242"
  | "243"
  | "250"
  | "251"
  | "253"
  | "254"
  | "255"
  | "30"
  | "31"
  | "32"
  | "33"
  | "34"
  | "35"
  | "36"
  | "37"
  | "390N"
  | "391N"
  | "392N"
  | "393N"
  | "394N"
  | "400"
  | "401"
  | "402"
  | "403"
  | "410"
  | "411"
  | "412"
  | "413"
  | "414"
  | "415"
  | "416"
  | "420"
  | "421"
  | "422"
  | "423"
  | "424"
  | "425"
  | "426"
  | "427"
  | "7001"
  | "7002"
  | "7003"
  | "7004"
  | "7005"
  | "7006"
  | "7007"
  | "7008"
  | "7009"
  | "7010"
  | "7020"
  | "7021"
  | "7022"
  | "7023"
  | "703S"
  | "710"
  | "711"
  | "712"
  | "713"
  | "714"
  | "8001"
  | "8002"
  | "8003"
  | "8004"
  | "8005"
  | "8006"
  | "8007"
  | "8008"
  | "8010"
  | "8011"
  | "8012"
  | "8019"
  | "8020"
  | "8111"
  | "8200";

export type ApplicationIdentifierName = 
  | "SSCC"
  | "GTIN"
  | "Content"
  | "Batch / Lot"
  | "Prod Date"
  | "Due Date"
  | "Pack Date"
  | "Sell By"
  | "Use By or Expiry"
  | "Best Before or Best By"
  | "Variant"
  | "Serial"
  | "CPV"
  | "Additional ID"
  | "Cust.Part No."
  | "MTO variant"
  | "PCN"
  | "Secondary Serial"
  | "Ref. to source"
  | "GDTI"
  | "GLN Extension Component"
  | "GCN"
  | "Var.Count"
  | "Dimensions"
  | "Count"
  | "Amount"
  | "Price"
  | "PRCNT OF"
  | "Order number"
  | "GINC"
  | "GSIN"
  | "Route"
  | "Ship to loc"
  | "Bill to"
  | "Purchase from"
  | "Ship for Loc"
  | "Loc No."
  | "Pay to"
  | "PROD/SERV LOC"
  | "Ship to post"
  | "Origin"
  | "Country - initial process."
  | "Country - process."
  | "Country - disassembly"
  | "Country - full proces"
  | "Origin subdivision"
  | "NSN"
  | "Meat cut"
  | "Expiry time"
  | "Active potency"
  | "Catch Area"
  | "First Freeze date"
  | "Harvest Date"
  | "Aquatic species"
  | "Fishing Gear type"
  | "Prod Method"
  | "Refurb Lot"
  | "FUNC STAT"
  | "REV STAT"
  | "GIAI - ASSEMBLY"
  | "Processor # s"
  | "NHRN"
  | "Dimensions"
  | "CMT No."
  | "GRAI"
  | "GIAI"
  | "Price per unit"
  | "ITIP or GCTIN"
  | "IBAN"
  | "PROD TIME"
  | "CPID"
  | "CPID SERIAL"
  | "VERSION"
  | "GSRN - provider GSRN - recipient"
  | "SRIN"
  | "REF No."
  | "POINTS"
  | "Product url"
  | "Internal";


export const appIdentToNameMap: { [Property in ApplicationIdentifier]: ApplicationIdentifierName } = {
  "00": "SSCC",
  "01": "GTIN",
  "02": "Content",
  "10": "Batch / Lot",
  "11": "Prod Date",
  "12": "Due Date",
  "13": "Pack Date",
  "15": "Best Before or Best By",
  "16": "Sell By",
  "17": "Use By or Expiry",
  "20": "Variant",
  "21": "Serial",
  "22": "CPV",
  "240": "Additional ID",
  "241": "Cust.Part No.",
  "242": "MTO variant",
  "243": "PCN",
  "250": "Secondary Serial",
  "251": "Ref. to source",
  "253": "GDTI",
  "254": "GLN Extension Component",
  "255": "GCN",
  "30": "Var.Count",
  "31": "Dimensions",
  "32": "Dimensions",
  "33": "Dimensions",
  "34": "Dimensions",
  "35": "Dimensions",
  "36": "Dimensions",
  "37": "Count",
  "390N": "Amount",
  "391N": "Amount",
  "392N": "Price",
  "393N": "Price",
  "394N": "PRCNT OF",
  "400": "Order number",
  "401": "GINC",
  "402": "GSIN",
  "403": "Route",
  "410": "Ship to loc",
  "411": "Bill to",
  "412": "Purchase from",
  "413": "Ship for Loc",
  "414": "Loc No.",
  "415": "Pay to",
  "416": "PROD/SERV LOC",
  "420": "Ship to post",
  "421": "Ship to post",
  "422": "Origin",
  "423": "Country - initial process.",
  "424": "Country - process.",
  "425": "Country - disassembly",
  "426": "Country - full proces",
  "427": "Origin subdivision",
  "7001": "NSN",
  "7002": "Meat cut",
  "7003": "Expiry time",
  "7004": "Active potency",
  "7005": "Catch Area",
  "7006": "First Freeze date",
  "7007": "Harvest Date",
  "7008": "Aquatic species",
  "7009": "Fishing Gear type",
  "7010": "Prod Method",
  "7020": "Refurb Lot",
  "7021": "FUNC STAT",
  "7022": "REV STAT",
  "7023": "GIAI - ASSEMBLY",
  "703S": "Processor # s",
  "710": "NHRN",
  "711": "NHRN",
  "712": "NHRN",
  "713": "NHRN",
  "714": "NHRN",
  "8001": "Dimensions",
  "8002": "CMT No.",
  "8003": "GRAI",
  "8004": "GIAI",
  "8005": "Price per unit",
  "8006": "ITIP or GCTIN",
  "8007": "IBAN",
  "8008": "PROD TIME",
  "8010": "CPID",
  "8011": "CPID SERIAL",
  "8012": "VERSION",
  "8019": "SRIN",
  "8020": "REF No.",
  "8111": "POINTS",
  "8200": "Product url",
};
