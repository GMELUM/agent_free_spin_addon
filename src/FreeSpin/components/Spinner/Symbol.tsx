import React from "react";
import styles from "./Symbol.module.css";

interface SymbolProps {
  symbol: string;
  evaluated: boolean;
  defaultStyleClass: string;
  evaluatedStyleClass: string;
}

const Symbol: React.FC<SymbolProps> = ({ 
  symbol, 
  evaluated, 
  defaultStyleClass, 
  evaluatedStyleClass 
}) => (
  <div
    className={`
      ${styles.symbol} 
      ${defaultStyleClass} 
      ${evaluated ? evaluatedStyleClass : ""}`}
  >
    {symbol}
  </div>
);

export default Symbol;
