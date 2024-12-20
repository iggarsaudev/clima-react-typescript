export type SearchType = {
    city: string
    country: string
}

export type Country = {
    code: string
    name: string
}

// Lo usamos solo para Castear el type y Type Guards de useWeather.ts
// export type Weather = {
//     name: string
//     main: {
//         temp: number
//         temp_max: number
//         temp_min: number
//     }
// }