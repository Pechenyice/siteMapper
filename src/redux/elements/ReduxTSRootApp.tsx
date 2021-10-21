import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import store from "../core/store";
import ReduxAppManager from "./components/ReduxAppManager/ReduxAppManager";

function ReduxTSRootApp() {
	
	return (
		<Provider store={store}>
            <ReduxAppManager />
        </Provider>
	);
}

export default ReduxTSRootApp;
