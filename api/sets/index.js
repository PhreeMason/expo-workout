import axios from "axios";
const BASE_URL = "https://us-east-2.aws.data.mongodb-api.com/app/data-dvjtuyr/endpoint/data/v1/action/";

const data = JSON.stringify({
    "collection": "sets",
    "database": "workouts",
    "dataSource": "Cluster0",
});

const config = {
    method: 'post',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key': 'jq2RBXqxJdwsSt934mQUS8gCaAgNiT0UWJw2NJkAdxJh8lsqZwGtDbDlCdmNpvyw',
    },
    data: data
};

export const fetchSets = async () => {
    try {
        const response = await axios({...config, url: `${BASE_URL}find`})
        return response.data.documents
    } catch (error) {
        console.warn(error)
        return []
    }
}

export const addNewSet = async (set) => {
    try {
        const response = await axios({...config, url: `${BASE_URL}insertOne`, data: set})
        console.log(response.data)
        return response.data
    } catch (error) {
        console.warn(error)
        return []
    }
}