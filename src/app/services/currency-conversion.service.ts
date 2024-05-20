// src/app/services/currency-conversion.service.ts
import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
    providedIn: 'root'
})
export class CurrencyConversionService {
    private apiKey = '0c0432c3884ee61c31407325';
    private baseUrl = `https://v6.exchangerate-api.com/v6/${this.apiKey}/latest`;

    constructor() { }

    async getRates(baseCurrency: string) {
        try {
            const response = await axios.get(`${this.baseUrl}/${baseCurrency}`);
            return response.data.conversion_rates;
        } catch (error) {
            console.error('Error fetching conversion rates:', error);
            throw error;
        }
    }
}
