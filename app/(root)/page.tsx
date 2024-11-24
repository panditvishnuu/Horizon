import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
  const isLoggedIn:User = { firstName: "Vishnu" , lastName : "Sharma", email : "vishnusharma2k03@gmail.com"};
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            subtext="Access & manage your account and transactions efficiently."
            user={isLoggedIn?.firstName || "Guest"}
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.34}
          />
        </header>

        RECENT TRANSACTIONS
      </div>

      <RightSidebar user = {isLoggedIn} transactions={[]} banks = {[{},{}]}/>
    </section>
  );
};

export default Home;
