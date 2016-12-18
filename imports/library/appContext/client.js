export default appContextClient = new ReactiveDict("appContext");

appContextClient.set("retryTime", null); // used to reconnect to the server

appContextClient.reset = function () {
	// Here, reset any value you wish
};

global.appContext = appContextClient;
