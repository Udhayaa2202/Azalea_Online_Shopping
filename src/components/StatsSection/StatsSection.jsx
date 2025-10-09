import React from "react";

const StatsSection = () => {
  return (
    <div style={{ background: "#e80071", color: "#fff", padding: "40px 20px", textAlign: "center"}}>
      <div style={{ display: "flex", justifyContent: "center", gap: "60px", flexWrap: "wrap" }}>
        
        <div>
          <h2 style={{ fontSize: "2rem", marginTop: "5" }}>Employees</h2>
          <p style={{ color: "#0e0e0eff", marginTop: "5px",fontSize:"30px", fontWeight:"bold"}}>20+</p>
        </div>
        
        <div>
          <h2 style={{ fontSize: "2rem", marginTop: "5" }}>Happy Customers</h2>
          <p style={{ color: "#0e0e0eff", marginTop: "5px",fontSize:"30px", fontWeight:"bold"}}>1000+</p>
        </div>
        
        <div>
          <h2 style={{ fontSize: "2rem", marginTop: "5" }}>Customer Reviews</h2>
          <p style={{ color: "#0e0e0eff", marginTop: "5px",fontSize:"30px", fontWeight:"bold"}}>4.5 Ratings</p>
        </div>

      </div>
    </div>
  );
};

export default StatsSection;