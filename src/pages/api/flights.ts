import type {NextApiRequest, NextApiResponse} from 'next'

export interface Flight {
  show_to_affiliates: boolean,
  trip_class: number,
  origin: string,
  destination: string,
  depart_date: string,
  return_date: string,
  number_of_changes: number,
  value: number,
  found_at: string,
  distance: number,
  actual: boolean,
}

 export interface Answer {
  success: boolean;
  data?: Flight[];
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Answer>
) {

  // Get data submitted in request's body
  const body = req.body;

  // Validate incoming data and returns error if required parameters are not found
  if (!body.currency || !body.month || !body.origin || !body.destination) {
    // Sends a HTTP bad request error code
    return res.status(400).json({ success: false })
  }

  // Simple way to get config parameters from env values
  const API_KEY = process.env.AVIASALES_API_KEY;

  // Prepare URL for request to Aviasales API
  const url = new URL("http://api.travelpayouts.com/v2/prices/month-matrix");
  url.searchParams.set("token", API_KEY);
  url.searchParams.set("currency", body.currency);
  url.searchParams.set("month", body.month);
  url.searchParams.set("origin", body.origin);
  url.searchParams.set("destination", body.destination);

  // Make request to API
  const aviasalesResponse = await fetch(url);
  const aviasalesResult = await aviasalesResponse.json();

  // TODO: remove
  console.log(aviasalesResult)

  // Return result to client
  res.status(200).json(aviasalesResult);
}
