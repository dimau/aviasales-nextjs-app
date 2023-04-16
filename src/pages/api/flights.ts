import type {NextApiRequest, NextApiResponse} from 'next'

interface Flight {
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

interface Answer {
  success: boolean;
  data?: Flight[];
}

async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Answer>
) {

  // Validate incoming data and returns error if required parameters are not found
  if (!req.query?.currency || !req.query?.month || !req.query?.origin || !req.query?.destination) {
    // TODO: add logging
    console.log(`Error with query parameters. Currency: ${req.query.currency}, Month: ${req.query.month}, Origin: ${req.query.origin}, Destination: ${req.query.destination}`);

    // Sends a HTTP bad request error code
    return res.status(400).json({ success: false })
  }

  // Simple way to get config parameters from env values
  const API_KEY = process.env.AVIASALES_API_KEY;

  // Prepare URL for request to Aviasales API
  const url = new URL("http://api.travelpayouts.com/v2/prices/month-matrix");
  url.searchParams.set("token", API_KEY);
  url.searchParams.set("currency", <string>req.query.currency);
  url.searchParams.set("month", <string>req.query.month);
  url.searchParams.set("origin", <string>req.query.origin);
  url.searchParams.set("destination", <string>req.query.destination);

  // Make request to API
  const aviasalesResponse = await fetch(url);
  const aviasalesResult = await aviasalesResponse.json();

  // Return result to client
  res.status(200).json(aviasalesResult);
}

export { Flight, Answer, handler as default};