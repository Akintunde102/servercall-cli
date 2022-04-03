import { ServerCallVerbs, ServerCallsType } from 'servercall';

export type ServerCallsKeyType =
  | 'get'
  | 'postUsersExists'
  | 'postUsersGetByField'
  | 'postUsersSendShortCode'
  | 'postUsersCreate'
  | 'postUsersCreateBusiness'
  | 'postUsersUpdate'
  | 'postUsersUpdatePic'
  | 'getUsers'
  | 'getUsersId'
  | 'postUsersResetPassword'
  | 'postUsersForgotPassword'
  | 'getPaymentListOfBanks'
  | 'getPaymentResolveAccount'
  | 'getPaymentGetAccountName'
  | 'getPaymentGetBillDetails'
  | 'postAuthLogin'
  | 'getAuthDetails'
  | 'postVendorExists'
  | 'postVendorCreateUser'
  | 'postVendorLogin'
  | 'getVendorUsers'
  | 'getVendorTransactions'
  | 'getVendorTransactionsGetByTuid'
  | 'getVendorTransactionsClaim'
  | 'getVendorStats'
  | 'postCardsTriggerCreation'
  | 'postCardsSaveTransaction'
  | 'postCardsClaim'
  | 'getCards'
  | 'getCardsId'
  | 'getCardsCode'
  | 'postCardsSpend'
  | 'getAdminApprove'
  | 'getAdminTransactionsPayAll'
  | 'getAdminCardCardRequests'
  | 'postAdminSendGenericMail'
  | 'postAdminLogs'
  | 'postComplainCreate'
  | 'getComplain'
  | 'getGenPdf';

