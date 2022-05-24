const productos = [
    //https://www.mercadolibre.com.ar/smart-tv-samsung-series-7-qn85q70aagczb-qled-4k-85-220v/p/MLA18614280#reco_item_pos=1&reco_backend=machinalis-homes-pdp-boos&reco_backend_type=function&reco_client=home_navigation-recommendations&reco_id=639778f1-c33b-49d7-b80f-1762157b8962&c_id=/home/navigation-recommendations/element&c_element_order=2&c_uid=914be52f-0b3e-41d9-885b-8b6f799abe6d
    {
        id: '1',
        name: 'Smart TV Samsung Series 7 QN85Q70AAGCZB QLED 4K 85" 220V',
        price: 439.999,
        category: 'Es smart',
        img: 'https://http2.mlstatic.com/D_NQ_NP_690682-MLA48701255694_122021-F.webp',
        stock: 30,
        description: 'tv smart'
    },
]


export const getProducts = () => {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000)
    })
}