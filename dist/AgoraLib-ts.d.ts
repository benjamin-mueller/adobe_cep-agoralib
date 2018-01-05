/** AgoraLib - v6.1.0 */
/**
 * @class AgoraLib
 *
 * AgoraLib provides an interface to the Adobe Exchange service and Exchange plugin.
 * Please note that Vulcan.js is required.
 */
export declare class AgoraLib {
    static readonly IS_ENTITLED: string;
    static readonly GET_PURCHASE_URL: string;
    static readonly CREATE_ENTITLEMENT: string;
    static readonly GET_VERSION: string;
    static readonly STATUS: string;
    static readonly STATUSCODE: string;
    static readonly MESSAGE_TYPE: string;
    static readonly RESPONSE_TYPE: string;
    static readonly ACCC_STARTED_UP_MESSAGE: string;
    static readonly MESSAGE_REQUEST_TEMPLATE: string;
    static readonly MESSAGE_RESPONSE_TEMPLATE: string;
    static readonly TIMEOUT: number;
    static readonly status: {
        success: {
            status: string;
            code: string;
        };
        updateAvailable: {
            status: string;
            code: string;
        };
        entitlementAlreadyCreated: {
            status: string;
            code: string;
        };
        perpetualPurchase: {
            status: string;
            code: string;
        };
        trialPurchase: {
            status: string;
            code: string;
        };
        subscriptionPurchase: {
            status: string;
            code: string;
        };
        free: {
            status: string;
            code: string;
        };
        userNotEntitledError: {
            status: string;
            code: string;
        };
        subscriptionExpiredError: {
            status: string;
            code: string;
        };
        networkDisabledError: {
            status: string;
            code: string;
        };
        networkError: {
            status: string;
            code: string;
        };
        productNotFoundError: {
            status: string;
            code: string;
        };
        UserLoggedOutError: {
            status: string;
            code: string;
        };
        internalClientError: {
            status: string;
            code: string;
        };
        internalServerError: {
            status: string;
            code: string;
        };
        creativeCloudFailedToLaunchError: {
            status: string;
            code: string;
        };
        creativeCloudNotFoundError: {
            status: string;
            code: string;
        };
        ApiNotSupportedError: {
            status: string;
            code: string;
        };
        creativeCloudNotLaunchedError: {
            status: string;
            code: string;
        };
    };
    callerID: string;
    bundleID: any;
    extensionID: any;
    guid: string;
    isEntitledCallback: any;
    getPurchaseUrlCallback: any;
    getVersionCallback: any;
    createEntitlementCallback: any;
    exchangeVersion: any;
    constructor();
    private responseCallback(message);
    private checkVersion();
    private continueWithCheckVersion();
    private checkConnection(callback, ignoreACCC);
    private compareVersion(a, b);
    /**
     * Triggers a check to determine if the current user is entitled to access the active extension.
     * Possible responses are True, False or Unknown. Further information about the response can be found in
     * the responses status and statusCode properties. For example, if the response is true, status and statusCode can
     * return the following combinations:\n
     * <ul>\n
     *     <li>1: Perpetual purchase</li>\n
     *     <li>2: Trial purchase</li>\n
     *     <li>3: Subscription purchase</li>\n
     *     <li>4: Subscription expired {date}</li>\n
     * </ul>\n
     *
     * This API has a dependency on VulcanInterface.js and will throw an error if it is not defined.
     *
     * @param callback  The JavaScript handler function to return the AgoraLibResponse object.
     * @param ignoreACCC  When true this API will not attempt to launch the Adobe Creative Cloud Connection application if it is not running. The default value is false.
     * @since 5.2.0
     */
    isEntitled(callback: any, ignoreACCC: any): void;
    /**
     * Calls the Adobe Exchange service for a Purchase Url for the active extension. If the request is successful the statusCode in the response will be 0.
     *
     * This API has a dependency on VulcanInterface.js and will throw an error if it is not defined.
     *
     * @param callback  The JavaScript handler function to return the AgoraLibResponse object. The Response property will either be the final checkout page or the product details page (see below).
     * @param straightToCheckout If set to true the URL returned will be the final checkout page for this Extension on the Adobe Add-ons site. If set to false the
     *                           URL returned will be the Product details page for this Extension on the Adobe Add-ons site. Default is false.
     * @param ignoreACCC  When true this API will not attempt to launch the Adobe Creative Cloud Connection application if it is not running. The default value is false.
     * @since 5.2.0
     */
    getPurchaseUrl(callback: any, straightToCheckout: any, ignoreACCC: any): void;
    /**
     * Creates an entitlement for this extension on Adobe Exchange for the signed in user.
     * If no user is available then the statusCode in the response will be 1004.
     * If the request is successful the statusCode in the response will be 0.
     *
     * By adding an entitlement the user will be kept up date with the latest version of the extension
     * which will be published to Adobe Exchange.
     *
     * This API has a dependency on VulcanInterface.js & CSInterface.js and will throw an error if either is not defined.
     *
     * @param callback  The JavaScript handler function to return the AgoraLibResponse object.
     * @param ignoreACCC  When true this API will not attempt to launch the Adobe Creative Cloud Connection application if it is not running. The default value is false.
     * @since 5.2.0
     */
    createEntitlement(callback: (executionResult: any) => void, ignoreACCC: boolean): void;
}
/**
 * Returned as the response by all AgoraLib APIs.
 * @param string response   The main result of the API request
 * @param string status     Textual description that either provides information of an error or additional information about the response.
 * @param int statusCode    status code.
 */
export declare class AgoraLibResponse {
    response: any;
    status: any;
    statusCode: any;
    constructor(response: any, status: any, statusCode: any);
}