export const serverCalls: ServerCallsType<ServerCallsKeyType> = {
  get: { path: '/', name: 'get', verb: ServerCallVerbs.Get },
  postUsersExists: {
    path: '/users/exists',
    name: 'postUsersExists',
    verb: ServerCallVerbs.Post,
  },
  postUsersGetByField: {
    path: '/users/get-by-field',
    name: 'postUsersGetByField',
    verb: ServerCallVerbs.Post,
  },
  postUsersSendShortCode: {
    path: '/users/send/short-code',
    name: 'postUsersSendShortCode',
    verb: ServerCallVerbs.Post,
  },
  postUsersCreate: {
    path: '/users/create',
    name: 'postUsersCreate',
    verb: ServerCallVerbs.Post,
  },
  postUsersCreateBusiness: {
    path: '/users/create/business',
    name: 'postUsersCreateBusiness',
    verb: ServerCallVerbs.Post,
  },
  postUsersUpdate: {
    path: '/users/update',
    name: 'postUsersUpdate',
    verb: ServerCallVerbs.Post,
  },
  postUsersUpdatePic: {
    path: '/users/update/pic',
    name: 'postUsersUpdatePic',
    verb: ServerCallVerbs.Post,
  },
  getUsers: { path: '/users', name: 'getUsers', verb: ServerCallVerbs.Get },
  getUsersId: {
    path: (args: { id: string }) => `/users/id/${args.id}`,
    name: 'getUsersId',
    verb: ServerCallVerbs.Get,
  },
  postUsersResetPassword: {
    path: '/users/resetPassword',
    name: 'postUsersResetPassword',
    verb: ServerCallVerbs.Post,
  },
  postUsersForgotPassword: {
    path: '/users/forgotPassword',
    name: 'postUsersForgotPassword',
    verb: ServerCallVerbs.Post,
  },
  getPaymentListOfBanks: {
    path: '/payment/list-of-banks',
    name: 'getPaymentListOfBanks',
    verb: ServerCallVerbs.Get,
  },
  getPaymentResolveAccount: {
    path: '/payment/resolve-account',
    name: 'getPaymentResolveAccount',
    verb: ServerCallVerbs.Get,
  },
  getPaymentGetAccountName: {
    path: '/payment/get-account-name',
    name: 'getPaymentGetAccountName',
    verb: ServerCallVerbs.Get,
  },
  getPaymentGetBillDetails: {
    path: '/payment/get-bill-details',
    name: 'getPaymentGetBillDetails',
    verb: ServerCallVerbs.Get,
  },
  postAuthLogin: {
    path: '/auth/login',
    name: 'postAuthLogin',
    verb: ServerCallVerbs.Post,
  },
  getAuthDetails: {
    path: '/auth/details',
    name: 'getAuthDetails',
    verb: ServerCallVerbs.Get,
  },
  postVendorExists: {
    path: '/vendor/exists',
    name: 'postVendorExists',
    verb: ServerCallVerbs.Post,
  },
  postVendorCreateUser: {
    path: '/vendor/create-user',
    name: 'postVendorCreateUser',
    verb: ServerCallVerbs.Post,
  },
  postVendorLogin: {
    path: (args: { vendorId: string }) => `/vendor/login/${args.vendorId}`,
    name: 'postVendorLogin',
    verb: ServerCallVerbs.Post,
  },
  getVendorUsers: {
    path: '/vendor/users',
    name: 'getVendorUsers',
    verb: ServerCallVerbs.Get,
  },
  getVendorTransactions: {
    path: '/vendor/transactions',
    name: 'getVendorTransactions',
    verb: ServerCallVerbs.Get,
  },
  getVendorTransactionsGetByTuid: {
    path: (args: { tUID: string }) => `/vendor/transactions/get_by_tuid/${args.tUID}`,
    name: 'getVendorTransactionsGetByTuid',
    verb: ServerCallVerbs.Get,
  },
  getVendorTransactionsClaim: {
    path: '/vendor/transactions/claim',
    name: 'getVendorTransactionsClaim',
    verb: ServerCallVerbs.Get,
  },
  getVendorStats: {
    path: '/vendor/stats',
    name: 'getVendorStats',
    verb: ServerCallVerbs.Get,
  },
  postCardsTriggerCreation: {
    path: '/cards/triggerCreation',
    name: 'postCardsTriggerCreation',
    verb: ServerCallVerbs.Post,
  },
  postCardsSaveTransaction: {
    path: '/cards/save-transaction',
    name: 'postCardsSaveTransaction',
    verb: ServerCallVerbs.Post,
  },
  postCardsClaim: {
    path: '/cards/claim',
    name: 'postCardsClaim',
    verb: ServerCallVerbs.Post,
  },
  getCards: {
    path: (args: { claimStatus: string }) => `/cards/${args.claimStatus}`,
    name: 'getCards',
    verb: ServerCallVerbs.Get,
  },
  getCardsId: {
    path: (args: { id: string }) => `/cards/id/${args.id}`,
    name: 'getCardsId',
    verb: ServerCallVerbs.Get,
  },
  getCardsCode: {
    path: (args: { code: string }) => `/cards/code/${args.code}`,
    name: 'getCardsCode',
    verb: ServerCallVerbs.Get,
  },
  postCardsSpend: {
    path: (args: { code: string }) => `/cards/${args.code}/spend`,
    name: 'postCardsSpend',
    verb: ServerCallVerbs.Post,
  },
  getAdminApprove: {
    path: (args: { id: string }) => `/admin/approve/${args.id}`,
    name: 'getAdminApprove',
    verb: ServerCallVerbs.Get,
  },
  getAdminTransactionsPayAll: {
    path: '/admin/transactions/pay-all',
    name: 'getAdminTransactionsPayAll',
    verb: ServerCallVerbs.Get,
  },
  getAdminCardCardRequests: {
    path: '/admin/card/card-requests',
    name: 'getAdminCardCardRequests',
    verb: ServerCallVerbs.Get,
  },
  postAdminSendGenericMail: {
    path: '/admin/send-generic-mail',
    name: 'postAdminSendGenericMail',
    verb: ServerCallVerbs.Post,
  },
  postAdminLogs: {
    path: '/admin/logs',
    name: 'postAdminLogs',
    verb: ServerCallVerbs.Post,
  },
  postComplainCreate: {
    path: '/complain/create',
    name: 'postComplainCreate',
    verb: ServerCallVerbs.Post,
  },
  getComplain: {
    path: '/complain',
    name: 'getComplain',
    verb: ServerCallVerbs.Get,
  },
  getGenPdf: {
    path: '/gen/pdf',
    name: 'getGenPdf',
    verb: ServerCallVerbs.Get,
  },
};
