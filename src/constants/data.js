import { account_icon, charges_icon, clipboard_icon, decision_icon, guarantors_icon, home_icon, karma_icon, loans_icon, loan_requests_icon, organization, piggy_bank_icon, preferences_icon, pricing_icon, reports_icon, savings_icon, services_icon, settlements_icon, transactions_icon, user_friends_icon, whitelist_icon } from "./images";

const customerlinks = [
    
            {
                name: 'Users',
                icon: user_friends_icon,
                route: '/dashboard/users'
            },
            {
                name: 'Guarantors',
                icon: guarantors_icon,
                route: '/dashboard/guarantors'
            },
            {
                name: 'Loans',
                icon: loans_icon,
                route: '/dashboard/loans'
            },
            {
                name:'Decision Models',
                icon: decision_icon
            },
            {
                name: 'Savings',
                icon:   piggy_bank_icon
            },
            {
                name:'Loan Requests',
                icon:  loan_requests_icon
            },
            {
                name: 'Whitelist',
                icon: whitelist_icon
            },
            {
                name: 'Karma',
                icon:karma_icon
            }
];

const bussinessLinks = [
            {
                name: 'Organization',
                icon: organization
            },
            {
                name: 'Loan Products',
                icon: loan_requests_icon
            },
            {
                name: 'Savings Products',
                icon: savings_icon
            },
            {
                name:'Fees and Charges',
                icon: charges_icon
            },
            {
                name: 'Transactions',
                icon:   transactions_icon
            },
            {
                name:'Services',
                icon:  services_icon
            },
            {
                name: 'Service Account',
                icon: account_icon
            },
            {
                name: 'Settlements',
                icon:settlements_icon
            },
            {
                name:'Reports',
                icon:reports_icon
            }
];

const settingLinks = [
    {
        name:'Preferences',
        icon: preferences_icon
    },
    {
        name:'Fees and Pricing',
        icon: pricing_icon
    },
    {
        name:'Audit Logs',
        icon:clipboard_icon
    }
]

export {
    customerlinks,
    bussinessLinks,
    settingLinks
}