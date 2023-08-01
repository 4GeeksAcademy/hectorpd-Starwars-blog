const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: []
		},
		actions: {

			// Justo aqui es donde se van a definir todos los fecht (funciones) a utilizar, que a su vez modificaran las variables en demo
			//luego llamare y ejecutare estas funciones en el useEffect del appContext
			
			getPeople: async () => {
				if (localStorage.getItem("peopleLocal") === null) {
					const host = "https://www.swapi.tech/api";
					const url = host + '/people/';
					const request = {
						method: "GET",
						rediret: "follow"
					}
					const response = await fetch(url, request);
					console.log(response);
					if (response.ok) {
						const dataPeople = await response.json();
						localStorage.setItem("peopleLocal", JSON.stringify(dataPeople));
					} else {
						console.log("Error: ", response.status, response.statusText);
					}
				};
			},	
			getShips: async () => {
				if (localStorage.getItem("shipsLocal") === null) {
					const host = "https://www.swapi.tech/api";
					const url = host + '/starships/';
					const request = {
						method: "GET",
						rediret: "follow"
					}
					const response = await fetch(url, request);
					console.log(response);
					if (response.ok) {
						const dataShips = await response.json();
						localStorage.setItem("shipsLocal", JSON.stringify(dataShips));
					}else {
						console.log("Error: ", response.status, response.statusText);
					}
				} 
			},
			getWorlds: async () => {
				if (localStorage.getItem("worldsLocal") === null) {
					const host = "https://www.swapi.tech/api";
					const url = host + '/planets/';
					const request = {
						method: "GET",
						rediret: "follow"
					}
					const response = await fetch(url, request);
					console.log(response);
					if (response.ok) {
						const dataWorlds = await response.json();
						localStorage.setItem("worldsLocal", JSON.stringify(dataWorlds));
					} else {
						console.log("Error: ", response.status, response.statusText);
					}
				};
			},

			addFavorites: (name) => {
				setStore({favorites: [...getStore().favorites, name]})
			},
			removeFavorites: (id) => {
				setStore({favorites: getStore().favorites.filter((item, i) => {
					return  i != id;
				})})
			}
		}
	};
};

export default getState;
