import { NextResponse } from 'next/server';

const API_KEY = process.env.EXCHANGE_RATE_API_KEY;
const BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/`;

export async function GET(req: Request): Promise<Response> {
    try {
        const { searchParams } = new URL(req.url);
        const currency = searchParams.get('currency');

        if (!currency) {
            return NextResponse.json({ error: 'Currency is required' }, { status: 400 });
        }

        const response = await fetch(`${BASE_URL}${currency}`);
        const data = await response.json();

        if (!response.ok) {
            return NextResponse.json({ error: data.error || 'Failed to fetch exchange rates'}, { status: response.status });
        }

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: 'Internal server error'},{ status: 500 });
    }
}