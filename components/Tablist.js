const Tablist = ({ activeTab, setActiveTab, tabs, page, srOnly, type }) => {
    const tabFocus = activeTab;

    const changeTabFocus = (e) => {
        const keydownLeft = 37;
        const keydownRight = 39;

        // change the tabindex of the current tab to -1
        if (e.keyCode === keydownLeft || e.keyCode === keydownRight) {
            const buttons = document.querySelectorAll('[role="tab"]');
            if (e.keyCode === keydownRight) {
                tabFocus++;
                if (tabFocus >= tabs.length) {
                    tabFocus = 0;
                }
            } else if (e.keyCode === keydownLeft) {
                tabFocus--;
                if (tabFocus < 0) {
                    tabFocus = tabs.length - 1;
                }
            }
            buttons[tabFocus].setAttribute('tabindex', '0');
            buttons[tabFocus].focus();
        }
    };
    return (
        <div
            className={`tab-list ${type}-indicators flex`}
            role="tablist"
            aria-label={`${page} list`}
        >
            {tabs.map((tab, index) => (
                <button
                    key={index}
                    aria-selected={activeTab === index}
                    role="tab"
                    aria-controls={`${tab}-tab`}
                    className="uppercase ff-sans-cond text-accent letter-spacing-2"
                    tabIndex={tabFocus === index ? 0 : -1}
                    data-image={`${tab}-image`}
                    onClick={() => {
                        setActiveTab(index);
                    }}
                    onKeyDown={changeTabFocus}
                >
                    {srOnly ? <span className="sr-only">{tab}</span> : tab}
                </button>
            ))}
        </div>
    );
};

export default Tablist;
