interface IFlight {
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

export type { IFlight };