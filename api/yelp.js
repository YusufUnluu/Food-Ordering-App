import axios from "axios";

export default axios.create({
    baseURL:"https://api.yelp.com/v3/businesses",
    headers:{
        Authorization:"Bearer orNGvh-6M6yzq4_pzsCb1TPLlHemsa4jeP7_LLXu5xqBviZpUk1aVde3fqbhNiZoSzPKJqQFkDadMbLtyO1Mo6gjdwurAPZOngDz8rctC0vMm9kbExFw2Pg5u0D0ZXYx",
    },
})