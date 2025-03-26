

interface Name {
    firstname: string,
    lastname: string

}

interface GeoLocation{
    lat: number,
    lng: number
}

interface Address{
    geoLocation:GeoLocation;
    city: string,
    street: string,
    number: number,
    zipcode: string
}


interface User{
    name: Name,
    email: string,
    id: number,
    phone: string,
    image: string,
    address: Address
}

interface UserState{
    user: User | null,
    pending: boolean,
    error: any,
    
    //address: Address
   
}


export type {UserState};