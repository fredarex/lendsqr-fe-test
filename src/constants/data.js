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
                icon: decision_icon,
                route: '/dashboard/decision'
            },
            {
                name: 'Savings',
                icon:   piggy_bank_icon,
                route: '/dashboard/saving'
            },
            {
                name:'Loan Requests',
                icon:  loan_requests_icon,
                route: '/dashboard/loans request'
            },
            {
                name: 'Whitelist',
                icon: whitelist_icon,
                route: '/dashboard/whitelist'
            },
            {
                name: 'Karma',
                icon:karma_icon,
                route: '/dashboard/karma'
            }
];

const bussinessLinks = [
            {
                name: 'Organization',
                icon: organization,
                route: '/dashboard/organization'
            },
            {
                name: 'Loan Products',
                icon: loan_requests_icon,
                route: '/dashboard/loan product'
            },
            {
                name: 'Savings Products',
                icon: savings_icon,
                route: '/dashboard/savings products'
            },
            {
                name:'Fees and Charges',
                icon: charges_icon,
                route: '/dashboard/feeandcharges'
            },
            {
                name: 'Transactions',
                icon:   transactions_icon,
                route: '/dashboard/transactions'
            },
            {
                name:'Services',
                icon:  services_icon,
                route: '/dashboard/services'
            },
            {
                name: 'Service Account',
                icon: account_icon,
                route: '/dashboard/service account'
            },
            {
                name: 'Settlements',
                icon:settlements_icon,
                route: '/dashboard/settlements'
            },
            {
                name:'Reports',
                icon:reports_icon,
                route: '/dashboard/reports'
            }
];

const settingLinks = [
    {
        name:'Preferences',
        icon: preferences_icon,
        route: '/dashboard/preferences'
    },
    {
        name:'Fees and Pricing',
        icon: pricing_icon,
        route: '/dashboard/feesandpricing'
    },
    {
        name:'Audit Logs',
        icon:clipboard_icon,
        route: '/dashboard/audit logs'
    }
]

export {
    customerlinks,
    bussinessLinks,
    settingLinks
}