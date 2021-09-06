import React from 'react';

let svgs = {

    userProfile: 
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.4733 8.47338C11.1269 7.95915 11.604 7.25399 11.8382 6.456C12.0723 5.65802 12.0519 4.80689 11.7799 4.02102C11.5078 3.23516 10.9975 2.55364 10.32 2.07128C9.64259 1.58892 8.83163 1.32971 8 1.32971C7.16836 1.32971 6.35741 1.58892 5.67995 2.07128C5.0025 2.55364 4.49223 3.23516 4.22014 4.02102C3.94805 4.80689 3.92767 5.65802 4.16184 6.456C4.396 7.25399 4.87307 7.95915 5.52666 8.47338C4.40672 8.92207 3.42952 9.66627 2.69926 10.6267C1.969 11.587 1.51304 12.7276 1.38 13.9267C1.37037 14.0143 1.37808 14.1028 1.40268 14.1874C1.42729 14.272 1.46831 14.3509 1.52341 14.4196C1.63468 14.5584 1.79652 14.6473 1.97333 14.6667C2.15014 14.6862 2.32744 14.6346 2.46621 14.5233C2.60499 14.412 2.69388 14.2502 2.71333 14.0734C2.85972 12.7702 3.48112 11.5666 4.45881 10.6926C5.4365 9.81856 6.70193 9.33539 8.01333 9.33539C9.32473 9.33539 10.5902 9.81856 11.5679 10.6926C12.5455 11.5666 13.1669 12.7702 13.3133 14.0734C13.3315 14.2372 13.4096 14.3885 13.5327 14.4981C13.6559 14.6076 13.8152 14.6677 13.98 14.6667H14.0533C14.2281 14.6466 14.3878 14.5582 14.4977 14.4209C14.6076 14.2835 14.6587 14.1083 14.64 13.9334C14.5063 12.7308 14.0479 11.5874 13.3139 10.6255C12.5799 9.66366 11.5979 8.91969 10.4733 8.47338ZM8 8.00004C7.47258 8.00004 6.95701 7.84364 6.51848 7.55063C6.07995 7.25761 5.73815 6.84113 5.53632 6.35387C5.33449 5.8666 5.28168 5.33042 5.38457 4.81313C5.48746 4.29585 5.74144 3.8207 6.11438 3.44776C6.48732 3.07482 6.96247 2.82084 7.47976 2.71795C7.99704 2.61505 8.53322 2.66786 9.02049 2.8697C9.50776 3.07153 9.92423 3.41332 10.2173 3.85186C10.5103 4.29039 10.6667 4.80596 10.6667 5.33338C10.6667 6.04062 10.3857 6.7189 9.88562 7.21899C9.38552 7.71909 8.70724 8.00004 8 8.00004Z" fill="#8C87A6"/>
        </svg>,
    
    buttonSubmit:
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M20 12C20 12.5523 19.5523 13 19 13L5 13C4.44771 13 4 12.5523 4 12C4 11.4477 4.44771 11 5 11L19 11C19.5523 11 20 11.4477 20 12Z" fill="white"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M19.7071 11.2929C20.0976 11.6834 20.0976 12.3166 19.7071 12.7071L12.7071 19.7071C12.3166 20.0976 11.6834 20.0976 11.2929 19.7071C10.9024 19.3166 10.9024 18.6834 11.2929 18.2929L17.5858 12L11.2929 5.70711C10.9024 5.31658 10.9024 4.68342 11.2929 4.29289C11.6834 3.90237 12.3166 3.90237 12.7071 4.29289L19.7071 11.2929Z" fill="white"/>
        </svg>,
    
    moreActivityContent:
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 9L12 15L18 9" stroke="#2787F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>,

    'activity-name-svg':
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="#2787F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M17 11L19 13L23 9" stroke="#2787F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8.5 11C10.7091 11 12.5 9.20914 12.5 7C12.5 4.79086 10.7091 3 8.5 3C6.29086 3 4.5 4.79086 4.5 7C4.5 9.20914 6.29086 11 8.5 11Z" stroke="#2787F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>,

    'activity-status-svg':
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="#2787F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M17 11L19 13L23 9" stroke="#2787F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8.5 11C10.7091 11 12.5 9.20914 12.5 7C12.5 4.79086 10.7091 3 8.5 3C6.29086 3 4.5 4.79086 4.5 7C4.5 9.20914 6.29086 11 8.5 11Z" stroke="#2787F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>,

    'activity-image-svg':
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="#2787F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21 15L16 10L5 21" stroke="#2787F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8.5 10C9.32843 10 10 9.32843 10 8.5C10 7.67157 9.32843 7 8.5 7C7.67157 7 7 7.67157 7 8.5C7 9.32843 7.67157 10 8.5 10Z" stroke="#2787F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>,
    
    statFriends:
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="#2787F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="#2787F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="#2787F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#2787F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>,

    statSubs:
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="#2787F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M20 8V14" stroke="#2787F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M23 11H17" stroke="#2787F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8.5 11C10.7091 11 12.5 9.20914 12.5 7C12.5 4.79086 10.7091 3 8.5 3C6.29086 3 4.5 4.79086 4.5 7C4.5 9.20914 6.29086 11 8.5 11Z" stroke="#2787F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>,

    statLikes:
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.8401 4.60999C20.3294 4.099 19.7229 3.69364 19.0555 3.41708C18.388 3.14052 17.6726 2.99817 16.9501 2.99817C16.2276 2.99817 15.5122 3.14052 14.8448 3.41708C14.1773 3.69364 13.5709 4.099 13.0601 4.60999L12.0001 5.66999L10.9401 4.60999C9.90843 3.5783 8.50915 2.9987 7.05012 2.9987C5.59109 2.9987 4.19181 3.5783 3.16012 4.60999C2.12843 5.64169 1.54883 7.04096 1.54883 8.49999C1.54883 9.95903 2.12843 11.3583 3.16012 12.39L4.22012 13.45L12.0001 21.23L19.7801 13.45L20.8401 12.39C21.3511 11.8792 21.7565 11.2728 22.033 10.6053C22.3096 9.93789 22.4519 9.22248 22.4519 8.49999C22.4519 7.77751 22.3096 7.0621 22.033 6.39464C21.7565 5.72718 21.3511 5.12075 20.8401 4.60999Z" stroke="#2787F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>,

    statSessions:
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="#2787F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#2787F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>,

    statChanges:
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 20H21" stroke="#2787F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16.5 3.49998C16.8978 3.10216 17.4374 2.87866 18 2.87866C18.2786 2.87866 18.5544 2.93353 18.8118 3.04014C19.0692 3.14674 19.303 3.303 19.5 3.49998C19.697 3.69697 19.8532 3.93082 19.9598 4.18819C20.0665 4.44556 20.1213 4.72141 20.1213 4.99998C20.1213 5.27856 20.0665 5.55441 19.9598 5.81178C19.8532 6.06915 19.697 6.303 19.5 6.49998L7 19L3 20L4 16L16.5 3.49998Z" stroke="#2787F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>



    
    

    

};

let svgManager = {
    getSvg: (svgName) => {
        return svgs[svgName];
    }
}

export default svgManager;