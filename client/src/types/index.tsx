export interface Commitment {
    id: string;
    asset_class: string;
    amount: number;
    currency: string;
}

export interface Investor {
    id: string;
    name: string;
    type: string;
    country: string;
    date_added: Date;
    total_commitment: number;
    currency: string;
}