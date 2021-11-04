const Tablist = ({ activeTab, setActiveTab, tabs }) => {
  return (
    <div
      className="tab-list underline-indicators flex"
      role="tablist"
      aria-label="destination list"
    >
      {tabs.map((tab, index) => (
        <button
          key={index}
          aria-selected={activeTab === index}
          role="tab"
          aria-controls={`${tab}-tab`}
          className="uppercase ff-sans-cond text-accent letter-spacing-2"
          tabIndex="0"
          data-image={`${tab}-image`}
          onClick={() => {
            setActiveTab(index);
          }}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tablist;
