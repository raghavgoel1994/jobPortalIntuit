import React, { useState } from "react";
import styles from "./Tabs.module.css";

const Tabs = ({ tabs, children }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].value);

  const handleTabClick = (value) => {
    setActiveTab(value);
  };

  const renderTabContent = () => {
    const activeTabContent = children.find(
      (child) => child.props.tab === activeTab
    );
    return activeTabContent ? activeTabContent.props.children : null;
  };

  return (
    <div className={styles.tabs}>
      <div className={styles.tabList}>
        {tabs.map((tab) => (
          <button
            key={tab.value}
            className={`${styles.tab} ${
              activeTab === tab.value ? styles.active : ""
            }`}
            onClick={() => handleTabClick(tab.value)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className={styles.tabContent}>{renderTabContent()}</div>
    </div>
  );
};

export default Tabs;
