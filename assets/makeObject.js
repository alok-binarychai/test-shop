 // var makeObject = {
 //   "Volkswagen" : {
 //     "ID3" : ["2019"]
 //   }
 // }

// Sample Object for three level filter. First level is Make, second is model and third is year. Last/Third filter should be an array.
// First value is Make, second is model and this is year
let makeObject = {
  "MERCEDES": {
        "A CLASS": [
            "V177 LCI (2023+)",
            "V177 PRE LCI ( 2018-2022)",
            "V177 PRE LCI (2018-2022",
            "V177 PRE LCI (2018-2022)",
            "W176 LCI (2016-2018)",
            "W176 PRE LCI (2012-2015)",
            "W177 LCI (2023+)",
            "W177 PRE LCI (2018+)",
            "W177 PRE LCI (2018-2021)",
            "W177 PRE LCI (2018-2022)"
        ],
        "B CLASS": [
            "W242 LCI (2015-2018)",
            "W246 LCI (2015-2018)"
        ],
        "C CLASS": [
            "A205 (2017-2023)",
            "A205 LCI (2019-2021)",
            "A205 LCI (2019-2023)",
            "A205 LCI (2020-2021)",
            "A205 PRE LCI (2015-2018)",
            "A205 PRE LCI (2015-2019)",
            "A205 PRE LCI (2016-2018)",
            "C204 LCI (2012-2015)",
            "C205 (2017-2023)",
            "C205 LCI (2019-2021)",
            "C205 LCI (2019-2023)",
            "C205 LCI (2020-2021)",
            "C205 PRE LCI (2015-2018)",
            "C205 PRE LCI (2015-2019)",
            "C63 PRE LCI (2015-2018)",
            "C63S PRE LCI (2015-2018)",
            "CL203 LCI (2004-2007)",
            "CL203 PRE LCI (2001-2003)",
            "S203 LCI (2004-2007",
            "S203 LCI (2004-2007)",
            "S203 PRE LCI (2000-2003)",
            "S203 PRE LCI (2001-2003)",
            "S204 LCI (2011-2014)",
            "S204 LCI (2011-2015)",
            "S204 PRE LCI (2008-2010)",
            "S205 (2015-2021)",
            "S205 LCI (2019-2021)",
            "S205 PRE LCI (2015-2018)",
            "S206 (2022+)",
            "W203 LCI (2004-2007)",
            "W203 PRE LCI (2000-2003)",
            "W203 PRE LCI (2001-2003)",
            "W204 LCI (2011-2014)",
            "W204 LCI (2011-2015)",
            "W204 PRE LCI (2008-2010)",
            "W205 (2015-2021)",
            "W205 LCI (2019-2021)",
            "W205 PRE LCI (2015-2018)",
            "W206 (2022+)"
        ],
        "CLA": [
            "C117 LCI (2017-2019)",
            "C117 PRE LCI (2013-2016)",
            "C118 PRE LCI (2019-2023)",
            "X117 LCI (2017-2019)",
            "X117 PRE LCI (2013-2016)",
            "X117 PRE-LCI (2013-2016)",
            "X118 PRE LCI (2019-2023)"
        ],
        "CLA CLASS": [
            "C117 LCI (2017-2019)",
            "C117 PRE LCI (2013-2016)",
            "C118 (2019+)",
            "C118 PRE LCI (2019+)",
            "C118 PRE LCI (2019-2023)",
            "X117 LCI (2017-2019)",
            "X117 PRE LCI (2013-2016)",
            "X118 PRE LCI (2019+)",
            "X118 PRE LCI (2019-2023)"
        ],
        "CLS": [
            "C218 LCI (2014-2017)",
            "C218 PRE LCI (2011-2013)",
            "C257 (2018-2023)",
            "X218 LCI (2014-2017)",
            "X218 PRE LCI (2011-2013)"
        ],
        "CLS CLASS": [
            "C218 LCI (2014-2017)",
            "C218 PRE LCI (2011-2013)",
            "C219 LCI (2008-2010)",
            "C219 PRE LCI (2003-2007)",
            "C257 (2018-2023)",
            "W218 LCI (2014-2017)",
            "W218 PRE LCI (2011-2013)",
            "X218 LCI (2014-2018)",
            "X218 PRE LCI (2011-2013)"
        ],
        "DISCOVERY SPORT": [
            "L550 PRE-LCI (2014-2019)"
        ],
        "E CLASS": [
            "A207 LCI (2013-2017)",
            "A207 PRE LCI (2009-2012)",
            "A207 PRE LCI (2010-2012)",
            "A238 LCI (2021+)",
            "A238 LCI (2021-2023)",
            "A238 PRE LCI  (2017-2020)",
            "A238 PRE LCI (2017-2020)",
            "C207 LCI (2013-2017)",
            "C207 PRE LCI (2009-2012)",
            "C207 PRE LCI (2010-2012)",
            "C238 LCI (2021+)",
            "C238 LCI (2021-2023)",
            "C238 PRE LCI (2017-2020)",
            "S211 LCI (2006-2009)",
            "S211 PRE LCI (2002-2005)",
            "S212 LCI (2013-2016)",
            "S212 PRE LCI (2009-2012)",
            "S213 LCI (2021+)",
            "S213 PRE LCI (2009-2012)",
            "S213 PRE LCI (2017-2020)",
            "W207 LCI (2013-2017)",
            "W211 LCI (2006-2009)",
            "W211 PRE LCI (2002-2005)",
            "W212 LCI (2013-2016)",
            "W212 PRE LCI (2009-2012)",
            "W213 LCI (2021 +)",
            "W213 LCI (2021+)",
            "W213 PRE LCI (2017-2020)",
            "W213 PRE-LCI (2016-2020)"
        ],
        "G CLASS": [
            "W463 (1989+)",
            "W463 LCI (2007-2018)",
            "W463 SWB LWB (1989-2018)"
        ],
        "GLA": [
            "H247 PRE LCI (2019-2023)"
        ],
        "GLA CLASS": [
            "X156 LCI (2017-2019)",
            "X156 PRE LCI (2014-2016)"
        ],
        "GLB": [
            "X247 PRE LCI (2019-2022)"
        ],
        "GLB CLASS": [
            "X247 PRE LCI (2019-2022)"
        ],
        "GLC": [
            "C253 LCI (2020-2021)",
            "C253 LCI (2020-2022)",
            "C253 PRE LCI (2016-2019)",
            "X253 LCI (2020-2022)",
            "X253 PRE LCI (2016-2019)"
        ],
        "GLC CLASS": [
            "C253 LCI (2020-2021)",
            "C253 LCI (2020-2022)",
            "C253 PRE LCI (2016-2019)",
            "C254 (2022+)",
            "X164 LCI (2009-2012)",
            "X164 PRE LCI (2006-2008)",
            "X253 LCI (2020-2021)",
            "X253 LCI (2020-2022)",
            "X253 PRE LCI (2016-2019)",
            "X254 (2022+)",
            "_X253 LCI (2020-2021)"
        ],
        "GLE": [
            "C292 (2015-2019)",
            "W166 LCI (2016-2019)",
            "W167 PRE LCI (2019-2023)",
            "X166 LCI (2016-2019)"
        ],
        "GLE CLASS": [
            "C167 LCI (2024+)",
            "C167 PRE LCI (2019-2023)",
            "C167 PRE LCI (2020-2023)",
            "C292 (2015-2019)",
            "C292 LCI (2015-2019)",
            "V167 PRE LCI (2019-2023)",
            "W166 LCI (2016-2019)",
            "W166 PRE LCI (2012-2015)",
            "W166 PRE LCI (2015-2019)",
            "W167 PRE LCI (2019-2023)",
            "X166 PRE LCI (2015-2019)"
        ],
        "GLK CLASS": [
            "X204 LCI (2012-2016)"
        ],
        "GLS Class": [
            "W166 LCI (2016-2019)",
            "W166 PRE LCI (2015-2019)",
            "W167 PRE LCI (2019-2023)",
            "X166 LCI (2016-2019)",
            "X167 PRE LCI (2019-2022)"
        ],
        "M CLASS": [
            "W163 LCI (2002-2005)",
            "W163 PRE LCI (1998-2001)",
            "W164 LCI (2009-2011)",
            "W164 LCI (2009-2012)",
            "W164 PRE LCI (2005-2008)",
            "W164 PRE LCI (2006-2008)",
            "W166 LCI (2015-2019)",
            "W166 PRE LCI (2011-2015)",
            "W166 PRE LCI (2012-2014)",
            "X164 PRE LCI (2006-2008)"
        ],
        "MODEL_Sprinter 3-T": [
            "W906 LCI (2014-2018)"
        ],
        "S CLASS": [
            "A217 LCI (2017-2021)",
            "C217 LCI (2017-2021)",
            "V222 LCI (2017-2020)",
            "V222 PRE LCI (2014-2016)",
            "V223 (2020+)",
            "W220 (1998-2005)",
            "W221 LCI (2009-2013)",
            "W221 PRE LCI (2006-2008)",
            "W222 LCI (2017-2020)",
            "W222 PRE LCI (2014-2016)",
            "W222 PRE-LCI (2013-2017)",
            "W223 (2020+)",
            "W223 (2021+)",
            "X222 LCI (2017-2020)",
            "X222 PRE LCI (2014-2016)",
            "Z223 (2020+)"
        ],
        "SLK CLASS": [
            "R171 LCI (2008-2011)",
            "R171 PRE-LCI (2005-2007)",
            "R172 (2011-2015)"
        ],
        "SPRINTER": [
            "B906 LCI (2016-2018)"
        ],
        "Sprinter 3": [
            "W906 LCI (2014-2018)",
            "W907 (2019+)",
            "W910 (2019+)"
        ],
        "V CLASS": [
            "W447 LCI (2020-2022)",
            "W447 PRE LCI (2014-2019)"
        ],
        "VIANO": [
            "W639 PRE LCI (2003-2010)"
        ],
        "VITO": [
            "W447 LCI (2020-2022)",
            "W447 PRE LCI (2014-2019)",
            "W447 PRE LCI (2014-2023)",
            "W639 LWB LCI (2010-2014)",
            "W639 LWB PRE LCI (2003-2009)",
            "W639 SWB LCI (2010-2014)",
            "W639 SWB PRE LCI (2003-2009)"
        ],
        "X CLASS": [
            "W470 (2017-2020)"
        ]
    },
    "BMW": {
        "1 SERIES": [
            "E81 LCI (2007-2011)",
            "E81 LCI (2009-2012)",
            "E81 PRE-LCI (2005-2008)",
            "E82 (2007-2013)",
            "E82 LCI (2009-2012)",
            "E82 LCI (2011-2013)",
            "E84 (2009-2015)",
            "E87 LCI (2007-2011 )",
            "E87 LCI (2009-2012)",
            "E87 PRE-LCI (2005-2008)",
            "E88 LCI (2011-2013)",
            "E90 LCI (2009-2012)",
            "E90 PRE-LCI (2005-2008)",
            "E91 LCI (2009-2012)",
            "E91 PRE-LCI (2005-2008)",
            "E92 LCI (2011-2013)",
            "E92 PRE-LCI (2007-2010)",
            "E93 LCI (2011-2013)",
            "E93 PRE-LCI (2007-2010)",
            "F20 LCI (2015-2018)",
            "F20 PRE-LCI (2012-2014)",
            "F21 LCI (2015-2018)",
            "F21 PRE-LCI (2012-2014)",
            "F22 LCI (2017-2020)",
            "F22 PRE-LCI (2014-2016)",
            "F23 LCI (2017-2020)",
            "F23 PRE-LCI (2014-2016)",
            "F30 LCI (2016-2018)",
            "F30 PRE-LCI (2011-2015)",
            "F31 LCI (2016-2018)",
            "F31 PRE-LCI (2011-2015)",
            "F32 LCI (2017-2020)",
            "F32 PRE-LCI (2013-2016)",
            "F33 LCI (2017-2020)",
            "F33 PRE-LCI (2013-2016)",
            "F36 LCI (2017-2020)",
            "F36 PRE-LCI (2014-2016)",
            "F40 (2019+)",
            "F40 PRE (2019+)",
            "F52 (2017-2024)",
            "F80 M3 LCI (2016-2018)",
            "F80 M3 PRE-LCI (2011-2015)",
            "F82 M4 LCI (2017-2020)",
            "F82 M4 PRE-LCI (2014-2016)",
            "F87 M2 (2015-2020)"
        ],
        "2 SERIES": [
            "F22 LCI (2017-2020)",
            "F22 PRE-LCI (2014-2016)",
            "F23 LCI (2017-2020)",
            "F23 PRE-LCI (2014-2016)",
            "F44 (2019+)",
            "F45 (2014-2021)",
            "F87 M2 (2015-2020)",
            "G42 (2021+)",
            "G87 (2021+)"
        ],
        "3 SERIES": [
            "E36 (1990-1999)",
            "E36 PRE-LCI (1992-1998)",
            "E46 (1998-2001)",
            "E46 (1999-2005)",
            "E46 LCI (1999-2001)",
            "E46 PRE (2003-2007)",
            "E46 PRE LCI (1999-2001)",
            "E46 PRE LCI (2003-2007)",
            "E90 LCI (2009-2012)",
            "E90 M3 (2008-2012)",
            "E90 PRE-LCI (2005-2008)",
            "E91 (2004-2012)",
            "E91 LCI (2009-2012)",
            "E91 PRE-LCI (2005-2008)",
            "E92 LCI (2011-2013)",
            "E92 M3 (2007-2010)",
            "E92 M3 (2008-2013)",
            "E92 M3 (2011-2013)",
            "E92 PRE-LCI (2007-2010)",
            "E93 LCI (2011-2013)",
            "E93 M3 (2007-2010)",
            "E93 M3 (2008-2013)",
            "E93 M3 (2011-2013)",
            "E93 PRE-LCI (2007-2010)",
            "F30 LCI (2016-2018",
            "F30 LCI (2016-2018)",
            "F30 PRE-LCI (2011-2015)",
            "F31 LCI (2016-2018)",
            "F31 PRE-LCI (2011-2015)",
            "F34 (2011-2018)",
            "F80 M3 (2014-2018)",
            "F80 M3 LCI (2016-2018)",
            "F80 M3 PRE-LCI (2011-2015)",
            "F82 M4 LCI (2017-2020)",
            "F82 M4 LCI (2018-2019)",
            "F82 M4 PRE-LCI (2013-2016)",
            "F82 M4 PRE-LCI (2014-2016)",
            "F83 M4 LCI (2018-2019)",
            "F83 M4 PRE-LCI (2014-2016)",
            "G20 LCI (2022+)",
            "G20 PRE-LCI (2018-2022)",
            "G20 PRE-LCI (2019-2021)",
            "G21 LCI (2022+)",
            "G21 PRE-LCI (2018-2022)",
            "G21 PRE-LCI (2019-2021)",
            "G30 PRE-LCI (2017-2020)",
            "G80 (2021-2023)",
            "G80 M3 (2022+)",
            "G81 M3 (2022+)",
            "G82 M4 (2020+)",
            "G83 M4 (2020+)"
        ],
        "4 SERIES": [
            "F32 LCI (2017-2020)",
            "F32 PRE-LCI (2013-2016)",
            "F33 LCI (2017-2020)",
            "F33 PRE-LCI (2013-2016)",
            "F36 LCI (2017-2020)",
            "F36 LCI (2017-2021)",
            "F36 PRE-LCI (2013-2016)",
            "F36 PRE-LCI (2014-2016)",
            "F80 M3 LCI (2016-2018)",
            "F80 M3 PRE-LCI (2011-2015)",
            "F82 M4 LCI (2017-2020)",
            "F82 M4 LCI (2018-2019)",
            "F82 M4 PRE-LCI (2013-2016)",
            "F82 M4 PRE-LCI (2014-2016)",
            "F83 M4 LCI (2018-2019)",
            "F83 M4 PRE-LCI (2014-2016)",
            "G22 (2020+)",
            "G22 (2020-2022)",
            "G23 (2020+)",
            "G26 (2020+)"
        ],
        "5 SERIES": [
            "E39 LCI  (2000-2003)",
            "E39 LCI (2000-2003)",
            "E39 PRE (1995-2002)",
            "E39 PRE LCI (1995-2002)",
            "E60 (2004-2010)",
            "E60 M5 (2005-2010)",
            "E61 (2004-2010)",
            "F01\/F02\/F03\/F04 PRE-LCI (2008-2012)",
            "F07 (2009+)",
            "F10 LCI (2014-2016)",
            "F10 M5 (2011-2016)",
            "F10 PRE-LCI (2010-2013)",
            "F11 LCI (2014-2016)",
            "F11 PRE-LCI (2010-2013)",
            "F90 M5 (2017-2024)",
            "G20 PRE-LCI (2019-2021)",
            "G30 LCI (2021-2024)",
            "G30 PRE-LCI (2017-2020)",
            "G31 LCI (2021-2024)",
            "G31 PRE-LCI (2017-2020)"
        ],
        "6 SERIES": [
            "E63 (2005-2010)",
            "F06 (2011-2018)",
            "F12 (2011-2018)",
            "F13 (2011-2018)",
            "G32 (2017-2023)",
            "G32 PRE (2017-2023)",
            "G32 PRE-LCI (2017-2019)"
        ],
        "7 SERIES": [
            "65 PRE-LCI (2001-2004)",
            "66 PRE-LCI (2001-2004)",
            "E65 (2005-2008)",
            "E65 PRE-LCI (2001-2004)",
            "E66 PRE-LCI (2001-2004",
            "F01\/F02\/F03\/F04 LCI (2013-2015)",
            "F01\/F02\/F03\/F04 PRE-LCI (2008-2012)",
            "G11\/12 PRE-LCI (2015-2018)",
            "G11\/G12 LCI (2019-2022)",
            "G70 (2022+)"
        ],
        "8 SERIES": [
            "G14 (2018+)",
            "G15 (2018+)",
            "G16 (2018+)"
        ],
        "E92 PRE-LCI (2007-2010)": [
            "E92 LCI (2011-2013)",
            "E93 LCI (2011-2013)",
            "E93 PRE-LCI (2007-2010)"
        ],
        "I3": [
            "I01 (2013-2022)"
        ],
        "MODEL_7SERIES": [
            "E65 PRE-LCI (2001-2004)"
        ],
        "X1": [
            "E84 (2009-2015)",
            "F48\/F49 LCI (2020-2022)",
            "F48\/F49 PRE-LCI (2016-2019)"
        ],
        "X2": [
            "F39 (2017-2023)"
        ],
        "X2 SERIES": [
            "F39 PRE (2017-2023)",
            "F39 PRE LCI(2017-2023)"
        ],
        "X3": [
            "E83 LCI (2003-2010)",
            "F15 (2013-2018)",
            "F16 (2014-2019)",
            "F25 LCI (2015-2017)",
            "F25 PRE-LCI (2010-2014)",
            "F26 (2014-2018)",
            "F97 X3M (2017+)",
            "F98 X4M (2018+)",
            "G01 LCI (2021+)",
            "G01 PRE-LCI (2017-2020)",
            "G01 PRE-LCI (2018-2022)",
            "G02 (2018+)",
            "G02 (2018-2022)",
            "G02 PRE (2018+)",
            "G02 PRE-LIC (2018-2022)",
            "G05 PRE-LCI (2018-2023)",
            "G06 (2020+)",
            "G07 (2019+)"
        ],
        "X3M": [
            "F97 X3M (2017+)",
            "F98 X4M (2018+)",
            "G01 LCI (2021+)",
            "G01 PRE-LCI (2017-2020)",
            "G01 PRE-LCI (2018-2022)",
            "G02 (2018+)",
            "G02 (2018-2022)",
            "X3M"
        ],
        "X4": [
            "F26 (2014-2018)",
            "G02 (2018+)"
        ],
        "X5": [
            "E53 LCI (2003-2006)",
            "E70 LCI (2011-2013)",
            "E70 PRE-LCI (2007-2010)",
            "E71 (2008-2014)",
            "F15 (2013-2018)",
            "F15 F85 X5M (2015-2018)",
            "F16 (2014-2019)",
            "F16 F86 X5M (2014-2018)",
            "G05 F95 X5M (2019+)",
            "G05 PRE-LCI (2018-2023)",
            "G06 (2020+)",
            "GO5 F95 X5M (2019+)"
        ],
        "X6": [
            "E71 (2008-2014)",
            "F16 (2014-2019)",
            "G06 (2020+)"
        ],
        "X7": [
            "G07 (2019+)",
            "G07 PRE-LCI (2018-2021)"
        ],
        "Z4": [
            "E89 (2009-2016)",
            "G29 (2019+)"
        ]
    },
    "AUDI": {
        "8V PRE LCI (2013-2015)": [
            "8V LCI (2016-2019)"
        ],
        "A1": [
            "8X LCI (2015-2018)"
        ],
        "A3": [
            "8P LCI (2008-2012)",
            "8P LCI (2009-2013)",
            "8V LCI (2016-2019)",
            "8V LCI (2017-2020)",
            "8V LCI (20216-2019)",
            "8V PRE LCI (2013-2015)",
            "8V PRE-LCI (2012-2015)",
            "8Y (2020+)",
            "8Y LCI (2020-2024)",
            "_8V PRE-LCI (2012-2015)"
        ],
        "A4": [
            "8K LCI (2012-2015)",
            "8K PRE-LCI (2008-2011)",
            "8W LCI (2020+)",
            "8W LCI (2020-2023)",
            "8W PRE-LCI (2016-2019)",
            "8W PRE-LCI(2016-2019)",
            "B7 PRE (2005-2008)",
            "B7 PRE-LCI (2005-2008)",
            "B8 LCI (2012-2015)",
            "B8 PER-LCI (2008-2011)",
            "B8 PRE-LCI (2008-2011)",
            "B9 PRE-LCI (2016-2020)"
        ],
        "A5": [
            "8T (2017+)",
            "8T LCI (2012-2016)",
            "8T PRE-LCI (2007-2011)",
            "B8 LCI (2012-2016)",
            "B8 PRE-LCI (2008-2011)",
            "F5 (2017+)",
            "F5 LCI (2017-2020)",
            "F5 LCI (2020-2023)",
            "S5 (2017+)"
        ],
        "A6": [
            "4G LCI (2015-2018)",
            "4G PRE-LCI (2011-2015)",
            "4K (18+)",
            "C5  PRE LCI (1997-2001)",
            "C5 LCI (2002-2005)",
            "C6 LCI (2009-2011)",
            "C6 PRE LCI (2006-2008)",
            "C7 LCI (2015-2018)",
            "C7 PRE (2011-2014)",
            "C7 PRE-LCI (2011-2014)",
            "C7 PRE-LCI (2015-2018)",
            "C8 (2019+)",
            "C8 PRE LCI (2018-2020)"
        ],
        "A7": [
            "4K (2018+)",
            "4K LCI (2015-2018)",
            "4K MK2 (2018+)",
            "4K MK2 (2019+)",
            "4K PRE-LCI (2010-2015)"
        ],
        "A8": [
            "D4 LCI (2014-2017)",
            "D4 PRE LCI (2010-2013)"
        ],
        "MODEL_Q5": [
            "80A LCI (2021-2024)",
            "80A PRE-LCI (2018-2020)",
            "8OA LCI (2021-2024)",
            "8R LCI (2012-2016)",
            "8R PRE-LCI (2008-2011)",
            "MK2 (2017-2013)",
            "MK2 LCI (2021+)"
        ],
        "Q2": [
            "GA PRE-LCI (2017-2022)",
            "Q2 (2016+)"
        ],
        "Q3": [
            "8U LC1 (2015-2018)",
            "8U LC1(2015-2018)",
            "8U LCI (2015-2018)",
            "8U PRE-LCI (2011-2014)"
        ],
        "Q7": [
            "4L FSI PRE-LCI (2006-2009)",
            "4L PRE (2010-2015)",
            "4L PRE-LCI (2006-2015)",
            "4L PRE-LCI (2009-2015)",
            "4L TDI LCI (2010-2015)",
            "4L TDI PRE-LCI (2006-2009)",
            "4L TFSI LCI (2010-2015)",
            "4M LCI (2020-2023)",
            "4M PRE-LCI (2016-2019)"
        ],
        "Q8": [
            "4M LCI (2019-2023)",
            "4M LCI (2020-2023)",
            "4M PRE-LCI (2016-2019)",
            "4M PRE-LCI (2019-2023)",
            "Q8 (2018-2024)",
            "RS PRE-LCI (2019-2023)"
        ],
        "R8 SPYDER": [
            "R8 LCI (2007-2015)"
        ],
        "S3": [
            "8V LCI (2016-2019)"
        ],
        "TT": [
            "8J LCI (2008-2014)",
            "8J PRE-LCI (2006-2008)",
            "8J PRE-LCI (2008-2014)",
            "MK3 LCI (2015-2018)",
            "MK3 LCI (2017-2020)",
            "MK3 LCI TDI (2023+)"
        ]
    },
    "TESLA": {
        "MODEL 3": [
            "5YJ3 (2017+)",
            "MODEL 3 (2017+)"
        ],
        "MODEL Y": [
            "5YJY (2020+)"
        ]
    },
    "porsche": {
        "cayenne": [
            "92A (2015-2017)",
            "9Y (2018+)"
        ],
        "macan": [
            "95B (2014+)"
        ]
    },
    "VOLKSWAGEN": {
        "AMAROK": [
            "MK1 LCI (2010-2015)",
            "MK1 LCI (2015-2020)",
            "MK1 PRE-LCI (2010-2015)",
            "MK1 PRE-LCI (2016-2021)"
        ],
        "BEETLE": [
            "A5 TDI (2011-2019)",
            "A5 TSI (2011-2019)"
        ],
        "CADDY": [
            "MK3 (2004-2020)",
            "MK3 (2010-2015)",
            "MK3 LCI (2010-2014)",
            "MK3 LCI (2010-2015)",
            "MK3 LCI (2010-2019)",
            "MK3 LCI (2015-2020)",
            "MK3 PRE LCI (2005-2009)",
            "MK4 LCI (2020-2024)",
            "MK6 5K (2010-2014)"
        ],
        "GOLF": [
            "MK5 (R32) (2005-2009)",
            "MK5 PRE-LCI GTD (2013-2017)",
            "MK5 PRE-LCI GTI (2013-2017)",
            "MK5 PRE-LCI R-LINE (2013-2017)",
            "MK5 PRE-LCI TDI (2013-2017)",
            "MK5 PRE-LCI TSI (2013-2017)",
            "MK6 (R20) (2009-2012)",
            "MK6 GTD (2009-2012)",
            "MK6 GTI (2009-2012)",
            "MK6 GTI (2009-2013)",
            "MK6 GTI (2011-2016)",
            "MK6 R (2009-2013)",
            "MK6 R (2011-2016)",
            "MK6 R-LINE (2009-2012)",
            "MK6 TDI (2009-2012)",
            "MK6 TDI (2009-2013)",
            "MK6 TDI (2011-2016)",
            "MK6 TSI (2009-2012)",
            "MK6 TSI (2009-2013)",
            "MK6 TSI (2011-2016)",
            "MK7 PRE-LCI GTD (2013-2016)",
            "MK7 PRE-LCI GTE (2013-2016)",
            "MK7 PRE-LCI GTI (2013-2016)",
            "MK7 PRE-LCI R-LINE (2013-2016)",
            "MK7 PRE-LCI TDI (2013-2016)",
            "MK7 PRE-LCI TSI (2013-2016)",
            "MK7.5  LCI GTI (2017-2019)",
            "MK7.5  LCI R-LINE (2017-2019)",
            "MK7.5 LCI GTD (2017-2019)",
            "MK7.5 LCI GTE (2017-2019)",
            "MK7.5 LCI GTI (2017-2019)",
            "MK7.5 LCI R-LINE (2017-2019)",
            "MK7.5 LCI TDI (2017-2019)",
            "MK7.5 LCI TSI (2017-2019)",
            "MK8 GTD (2020+)",
            "MK8 GTE (2020+)",
            "MK8 GTE PRE-LCI(2019-2023)",
            "MK8 GTI (2020+)",
            "MK8 GTI PRE-LCI (2019-2020)",
            "MK8 R-LINE (2020+)",
            "MK8 TDI (2020+)",
            "MK8 TSI (2020+)"
        ],
        "ID.3": [
            "MK1 (2019-2022)"
        ],
        "POLO": [
            "MK5 GTI (2009-2017)",
            "MK5 LCI GTI (2014-2017)",
            "MK5 LCI TDI (2014-2017)",
            "MK5 LCI TSI (2014-2017)",
            "MK5 PRE-LCI GTI (2009-2013)",
            "MK5 PRE-LCI TDI (2009-2013)",
            "MK5 PRE-LCI TSI (2009-2013)",
            "MK6 LCI GTI (2022+)",
            "MK6 LCI TDI (2021+)",
            "MK6 LCI TSI (2021+)",
            "MK6 PRE-LCI GTI (2017-2021)",
            "MK6 PRE-LCI TDI (2018-2021)",
            "MK6 PRE-LCI TSI (2018-2021)"
        ],
        "T-ROC": [
            "LCI TDI (2022+)",
            "LCI TSI (2022+)",
            "PRE-LCI TDI (2017-2021)",
            "PRE-LCI TSI (2017-2021)"
        ],
        "TIGUAN": [
            "MK2 LCI (2020+)",
            "MK2 LCI (2021+)",
            "MK2 PRE-LCI (2015-2020)",
            "MK2 PRE-LCI (2016-2023)"
        ],
        "TOUAREG": [
            "MK3 LCI TDI (2023+)",
            "MK3 LCI TSI (2023+)",
            "MK3 PRE-LCI TDI (2018-2023)",
            "MK3 PRE-LCI TSI (2018-2023)"
        ],
        "TRANSPORTER": [
            "MK5 PRE-LCI (2003-2021)",
            "MK5 PRE-LCI (2016-2021)",
            "T5 LCI (2009-2015)",
            "T5 PRE-LCI (2003-2008)",
            "T6 (2016-2019)",
            "T6 (2016-2021)",
            "T6 (2016-2022)",
            "T6 PRE-LCI (2015+)",
            "T6 PRE-LCI (2015-2018)"
        ]
    },
    "NISSAN": {
        "NAVARA": [
            "D23 (2014-2021)",
            "D40 LCI (2011-2021)",
            "D40 PRE-LCI (2004-2010)"
        ],
        "QASHQAI": [
            "MK2 J11 (2013-2021)"
        ]
    },
    "TOYOTA": {
        "COROLLA": [
            "E21 LCI (2022+)",
            "E21 PRE-LCI (2018-2021)"
        ],
        "GT86": [
            "GT86 LCI (2017-2020)",
            "GT86 PRE-LCI (2013-2016)",
            "SUBARU BRZ LCI (2017-2020)",
            "SUBARU BRZ PRE-LCI (2013-2016)"
        ],
        "HILUX": [
            "MK8 (2015+)"
        ],
        "PRIUS": [
            "XW50 PRE-LCI (2016-2018)"
        ],
        "RAV4": [
            "MK3 (2006-2012)",
            "MK3 LCI (2011-2016)",
            "MK3 PRE-LCI (2006-2010)",
            "MK4 (2012-2019)"
        ]
    },
    "MINI": {
        "MINI": [
            "F55 (2013-2018)",
            "F56 (2013-2018)"
        ]
    },
    "SEAT": {
        "IBIZA": [
            "IBIZA MK5 PRE LCI (2017-2021)"
        ],
        "LEON": [
            "MK3 LCI (2017-2020)",
            "MK3 PRE-LCI (2012-2016)"
        ]
    },
    "LAND ROVER": {
        "DEFENDER": [
            "L316 (1990-2016)"
        ],
        "DEFENDER 110": [
            "L316 (1990-2016)",
            "L316 (2007-2016)",
            "L462 MK5 (2017+)",
            "L663 (2020+)",
            "LDH (1983-1990)",
            "MK1 (LDV) (1984-1990)"
        ],
        "DEFENDER 90": [
            "L316 (2003-2016)",
            "L663 (2020+)"
        ],
        "DISCOVERY 2": [
            "L318 (2003-2004)",
            "L319 (2004-2009)",
            "L320 MK1 PRE-LCI (2006-2009)",
            "L322 LCI (2006-2009)"
        ],
        "DISCOVERY 3": [
            "L319 (2004-2009)",
            "L319 (2010-2016)",
            "L319 MK3 (2004-2008)",
            "L319 MK3 (2004-2009)",
            "L319 MK4 (2004-2016)",
            "L319 MK4 (2009-2016)",
            "L320 MK1 LCI (2010-2013)",
            "L320 MK1 PRE-LCI (2006-2009)",
            "L322 MK3 LCI (2010-2012)",
            "L359 LCI (2011-2014)",
            "L359 LCI (2013-2015)",
            "L359 PRE-LCI (2007-2012)"
        ],
        "DISCOVERY 4": [
            "L319 (2009-2016)",
            "L319 LCI (2014-2016)",
            "L319 MK4 (2009-2016)",
            "L319 MK4 (2014-2016)",
            "L319 PRE-LCI (2009-2013)",
            "L319 PRE-LCI (2010-2013)",
            "L320 MK1 LCI (2010-2013)",
            "L322 MK3 LCI (2010-2012)",
            "L359 (2007-2014)",
            "L405 MK4 (2018-2022)",
            "L405 MK4 PRE-LCI (2013-2017)",
            "L462 PRE-LCI (2017-2020)",
            "L494 MK2 LCI (2018-2022)",
            "L494 MK2 PRE-LCI (2013-2017)",
            "L538 PRE-LCI (2012-2015)"
        ],
        "DISCOVERY 5": [
            "L405 MK4 LCI (2018-2022)",
            "L405 MK4 PRE-LCI (2013-2017)",
            "L462 LCI (2021-2024)",
            "L462 MK5 (2017+)",
            "L462 MK5 LCI (2021+)",
            "L462 MK5 PRE-LCI (2017-2019)",
            "L462 MK5 PRE-LCI (2017-2020)",
            "L462 MK5 PRE-LCI (2021-2023)",
            "L462 PRE-LCI (2017-2020)",
            "L494 MK2 LCI (2018-2022)",
            "L494 MK2 PRE-LCI (2013-2018)",
            "L560 (2017+)",
            "L560 PRE-LCI (2017-2022)"
        ],
        "DISCOVERY SPORT": [
            "L550 LCI (2020+)",
            "L550 LCI (2020-2024)",
            "L550 PRE LCI (2014-2019)",
            "L550 PRE-LCI (2014-2019)",
            "L550 PRE-LCI (2015+)"
        ],
        "FREELANDER 2": [
            "L319 MK3 (2004-2009)",
            "L320 MK1 LCI (2010-2013)",
            "L320 PRE-LCI (2005-2009)",
            "L322 PRE-LCI (2002-2010)",
            "L359 LCI (2013-2014)",
            "L359 LCI (2013-2015)",
            "L359 PRE-LCI (2006-2012)",
            "L359 PRE-LCI (2006-2013)"
        ],
        "FREELANDER I": [
            "L314 (1998-2006)",
            "L359 LCI (2013-2015)",
            "L359 PRE-LCI (2007-2012)"
        ],
        "FREELANDER II": [
            "L322 MK3 LCI (2010-2012)",
            "L359 LCI (2002-2014)",
            "L359 LCI (2013-2015)",
            "L359 PRE-LCI (2007-2010)",
            "L359 PRE-LCI (2007-2012)",
            "L359 PRE-LCI (2010-2012)"
        ],
        "Freelander 2": [
            "L359 LCI (2013-2014)",
            "L359 LCI (2013-2015)",
            "L359 PRE-LCI (2006-2012)"
        ],
        "RANGE ROVER": [
            "L322 LCI (2002-2009)",
            "L322 LCI (2006-2009)",
            "L322 LCI (2010-2012)",
            "L322 MK3 PRE-LCI (2002-2009)",
            "L322 PRE-LCI (2001-2005)",
            "L405 (2013-2017)",
            "L405 LCI (2017-2022)",
            "L405 LCI (2018-2022)",
            "L405 MK4 PRE-LCI (2013-2017)",
            "L405 PRE-LCI (2013-2016)"
        ],
        "RANGE ROVER EVOQUE": [
            "L358 LCI (2015-2018)",
            "L538 LCI (2014-2018)",
            "L538 LCI (2014-2019)",
            "L538 LCI (2015-2018)",
            "L538 LCI (2016-2018)",
            "L538 PRE LCI (2012-2014)",
            "L538 PRE LCI (2012-2015)",
            "L538 PRE-LCI (2011-2014)",
            "L538 PRE-LCI (2011-2015)",
            "L538 PRE-LCI (2012-2014)",
            "L538 PRE-LCI (2012-2015)",
            "L538 PRE-LCI (2012-2018)",
            "L551 (2019+)",
            "L551 (2019-2024)"
        ],
        "RANGE ROVER SPORT": [
            "L320 LCI (2009-2012)",
            "L320 LCI (2009-2013)",
            "L320 LCI (2010-2014)",
            "L320 MK1 LCI (2010-2013)",
            "L320 MK1 PRE-LCI (2006-2009)",
            "L320 MK1 PRE-LCI (2010-2013)",
            "L320 PRE-LCI (2005-2008)",
            "L320 PRE-LCI (2005-2009)",
            "L320 PRE-LCI (2005-2010)",
            "L405 MK4 (2018-2022)",
            "L405 MK4 LCI (2018-2021)",
            "L405 MK4 LCI (2018-2022)",
            "L405 MK4 PRE-LCI (2013-2017)",
            "L460 (2022+)",
            "L461 MK3 (2022+)",
            "L494 MK2 LCI (2018-2021)",
            "L494 MK2 LCI (2018-2022)",
            "L494 MK2 PRE-LCI (2013-2017)",
            "L494 MK2 PRE-LCI (2013-2018)",
            "L494 PRE-LCI (2013-2017)",
            "L494 PRE-LCI (2014-2018)",
            "L494 PRE-LCI (2015-2018)"
        ],
        "RANGE ROVER VELAR": [
            "L560 (2017+)",
            "L560 LCI (2023+)",
            "L560 LCI (2023-2024)",
            "L560 PRE-LCI (2017-2022)"
        ],
        "RANGE ROVER VOGUE": [
            "L322 (2002-2012)",
            "L322 LCI (2006-2009)",
            "L322 LCI (2006-2012)",
            "L322 MK3 LCI (2010-2012)",
            "L322 MK3 PRE-LCI (2002-2009)",
            "L322 PRE-LCI (2002-2009)",
            "L405 LCI (2018-2022)",
            "L405 MK4 (2018-2022)",
            "L405 MK4 LCI (2018-2021)",
            "L405 MK4 LCI (2018-2022)",
            "L405 MK4 LCI (2018-2023)",
            "L405 MK4 PRE-LCI (2013-2017)",
            "L405 MK4 PRE-LCI (2013-2018)",
            "L405 PRE-LCI (2018-2021)",
            "L460 (2022+)"
        ]
    },
    "JAGUAR": {
        "DISCOVERY SPORT": [
            "L538 LCI (2014-2019)",
            "L550 LCI (2020+)",
            "L550 PRE-LCI (2014-2019)",
            "L560 (2017+)",
            "X761 PRE-LCI (2016-2020)"
        ],
        "F-PACE": [
            "L560 (2017+)",
            "L560 LCI (2023-2024)",
            "L560 PRE-LCI (2017-2022)",
            "X761 (2015-2023)",
            "X761 LCI (2021+)",
            "X761 PRE-LCI (2016-2020)"
        ]
    },
    "FORD": {
        "FIESTA": [
            "MK6 (2009-2012)",
            "MK6 LCI (2013-2017)",
            "MK6 PRE-LCI (2009-2012)"
        ],
        "FOCUS": [
            "MK2 LCI (2008-2010)",
            "MK3 LCI (2015-2018)",
            "MK3 PRE-LCI (2011-2013)",
            "MK3 PRE-LCI (2012-2014)",
            "MK4 (2019-2021)"
        ],
        "KUGA": [
            "MK2 (2011-2019)",
            "MK2 (2013-2019)"
        ],
        "RANGER": [
            "T6 (2011-2022)",
            "T6 (2011-2024)",
            "T6 (2016-2019)",
            "T6 (2016-2022)",
            "T6 PRE-LCI (2011-2014)",
            "T6 TKE (2011-2019)",
            "T7 LCI (2015-2018)",
            "T8 LCI (2019-2021)",
            "T9 (2022+)"
        ],
        "TOURNEO CUSTOM": [
            "V362 (2012-2020)"
        ]
    },
    "ISUZU": {
        "D-MAX": [
            "MK2 (2012+)"
        ]
    },
    "HONDA": {
        "CR-V": [
            "MK2 LCI (2004-2006)",
            "MK2 PRE-LCI (2001-2003)",
            "MK3 LCI (2010-2012)",
            "MK3 PRE-LCI (2007-2010)",
            "MK4 LCI (2015-2018)",
            "MK4 PRE-LCI (2011-2014)",
            "MK5 LCI (2020-2023)",
            "MK5 PRE-LCI (2016-2019)"
        ]
    },
    "MITSUBISHI": {
        "L200": [
            "MK5 (2015+)"
        ]
    }
};

