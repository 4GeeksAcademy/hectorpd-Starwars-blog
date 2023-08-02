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

			addFavorites: (nameCharacter) => {
				const FavoritesList = getStore().favorites; // Obtenemos la lista actual de favoritos
				const isDuplicate = FavoritesList.some((favorite) => favorite === nameCharacter); // Verificamos si el título ya está en la lista de favoritos
				if (!isDuplicate) {  // Si no es un duplicado, creamos una nueva (copia) lista de favoritos más el nuevo título
					const newFavorites = [...FavoritesList, nameCharacter];
					setStore({ favorites: newFavorites });  // Actualizamos el estado del contexto con la nueva lista de favoritos
					localStorage.setItem("favorites", JSON.stringify(newFavorites));  // Almacenamos la nueva lista de favoritos en el localStorage
				}
			},
			removeFavorites: (nameCharacter) => {
				const FavoritesList = getStore().favorites;
				const listRemove = FavoritesList.filter((favorite)=> favorite != nameCharacter);
				setStore({favorites: listRemove});
				localStorage.setItem("favorites", JSON.stringify(listRemove))
			}
		}
	};
};

export default getState;
