export type Location = {
        latitude: number,
        longitude: number,
        zoom: number,
}

export type City = {
        location: Location,
        name: string,
}

export type Host = {
        avatarUrl: string,
        id: number,
        isPro: boolean,
        name: string,
}


export type CommentGet = {
        comment: string,
        date: string,
        id: number,
        rating: number,
        user:Host
}

export type CommentList = CommentGet[]


export type SingleOffer = {
        id: number,
        class: string,
        image: string,
        price: string,
        title: string,
        type: string,
        rating: number,
        bedrooms: number,
        city: City,
        description: string,
        goods: string[],
        host: Host,
        images: string[],
        isFavorite: boolean,
        isPremium: boolean,
        location: Location,
        maxAdults: number,
}

export type OfferData = SingleOffer[]
