let initialState = {
    productWomenArray: [{
            id: 1,
            name: "Панама",
            comp: "20% хлопок 30% вискоза 50% плащевка",
            price: 60,
        },
        {
            id: 2,
            name: "Штаны",
            comp: "70% вискоза 25% хлопок 5% шерсть",
            price: 130,
        },
        {
            id: 3,
            name: "Платье",
            comp: "80% хлопок 20% поливискоза",
            price: 150
        },
        {
            id: 4,
            name: "Пальто",
            comp: "100% плащевка",
            price: 250
        },
        {
            id: 5,
            name: "Худи",
            comp: "50% поливискоза 50% искуственная замша",
            price: 190,
        },
        {
            id: 6,
            name: "Косуха",
            comp: "100% экокожа - основной материал  80% полиэстер 20% хлопок",
            price: 490,
        }
    ]
};

const ForWomenReducer = (state = initialState, action) => {
    return state;
}
export default ForWomenReducer;