// Sample Object for two level filter. This sample data has filters for Car Make and Car Model. Last/Second filter should be an array.
let makeObject2 = {
  Acura: ["2015", "2014", "2013"],
  Accelera: ["175-70r13", "175-70r14", "175-70r15"],
  Nitto: ["165-60r13", "165-60r14", "165-60r15"],
};

// Sample Object for four level filter. This sample data has filters for Wheel Brand, Wheel Size, Lug Count, and Bolt Pattern. Last/Fourth filter should be an array.
let makeObject3 = {
  Acura: {
    ILX: {
      2014: ["4x100", "4x108"],
      2015: ["5x112", "5x114.3"],
    },
    Integra: {
      2015: ["5x100", "5x114.3", "5x120"],
    },
  },
  Enkei: {
    "17x8": {
      4: ["4x100", "4x108"],
      5: ["5x112", "5x114.3"],
    },
    "18x8.5": {
      5: ["5x100", "5x114.3", "5x120"],
    },
  },
  BBS: {
    "18x9": {
      5: ["5x112", "5x120"],
    },
    "19x8.5": {
      5: ["5x112", "5x114.3"],
    },
  },
  "OZ Racing": {
    "17x7.5": {
      4: ["4x100", "4x108"],
      5: ["5x100", "5x114.3"],
    },
    "18x8": {
      5: ["5x112", "5x120"],
    },
  },
  Forgestar: {
    "18x9": {
      5: ["5x114.3", "5x120"],
    },
    "19x10": {
      5: ["5x112", "5x120"],
    },
  },
  Vossen: {
    "20x9": {
      5: ["5x112", "5x120"],
    },
    "20x10.5": {
      5: ["5x114.3", "5x120"],
    },
  },
};
