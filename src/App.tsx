import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";

import { client } from "./lib/apollo";

import Router from "./Router";
import Footer from "./components/Footer";

export default function App() {
	return (
		<ApolloProvider client={client}>
			<BrowserRouter>
				<Router />

				<Footer />
			</BrowserRouter>
		</ApolloProvider>
	);
}
